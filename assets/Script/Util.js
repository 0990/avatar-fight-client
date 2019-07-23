var CRC32 = require("crc32");

var Util = {
    getAngle(px1, py1, px2, py2) {
        //两点的x、y值
        let x = px2 - px1;
        let y = py2 - py1;
        let hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        //斜边长度
        let cos = x / hypotenuse;
        let radian = Math.acos(cos);
        //求出弧度
        let angle = 180 / (Math.PI / radian);
        //用弧度算出角度       
        if (y < 0) {
            angle = -angle;
        } else if ((y == 0) && (x < 0)) {
            angle = 180;
        }
        return angle;
    },
    getQueryString(name) {
        if (cc.sys.isNative) return null;
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },
    getDistance(x1, y1, x2, y2) {
        let x = x2 - x1;
        let y = y2 - y1;
        let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        return distance;
    },
    Encode(msgid,protoData){
        let head = this.UInt32toBinary(msgid,false);
    
       let retData = new Uint8Array(protoData.length+4);
       retData.set(head,0);
       retData.set(protoData,4);
       return retData;
    },
    
    Decode(data){
        //let uint8Data = new Uint8Array(data);
        let uint8Data = data
        let msgID = this.BinaryToUint32(uint8Data.slice(0,4),false);
        let protoData = uint8Data.slice(4);
    
        return {msgID:msgID,protoData:protoData};
    },
    
    BinaryToUint32(binary,littleEndian){
        let dv = new DataView(binary)
        return dv.getUint32(binary,littleEndian)
    },
    
    UInt32toBinary(num,littleEndian){
        let retArr = new ArrayBuffer(4);
        let dv = new DataView(retArr);
        dv.setUint32(0,num,littleEndian);
        return new Uint8Array(retArr)
    },

    CRC32(str){
        return CRC32.str(str);
    },
    
};

module.exports = Util;
