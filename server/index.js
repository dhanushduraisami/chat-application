const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
// import http from 'http';
const PORT = process.env.PORT || 5000;
const router =require('./router');
const cors = require('cors');
const {adduser,removeUser,getUser,getUserInRoom} = require('./users');

const app = express();
app.use(cors());
const server = http.createServer(app);
 
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST']
    }
  });

io.on('connection',(socket) =>{
    console.log('we have a new connection!!!');

    socket.on('join',({name,room},callback)=>{
       
      const {error,user} = adduser({id:socket.id,name,room});

      if(error) return callback(error);

      socket.emit('message' ,{user : 'admin',text : `${user.name},welcome to the room ${user.room}`});
      socket.broadcast.to(user.room).emit('message',{user : 'admin',text :`${user.name}, has joined!`});
      
      callback();
    })

    socket.on('sendMessage',(message,callback)=>{
    const user = getUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: user.name, text: message });
    } else {
      console.log("User not found for socket ID:", socket.id);
    }

    callback();
    })

socket.on('disconnect',()=>{
    console.log('user had left..');
});
});

app.use(router);

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));