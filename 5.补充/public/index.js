//webSocket服务器
const net = require('net');
const server = net.createServer((socket) =>{
    console.log('收到客户端连接请求');
    socket.once('data',(chunk) =>{//绑定data事件 只接受一次数据
        const httpContent = chunk.toString('utf-8');
        let parts = httpContent.split('\r\n');
        parts.shift();//去掉第一个
        parts = parts.filter(p =>{
            return p;
        })
        const header = Object.fromEntries(parts);//把数组中的两项变成键值对对象[['foo', 'bar'],['baz', 42]]  { foo: "bar", baz: 42 }
        console.log(parts);
        //console.log(chunk.toString('utf-8'));//chunk来自客户端的消息 收到的数据是Buffer 转换成utf-8
        //响应
        socket.write(`HTTP/1.1 101 Switching Protocols`);//101表示切换协议
    })
});//创建一个服务器
server.listen(5008);//监听端口
