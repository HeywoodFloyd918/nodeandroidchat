let Client = require("./Client");
class Server{
    constructor(websocketserver){
        this.websocketserver = websocketserver;
        this.clients = [];
        websocketserver.on('connection', (ws)=>{
            ws.on('message', function(message) {
                this.clients.push(new Client(ws,this,this.clients.length,message));
            });
        });
    }
    handleInfoMessage(message){
        this.clients.forEach(element => {
            element.reciveInfoMessage(message);
        });
    }
    handleMessage(message,id){
        this.clients.forEach(element => {
            element.reciveMessage(message,id);
        });
    }
}

module.exports = Server;