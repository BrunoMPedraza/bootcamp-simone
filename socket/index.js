const path = require('path');
const express = require('express');
const app = express();

//THIS IS THE SERVER, THE BACKEND!!

//settings
app.set('port',process.env.PORT || 3000);


//settings
app.use(express.static(path.join(__dirname,'public')));

//server start
const server = app.listen(app.get('port'),()=>{
    console.log("Listen on port",app.get('port'));
})

const SocketIO = require("socket.io");
const io = SocketIO(server);

//websockets are on!
io.on('connection', (socket)=>{
    
    socket.on('chat:message',(data)=>{
        io.sockets.emit('chat:response',data);
    })

    socket.on('chat:typing',(data)=>{
        socket.broadcast.emit('chat:typing',data);
    })
})


