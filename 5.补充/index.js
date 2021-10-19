const express = require('express');
const SocketIO = require('socket.io');
const http = require('http');
const path = require('path');

//使用express服务器
const app = express();
const server = http.createServer(app);
app.use(express.static(path.resolve(__dirname,'public')));//搭建静态资源服务器

//websocket
const io = SocketIO(server); //创建socket对象
io.on('connection',(socket) =>{//socket是客户端
    //当有一个客户端连接到服务器成功之后,触发的事件
    console.log('新的客户端连接进来了');
    //客户端发送来的消息
    socket.on('msg',(chunk)=>{//第一个参数 自定义的名字 监听客户端的msg消息
        console.log(chunk.toString('utf-8'));
    })
    const timer = setInterval(function(){
        //每个2秒发送一个消息给客户端
        socket.emit("test",'这是一个内容用来测试的');//参数1.事件名(自定义的) 2.消息内容 消息名字叫做test
    },2000);
    socket.on('disconnect',() =>{//断开连接的时候触发
        console.log('断开连接');
        clearInterval(timer);
    });
})

//监听端口
server.listen(5008,() =>{
    console.log(5008);
})












// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// server.listen(80);

// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });