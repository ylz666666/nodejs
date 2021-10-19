//请求IncomingMessage对象   响应:ServeResponsed对象
const http = require('http'); //更多的时候用来搭建服务器
const url = require('url');
const serve =  http.createServer((req,res) =>{//res可写流
   reqs(req);
   res.setHeader('a','1');//设置消息头 随便你写
   res.statusCode = 404 ;//设置响应码 默认为200 
   res.write('Hello World');//消息体 位置写在最后
   res.end();
}) ; // [option] [requestListener]




serve.listen(9527);
serve.on('listening',() =>{
    console.log('开始监听')
});
function reqs(req){
    const urlobj = url.parse(req.url);//解析iurl地址返回一个对象
    console.log('请求方法',req.method);//请求方法
    console.log('请求地址：',urlobj);
    console.log(req.headers);
    let body = '';
    req.on('data',(chunk) =>{
        body+=chunk.toString('utf-8');
    })
    req.on('end',()=>{
        console.log('读取完了',body);
    })
}