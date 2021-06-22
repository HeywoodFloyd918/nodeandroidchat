class Client{
    constructor(websocket, websocketserver){
        this.websocket = websocket;
        this.websocketserver = websocketserver;
        this.websocket.on("message",function(message){
            this.websocketserver.handleMessage(message);
        })
    }
    reciveMessage(message){
        this.websocket.send(message);
    }
}