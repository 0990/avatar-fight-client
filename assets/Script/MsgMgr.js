let Util = require("Util");
let protores=require("msg");

let MsgMgr= {
    init:false,
    packageName:"cmsg",
    msgFullName2id:new Map(),
    msgid2NameObj:new Map(),
    Marshal(msgName,data){
        var msgType = protores[this.packageName][msgName];
        var msg = msgType.create(data);
        var bytes = msgType.encode(msg).finish();
        return bytes 
    },
    MsgID(msgName){
        return this.msgFullName2id.get(this.fullName(msgName))
    },

    fullName(msgName){
        return  this.packageName+"."+msgName
    },

	Unmarshal(msgID, bytes) {
        let nameObj = this.msgid2NameObj.get(msgID)
		var msgType = protores[nameObj.packageName][nameObj.msgName];
		var msg = msgType.decode(bytes);
		var data = msgType.toObject(msg, {
			longs: Number,		//long默认转换为Number类型
			enums: String,
            bytes: String,
            defaults: true,
			// see ConversionOptions
        });
        var detail = {
            msgName:nameObj.msgName,
            data:data,
        }
		return detail;
    },
    RegisterProtoMsg(){
        if (this.init){
            return 
        }
        this.init = true
        for(var key in protores[this.packageName]){
         
            let msgName = key;
            let fullName  = this.fullName(msgName);
            let msgid = Util.CRC32(fullName);
            this.msgFullName2id.set(fullName,msgid)
            this.msgid2NameObj.set(msgid,{packageName:this.packageName,msgName:msgName});
           // cc.log(key,msgid);//json对象中属性的名字：对象中属性的值
        }
    }
};

module.exports = MsgMgr;