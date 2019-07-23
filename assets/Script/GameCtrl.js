var NetCtrl = require('NetCtrl');
var Cmd = require('CmdLogon');
var Config = require('GlobalConfig');
var Util = require('Util');

cc.Class({
    extends: cc.Component,

    properties: {
        entityPrefab: cc.Prefab,
        bulletPrefab: cc.Prefab,
        canvas: cc.Node,
        entityLayer: cc.Node,
        bulletLayer: cc.Node,
        actionLayer: cc.Node,
        showingLayer: cc.Node,
        camera: cc.Node,

        clientPrediction: false,
        serverReconciliation: false,
        interpolation: false,
        bulletClip: {
            type:cc.AudioClip,
            default:null,
        },
        bombClip: {
            type:cc.AudioClip,
            default:null,
        },
    },
    // use this for initialization
    onLoad: function () {
        NetCtrl.dataEventHandler = this.node;
        this.node.on('netmsg',this.onNetMsg,this);

        this._actionLayerJS = this.actionLayer.getComponent('ActionLayer');
        this._actionLayerJS._managerJS = this;
        this._showingLayerJS = this.showingLayer.getComponent('ShowingLayer');

        //初始参数
        this.entityMap = new Map();
        this.bulletMap = new Map();

        //使用对象池
        this.entityPool = new cc.NodePool();
        this.bulletPool = new cc.NodePool();
        for (let i = 0; i < 10; i++) {
            let entity = cc.instantiate(this.entityPrefab);
            this.entityPool.put(entity);
        }

        for (let i = 0; i < 20; i++) {
            let bullet = cc.instantiate(this.bulletPrefab);
            this.bulletPool.put(bullet);
        }

        this.init();
    },
    sendShootMessage(worldX, worldY) {
        let now = new Date().getTime();
        if (now - this.lastShootTime < 600) return;
        this.lastShootTime = now;
        NetCtrl.Send("ReqShoot");
        //NetCtrl.sendCmd(Cmd.MDM_GF_GAME, Cmd.SUB_MB_SHOOT);
    },
    sendJumpMessage() {
        NetCtrl.Send("ReqJump");
       // NetCtrl.sendCmd(Cmd.MDM_GF_GAME, Cmd.SUB_MB_JUMP);
    },
    createEntity(info) {
        let entity = null;
        if (this.entityPool.size() > 0) {
            entity = this.entityPool.get();
        } else {
            entity = cc.instantiate(this.entityPrefab);
        }
        entity.parent = this.entityLayer;
        let entityJS = entity.getComponent('Entity');
        entityJS._managerJS = this;
        entityJS.init(info);
        this.entityMap.set(info.id, entityJS);
        return entityJS;
    },
    createBullet(info) {
        let bullet = null;
        if (this.bulletPool.size() > 0) {
            bullet = this.bulletPool.get();
        } else {
            bullet = cc.instantiate(this.bulletPrefab);
        }
        bullet.parent = this.bulletLayer;
        let bulletJS = bullet.getComponent('Bullet');
        bulletJS.init(info);
        this.bulletMap.set(info.bulletID, bulletJS);
        return bulletJS;
    },
    init() {
        this.sceneReady = false;
        this.inputSequenceNumber = 0;
        this.pendingInputs = [];
        this.entityMap.clear();
        this.bulletMap.clear();
        this.entityLayer.removeAllChildren();
        this.bulletLayer.removeAllChildren();
        this.lastShootTime = 0;
        this.pressTime = 0;
        NetCtrl.Send("ReqGameScene")
        //NetCtrl.sendCmd(Cmd.MDM_GF_GAME, Cmd.SUB_MB_GAME_SCENE);
    },
    entityDied(node) {
        this.entityPool.put(node);
    },
    onNetMsg: function (msg) {
        //msg = msg.detail;
        var data = msg.data;
        //if (this.sceneReady === false && msg.subID !== Cmd.SUB_MB_GAME_SCENE) return;
        switch (msg.msgName) {
            case "RespGameScene": {
                if (data.err!="Invalid"){
                    cc.log(data.err);
                    return 
                }
                this.sceneReady = true;
                this._showingLayerJS.setLeftClock(data.gameLeftSec);
                for (let i = 0; i < data.entities.length; i++) {
                    this.createEntity(data.entities[i]);
                }
               // this.schedule(this.calculateRank, 2);
            }
            case "SNoticeWorldChange": {
                if (data.deleteEntities) {
                    for (let i = 0; i < data.deleteEntities.length; i++) {
                        let entityID = data.deleteEntities[i];
                        if (G.entityID === entityID) {
                        } else {
                            let itemJS = this.entityMap.get(entityID);
                            itemJS.playDeadAni();
                            this.playBombEffect(entityID);
                            this.entityMap.delete(entityID);
                        }
                    }
                }

                if (data.deleteBullets) {
                    for (let i = 0; i < data.deleteBullets.length; i++) {
                        let bulletID = data.deleteBullets[i];
                        if (this.bulletMap.has(bulletID)) {
                            let itemJS = this.bulletMap.get(bulletID);
                            this.bulletMap.delete(bulletID);
                            this.bulletPool.put(itemJS.node);
                        }
                    }
                }

                if (data.changedEntities) {
                    for (let i = 0; i < data.changedEntities.length; i++) {
                        let item = data.changedEntities[i];
                        let entityID = item.id;
                        let itemJS = this.entityMap.get(entityID);
                        if (entityID === G.entityID && item.score !== itemJS.score) {
                            this._showingLayerJS.showGetScore(item.score - itemJS.score);
                        }
                        itemJS.applyDisplay(item);
                    }
                }

                break;
            }
            case "SNoticeNewEntity": {
                let entity = data.entity
                if (entity.id === G.entityID) return;
                if (this.entityMap.has(entity.id)) return;
                this.createEntity(entity);
                break;
            }
            //接受所有玩家的状态
            case "SNoticeWorldPos": {
                let now = new Date().getTime();
                if (data.entities) {
                    for (let i = 0; i < data.entities.length; i++) {
                        let item = data.entities[i];
                        let entityID = item.id;
                        let entityJS = this.entityMap.get(entityID);
                        //entityJS.applyInfo(item);
                        //如果是我
                        if (entityID=== G.entityID) {
                            entityJS.node.x = item.x;
                            entityJS.node.y = item.y;
                            entityJS.rotation = item.rotation;
                            entityJS.node.angle  = item.rotation;
                            if (this.serverReconciliation) {
                                let j = 0;
                                while (j < this.pendingInputs.length) {
                                    let input = this.pendingInputs[j];
                                    if (input.inputSeqID <= data.lastProcessedInputID) {
                                        this.pendingInputs.splice(j, 1);
                                    } else {
                                        entityJS.applyInput(input);
                                        j++;
                                    }
                                }
                            } else {
                                this.pendingInputs = [];
                            }
                        } else {
                            if (this.interpolation) {
                                let timestamp = new Date().getTime();
                                entityJS.positionBuffer.push([timestamp, item.x, item.y, item.rotation]);
                            } else {
                                entityJS.node.x = item.x;
                                entityJS.node.y = item.y;
                                entityJS.node.angle  = item.rotation;
                            }
                        }

                    }
                }
                break;
            }
            case "SNoticeShoot": {
                this.createBullet(data);
                this.playBulletEffect(data.creatorEntityID);
                break;
            }
            case "SNoticeGameOver": {
               // this.unschedule(this.calculateRank);
                this._actionLayerJS.hide();
                //NetCtrl.close();
                this.sceneReady = false;
                //play anim and turn to "end" scene
                G.gameEnd = data;
                if (data.overReason === Cmd.OVER_REASON_KILLED) {
                    this.entityMap.get(G.entityID).playDeadAni();
                    this.playBombEffect(G.entityID);
                    let objArr = new Array();
                    this.entityMap.forEach(function (entityJS, key, mapObj) {
                        if (entityJS.dead === false) {
                            let obj = {};
                            obj.entityID = key;
                            obj.score = entityJS.score;
                            obj.name = entityJS.name;
                            obj.killCount = entityJS.killCount;
                            obj.headImgUrl = entityJS.headImgUrl;
                            obj.accountType = entityJS.accountType;
                            objArr.push(obj);
                        }
                    });
                    objArr.sort(function (a, b) {
                        if (a.score < b.score) {
                            return true;
                        } else if (a.score > b.score) {
                            return false;
                        } else {
                            return a.entityID > b.entityID;
                        }
                    });
                    G.gameEnd.rankInfo = objArr;
                } else {
                    // for (let i = 0; i < data.rankInfo.length; i++) {
                    //     let item = data.rankInfo[i];
                    //     item.name = this.entityMap.get(item.entityID).name;
                    // }
                }
                this.playGameEnd();
                break;
            }
        }
        return;
    },
    playGameEnd() {
        this.schedule(this.scheduleCamera, 0.02);
    },
    scheduleCamera() {
        let targetPos = {};
        targetPos.x = 1280;
        targetPos.y = 720;
        let position = this.camera.parent.convertToNodeSpaceAR(targetPos);
        this.camera.x = (position.x + this.camera.x) / 2;
        this.camera.y = (position.y + this.camera.y) / 2;
        let camera = this.camera.getComponent(cc.Camera);
        //  cc.log(camera.zoomRatio);
        camera.zoomRatio -= 0.02;
        if (camera.zoomRatio <= 0.5) {
            this.unschedule(this.scheduleCamera);
            this.scheduleOnce(function () {
                cc.director.loadScene('end');
            }, 1.5);
        }
    },
    playBulletEffect(creatorID) {
        let entityA = this.entityMap.get(creatorID);
        if (!entityA){
            cc.log("playBulletEffect entityID not exist",creatorID)
            return 
        }
        let nodeA = entityA.node;
        let nodeB = this.entityMap.get(G.entityID).node;
        let distance = nodeA.position.sub(nodeB.position).mag()
        //let distance = cc.pDistance(nodeA.position, nodeB.position);
        if (distance <= 500) {
            let volume = 1.0;
            if (distance > 100) {
                volume = 100 / distance;
            }
            cc.audioEngine.play(this.bulletClip, false, volume);
        }
    },
    playBombEffect(entityID) {
        let nodeA = this.entityMap.get(entityID).node;
        let nodeB = this.entityMap.get(G.entityID).node;
        let distance = nodeA.position.sub(nodeB.position).mag()
        //let distance = cc.pDistance(nodeA.position, nodeB.position);
        if (distance <= 500) {
            let volume = 1.0;
            if (distance > 100) {
                volume = 100 / distance;
            }
            cc.audioEngine.play(this.bombClip, false, volume);
        }
    },
    onDestroy: function () {
        this.node.off('netmsg', this.onNetMsg, this);
    },
    update(dt) {
        if (this.sceneReady === false) return;
        this.processInputs(dt);
        this.checkBulletValid();
        if (this.interpolation) {
            this.interpolateEntities();
        }
    },
    processInputs(dt) {
        let targetRotation = this._actionLayerJS.getTargetRotation();
        if (targetRotation == null) {
            this.pressTime = 0;
            return;
        }
        this.pressTime = dt;
        // if (this.pressTime < 0.1) return;
        let input = { pressTime: this.pressTime };
        input.targetRotation = targetRotation;
        input.inputSeqID = this.inputSequenceNumber++;
        //input.entityID = G.entityID;
        NetCtrl.Send("ReqMove",input);
        if (this.clientPrediction) {
            let entityJS = this.entityMap.get(G.entityID);
            entityJS.applyInput(input);
        }

        this.pendingInputs.push(input);
    },
    checkBulletValid() {
        let now = new Date().getTime();
        let deleteList = new Array();
        this.bulletMap.forEach(function (item, key, mapObj) {
            if (now - item.createTime >= G.config.bulletLiveTime) {
                deleteList.push(key);
            }
        });

        for (let i = 0; i < deleteList.length; i++) {
            let item = this.bulletMap.get(deleteList[i]);
            this.bulletMap.delete(deleteList[i]);
            this.bulletPool.put(item.node);
        }
    },
    interpolateEntities() {
        let now = new Date().getTime();
        let render_timeStamp = now - G.config.noticePosDuration;
        this.entityMap.forEach(function (entityJS, key, mapObj) {
            if (key !== G.entityID) {
                let buffer = entityJS.positionBuffer;
                while (buffer.length >= 2 && buffer[1][0] <= render_timeStamp) {
                    buffer.shift();
                }
                if (buffer.length >= 2 && buffer[0][0] <= render_timeStamp && buffer[1][0] >= render_timeStamp) {
                    let x0 = buffer[0][1];
                    let x1 = buffer[1][1];
                    let y0 = buffer[0][2];
                    let y1 = buffer[1][2];
                    let t0 = buffer[0][0];
                    let t1 = buffer[1][0];
                    let r0 = buffer[0][3];
                    let r1 = buffer[1][3];
                    let distance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
                    if (distance > G.entitySpeed - 5) {
                        entityJS.rotation = r1;
                        entityJS.node.x = x1;
                        entityJS.node.y = y1;
                        entityJS.rotation = -entityJS.rotation;
                    } else {
                        entityJS.node.x = x0 + (x1 - x0) * (render_timeStamp - t0) / (t1 - t0);
                        entityJS.node.y = y0 + (y1 - y0) * (render_timeStamp - t0) / (t1 - t0);
                        entityJS.rotation = r0 + (r1 - r0) * (render_timeStamp - t0) / (t1 - t0);
                        entityJS.node.angle  = entityJS.rotation;
                    }
                }
            }
        });
    },
    lateUpdate: function (dt) {
        if (this.sceneReady === false) return;
        let meNode = this.entityMap.get(G.entityID).node;
        let targetPos = this.entityMap.get(G.entityID).node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        if (meNode.x < 640) {
            targetPos.x = 640;
        } else if (meNode.x > 2560 - 640) {
            targetPos.x = 2560 - 640;
        }
        if (meNode.y < 360) {
            targetPos.y = 360;
        } else if (meNode.y > 1440 - 360) {
            targetPos.y = 1440 - 360;
        }
        this.camera.position = this.camera.parent.convertToNodeSpaceAR(targetPos);
    },
    calculateRank() {
        let objArr = new Array();
        this.entityMap.forEach(function (entityJS, key, mapObj) {
            if (entityJS.dead === false) {
                let obj = {};
                obj.entityID = key;
                obj.score = entityJS.score;
                objArr.push(obj);
            }
        });
        objArr.sort(function (a, b) {
            if (a.score < b.score) {
                return true;
            } else if (a.score > b.score) {
                return false;
            } else {
                return a.entityID > b.entityID;
            }
        });
        this._showingLayerJS.setRank(0, "");
        this._showingLayerJS.setRank(1, "");
        this._showingLayerJS.setRank(2, "");
        for (let i = 0; i < objArr.length; i++) {
            if (i < 3) {
                let index = i + 1;
                let entityJS = this.entityMap.get(objArr[i].entityID);
                let string = index + "," + entityJS.score + "分:" + entityJS.name;
                this._showingLayerJS.setRank(i, string);
            }
        }

        let meRank = 0;
        // let string = "";
        // if (G.dead) {
        //    string = "已阵亡无排名";
        // } else {
        for (let i = 0; i < objArr.length; i++) {
            if (objArr[i].entityID === G.entityID) {
                meRank = i + 1;
                break;
            }
        }
        let string = "我是第" + meRank + "名" + objArr[meRank - 1].score + "分";
        // }
        this._showingLayerJS.setMeRank(string);
    },
});