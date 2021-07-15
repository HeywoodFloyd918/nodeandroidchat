let Message = require("./Message");
let CONST = {
    "FROM_ME":1,
    "FROM_OTHER":2,
    "INFO":3
}
class Client{
    constructor(websocket, websocketserver, id, name){
        this.name = name;
        this.websocket = websocket;
        this.websocketserver = websocketserver;
        this.id = id;
        this.websocketserver.handleInfoMessage(this.name+" подключился");
        this.websocket.on("message",(message)=>{
            this.websocketserver.handleMessage(message,this.id);
        })
    }
    reciveInfoMessage(message){
        let what=CONST.INFO;
        let messageObj = new Message(message,what);
        this.websocket.send(JSON.stringify(messageObj),()=>{});
    }
    reciveMessage(message,id){
        let what;
        if (id===this.id){
            what=CONST.FROM_ME;
        } else {
            what=CONST.FROM_OTHER;
        }
        let messageObj = new Message(message,what);
        this.websocket.send(JSON.stringify(messageObj),()=>{});
    }
}

module.exports = Client;