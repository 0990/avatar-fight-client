// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
var NetCtrl = require('NetCtrl');
var Cmd = require('CmdLogon');
cc.Class({
    extends: cc.Component,

    properties: {
        statusLabel: cc.Label,
        startBtn: cc.Button,
        clockLabel: cc.Label,
        rankContent: cc.Node,
        rankMeItem: cc.Node,
        randItemPrefab: cc.Prefab,
        killerPos: cc.Node,
        entityPrefab: cc.Prefab,
    },
    onLoad() {
        return ;
        let gameEnd = G.gameEnd;
        if (gameEnd.overReason === Cmd.OVER_REASON_OFFLINE) {
            this.setStatusInfo('断网了，重连?');
        } else if (gameEnd.overReason === Cmd.OVER_REASON_KILLED) {
            this.setStatusInfo('被击杀！请等待下一轮开始');
            this.startBtn.interactable = false;
            this.leftTime = gameEnd.leftTime;
            this.failTime = new Date().getTime();
            this.setLeftClock(gameEnd.leftTime);

            // let killer = cc.instantiate(this.entityPrefab);
            // killer.getComponent('Entity').init(gameEnd.killer);
            // killer.position = cc.v2(0, 0);
            // this.killerPos.addChild(killer);
            // let rank = 0;
            // for (let i = 0; i < gameEnd.rank.list.length; i++) {
            //     let itemData = gameEnd.rank.list[i];
            //     itemData.rank = i + 1;
            //     //let string = item.rank + ":" + item.score + "score," + item.name;
            //     let slot = cc.instantiate(this.randItemPrefab);
            //     //slot.getComponent(cc.Label).string = string;
            //     slot.getComponent("RankItem").setItemData(itemData);
            //     this.rankContent.addChild(slot);
            //     if (itemData.entityID === G.entityID) {
            //         rank = itemData.rank;
            //         this.rankMeItem.getComponent("RankItem").setItemData(itemData);
            //     }
            // }
        } else {
            let rank = 0;
            for (let i = 0; i < gameEnd.rank.list.length; i++) {
                let itemData = gameEnd.rank.list[i];
                itemData.rank = i + 1;
                //let string = item.rank + ":" + item.score + "score," + item.name;
                let slot = cc.instantiate(this.randItemPrefab);
                //slot.getComponent(cc.Label).string = string;
                slot.getComponent("RankItem").setItemData(itemData);
                this.rankContent.addChild(slot);
                if (itemData.entityID === G.entityID) {
                    rank = itemData.rank;
                    this.rankMeItem.getComponent("RankItem").setItemData(itemData);
                }
            }
            let string = "您当场排名" + rank + ',再战一局？';
            this.setStatusInfo(string);
        }
    },
    clickRestartBtn(){
        cc.director.loadScene("start",function(){
            //var scene = cc.director.getScene();
            let canvas = cc.director.getScene().getChildByName('Canvas');
            let startLayer = canvas.getChildByName("startLayer");
            let startLayerJS = startLayer.getComponent("StartLayer");
            startLayerJS.clickJoinGame();
        });
    },
    // clickStartBtn() {
    //     NetCtrl.createNewSocket(() => {
    //         NetCtrl.Send("cmsg.ReLogin",{token:G.userInfo.token});
    //     });
    // },
    // clickJoinGame() {
    //     cc.log("click join");
    //     NetCtrl.createNewSocket(() => {
    //         NetCtrl.Send("cmsg.ReqJoinGame",{nickname:G.userInfo.nickname});
    //     });
    // },
    clockCallback() {
        let count = parseInt(this.leftTime - (new Date().getTime() - this.failTime) / 1000);
        if (count <= 0) {
            this.unschedule(this.clockCallback);
            this.setStatusInfo('');
            this.clockLabel.string = '';
            this.startBtn.interactable = true;
        } else {
            this.clockLabel.string = count;
        }
    },
    setStatusInfo(string) {
        this.statusLabel.string = string;
    },
    setLeftClock(leftTime) {
        this.unschedule(this.clockCallback);
        this.clockLabel.string = this.leftTime;
        this.schedule(this.clockCallback, 1);
    },
});
