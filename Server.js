let Client = require("./Client");
class Server{
    constructor(websocketserver){
        this.websocketserver = websocketserver;
        this.clients = [];
        websocketserver.on('connection', (ws)=>{
            this.clients.push(new Client(ws,this,this.clients.length));
            // ws.on('close', function() {
            //     console.log('websocket connection close');
            // });
        });
    }
    handleMessage(message,id){
        this.clients.forEach(element => {
            element.reciveMessage(message,id);
        });
    }
}

module.exports = Server;