//中间件代理服务器 满足一定规则的时候交给后端服务器处理
//例子: /data /api/xxxx-----> http://nidaye.tech:5000/api/xxxx   以/data开头的路径 请求(转发到)变为http://yuanjin.tech:5100/api/xxxx
// const http = require('http');
// module.exports = (req,res,next) =>{
//     const context = "/data" ;
//     if(!req.path.startsWith(context)){//不需要代理
//         next();
//         return;
//     }
//     //需要代理
//     const path = req.path.substr(context.length);
//     //如果满足转发条件 则创建一个请求,请求后端服务器
//     //创建代理请求对象
//     console.log(222,req.path);
//     const request = http.request({//为客户端向HTTP服务器发起请求
//         host:'localhost',
//         port:666,
//         path:path,
//         method:req.method,
//         headers:req.headers,
//     },response =>{//代理响应对象
//         res.status(response.statusCode);//把后端响应过来的响应码响应给浏览器
//         for(const key in response.headers){
//             res.setHeader(key,response.headers[key]);//响应头也一样
//         }
//         response.pipe(res);//建立连接 代理服务器和后端服务器建立请求管道

//     });//返回一个request对象
//     console.log(request.path);
//     req.pipe(request);//把请求体写入到代理请求对象的请求体中 浏览器和代理服务器建立请求管道

// }

//上面的是手写 有插件几乎不手写
//安装插件http-proxy-middlewar
const {createProxyMiddleware} = require('http-proxy-middleware'); 
const context = "/data";  // /xxxx  nidaye.tech:5100/xxxx
module.exports = createProxyMiddleware(context,{//第一个参数为'/api'以什么开头，否则所有请求都会匹配(跳转)到target
    target:'http://localhost:666',//要写http://
    pathRewrite:function(path,req){//重写路径 返回一个新的路径
        console.log('代理');
        return path.substr(context.length);
    }
});
