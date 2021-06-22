class Server{
    constructor(websocketserver){
        this.websocketserver = websocketserver;
        this.clients = [];
        websocketserver.on('connection', (ws)=>{
            this.clients.push(new Client(ws,this));
            // ws.on('close', function() {
            //     console.log('websocket connection close');
            // });
        });
    }
    handleMessage(message){
        this.clients.forEach(element => {
            element.reciveMessage(message);
        });
    }
}

module.exports = Server;