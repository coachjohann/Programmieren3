const express = require('Express');
const app = express();

let server = require('http').Server(app);
let io = require('socket.io')(server);

let messages = [];

app.use(express.static('./'));

app.get('./', function(req, res){
    res.redirect('index.html');
})

server.listen(3000, function(){
    console.log("Server hört auf port 3000");
});

io.on('connection', function(socket){
    console.log('ws connection established');

    for(let i in messages){
        io.sockets.emit('display message', messages[i]);
    }

    socket.on('send message', function(data){
        messages.push(data);
        io.sockets.emit('display message', data);
    });
});