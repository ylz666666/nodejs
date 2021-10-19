//处理跨域中间件
const allowOrigins = [
    "http://127.0.0.1:666",
    "null"
];//允许跨域的域
module.exports = function(req,res,next){
    //处理预检请求
    if(req.method === "OPTIONS"){//要响应相应的格式
        res.header(`Access-Control-Allow-Methods`,req.headers["access-control-request-method"]);//把请求头里面的值设置到响应头中
        res.header(`Access-Control-Allow-Headers`,req.headers["access-control-request-headers"]);
        console.log("这是一个预检请求")
    }
    res.header(`Access-Control-Allow-Credentials`,true);//配合带cookie请求
    //处理简单请求
    if("origin" in req.headers&&allowOrigins.includes(req.headers.origin)){//判断请求头里面是否包含origin属性 属性值是否等于允许的值
        res.header("access-control-allow-origin",req.headers.origin);//给响应头添加东西 headers是从请求头里面获取数据
    }
    next();
}