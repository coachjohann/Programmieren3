const express = require('express');
const app = express();
let httpServer = require('http').Server(app);

let {Server} = require('socket.io');
const io = new Server(httpServer);

app.use(express.static('./'));

app.get('/', function(req, res){
    res.redirect('index.html');
});

let messages = []

httpServer.listen(3000, function(){
    console.log('Server startet, hört auf Port 3000');

});

io.on('connection', function(socket){
    console.log('ws connection established');

    for (let i = 0; i < messages.length; i++){
        socket.emit('display message', messages[i]);
    }

    //socket.emit('display message', msg)


    socket.on('send message', function(data){
        messages.push(data);
        io.emit('display message', data);
        console.log(messages)
    })


    socket.on('disconnect', function(reason){
        console.log('disconnected because of: ', reason);
    })
});