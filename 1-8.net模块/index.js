//创建服务器
// const net = require('net');
// const fs = require('fs');
// const path = require('path');
// const filename = path.resolve(__dirname,'../无标题.png');
// const serve = net.createServer();//创建一个服务器  返回一个serve对象
// serve.listen(9527); //服务器监听端口
// serve.on('listening', () => {//当服务器完成监听 触发事件
//     console.log('serve listen 9527');
// })
// serve.on("connection", socket => {//会输出两次 第一次为测试连接 每次客服端链接过来服务端都会产生一个新的socket
//     console.log('有客户端连接服务器')
//     socket.on('data', async (chunk) => {//读取请求内容
//         console.log('s:' + chunk.toString('utf-8'));
//         const body =await fs.promises.readFile(filename);  //图片读出来的是Buffer
//         const header = Buffer.from(`HTTP/1.1 200 OK
// Content-Type: image/jpeg
        

// `);
// const result = Buffer.concat([header,body]); 
// socket.write(result);
       
// //         socket.write(`HTTP/1.1 200 OK
// // Content-Type: image/jpeg


// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// // <meta charset="UTF-8">
// // <meta http-equiv="X-UA-Compatible" content="IE=edge">
// // <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // <title>Document</title>
// // </head>
// // <body>
// //     <h1>陈刚傻逼</h1>
// // </body>
// // </html>`);
//         socket.end();
//     });
   
//     socket.on('end', () => {
//         console.log('连接关闭了');
//     })
   
// })
