//定义全局的变量
var Config = require('GlobalConfig');
var Cmd = require('CmdLogon');
var NetControl = {
    _socket: null,  //当前的webSocket的对象
    connect: function (callback, num) {
        if (this._socket && cc.sys.isObjectValid(this._socket)) {
            if (this._socket.readyState > WebSocket.OPEN) {
                this._socket.close();
                this.createNewSocket(callback, num);
            } else {
                if (this.isOpen() === true) {
                    if (callback) callback(num);
                }
            }
        } else {
            this.createNewSocket(callback);
        }
    },
    close: function () {
        this._socket.onclose = undefined;
        this._socket.onerror = undefined;
        if (this._socket && cc.sys.isObjectValid(this._socket)) {
            this._socket.close();
        }
    },
    dataEventHandler: null,
    fire(event, data) {
        if (this.dataEventHandler) {
            this.dataEventHandler.emit(event, data);
        } else {
            G.debug("dataEventHandle not existed");
        }
    },
    createNewSocket: function (callback, num) {
        //清空以前socket的绑定
        if (this._socket) {
            this._socket.onopen = undefined;
            this._socket.onmessage = undefined;
            this._socket.onclose = undefined;
            this._socket.onerror = undefined;
        }
        this._socket = new WebSocket(Config.logonHost + ":" + Config.logonPort, Config.wsProtocol);
        this._socket.onopen = () => {
            if (callback) {
                callback(num);
            }
        };
        this._socket.onclose = (event) => {
            this._onClose(event)
        };
        this._socket.onmessage = (event) => {
            this._onMessage(event);
        };
        this._socket.onerror = (event) => {
            cc.log(event);
        }
    },
    _onClose: function (event) {
        cc.log(event);
        G.isLogined = false
        G.alert("网络连接失败，重新连接？", G.AT.OK,function(){
            cc.director.loadScene("start");
        });
    },
    _onMessage: function (obj) {
        var msg = JSON.parse(obj.data);
        var data = msg.data;
        this.fire('netmsg', msg);
    },
    Send: function (msgName,dataObj) {
        if (this.isOpen()) {
            this._socket.send(xxx);
        }
    },

    isOpen() {
        if (this._socket && cc.sys.isObjectValid(this._socket)) {
            return this._socket.readyState === WebSocket.OPEN;
        } else {
            return false;
        }
    },

    isConnecting() {
        if (this._socket && cc.sys.isObjectValid(this._socket)) {
            return this._socket.readyState === WebSocket.CONNECTING;
        } else {
            return false;
        }
    },
    //先检测是否断线，如果断钱了重连，再发送消息
    safeSend(msgName,dataObj) {
        this.connect(() => {
            this.Send(msgName,dataObj);
        });
    }
};
module.exports = NetControl;