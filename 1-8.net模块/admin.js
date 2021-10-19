//长连接模式 传一个消息头connect:keep-alive 相当于打电话
//net 是一个通信模块 作用 1.进程间的通信 IPC 2.网络通信TCP/IP    网络通信：建立在TCP/TP上的通信，最常见的是http协议   TCP/IP比http更加底层的协议 
//TCP协议 三次握手 建立连接 客户端服务端可以互相发任何数据，也可以等一段时间发，不限次数事件内容  四次挥手 类似长连接打电话
const net = require('net');
const socket =  net.createConnection({//返回一个对象socket:1.是一个特殊的文件 2.在Node中表现为一个双工流对象 3.通过向流写入内容发送数据 4.通过监听流的内容获取数据
    host:'duyi.ke.qq.com',//主机地址 不用写协议
    port:80,  //TCP/IP协议 端口号 不写就没有
},() =>{//只是和服务端建立连接 客服端并没有向服务端发送消息 所以服务端也没有向客服端发送消息
    console.log('连接成功');
})//创建一个客户端 第一个参数 options配置对象 第二个参数回调函数
socket.on("data",(chunk) =>{//socket是一个流 读取服务器给的数据
    console.log('来自服务器的消息:'+chunk.toString('utf-8'));  
    // socket.end();//直接使用 会导致数据没接收完
});
// socket.write("工作真难找");//客服端向服务端发送数据 http协议请求格式 不是规定格式会返回一个400
socket.write(`GET / HTTP/1.1
Host: duyi.ke.qq.com
Connection: keep-alive


`);
function parseHeader(){

}
socket.on('close',() =>{//挂断电话触发
    console.log('结束了')
})

//socket.write('GET(请求方法) /(请求路径) HTTP/1.1(协议版本)请求行  
//Host:duyi.qq.com  [Connection:keep-alive] , 请求头

//请求体    要留2行


//');
/**收到的数据
 * HTTP/1.1 400 Bad Request  响应行：客服端出错 没有按照http协议格式来   请求行 请求头 请求体   get请求写在请求行里面排前头
 * 
 * 响应头
Server: ias/1.3.5_1.17.3
Date: Wed, 25 Aug 2021 14:09:50 GMT
Content-Type: text/html
Content-Length: 161
Connection: close

响应体
<html>
<head><title>400 Bad Request</title></head>
<body>
<center><h1>400 Bad Request</h1></center>
<hr><center>ias/1.3.5_1.17.3</center>
</body>
</html>
 */