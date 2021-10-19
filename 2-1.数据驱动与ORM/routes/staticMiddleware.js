module.exports = (req ,res ,next) =>{
    if(req.path.startsWith("/api")){//判断请求路径是否是以/api开头
        next();
    }else{//如果不是 则获取的是静态资源
        if(true){
            res.send("响应静态资源");
        }else{
            next();
        }

    }
}