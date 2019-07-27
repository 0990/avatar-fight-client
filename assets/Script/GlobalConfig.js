var AT = cc.Enum({
    OK: 0,
    OK_CANCEL: 1,
});
window.G = {
    AT: AT,
    userInfo: {},
    entityID: -1,
    rotationDelta: 20,
    gameStartTime: -1,
    accountType: -1,
    code: null,
    openID: null,
    alert: function (msg, type, okCallback, cancelCallback) {
        this.globalNode.alert(msg, type, okCallback, cancelCallback);
    },
    print: function (msg) {
        this.globalNode.print(msg);
    },
}

module.exports = {
    debugMode: false,
    logonHost: "ws://127.0.0.1",
    //logonHost: "ws://34.92.209.203",

    logonPort: 9000,
    //websocket协议
    wsProtocol: "avatar-fight",
    speed: 50,
}
