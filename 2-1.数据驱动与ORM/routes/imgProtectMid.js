//防图片盗链中间件
const path = require('path');
module.exports = (req,res,next) =>{//在静态资源前面使用
    //判断请求头中 Referer和Host 是否相同
    const host = req.headers.host;//获取主机名(由域名和端口号组成)
    let referer = req.headers.referer;
    //只处理图片
    
    const extname = path.extname(req.path); //判断请求的地址是否是一个图片
    if(![".jpg",'.jpeg','.png','.gif'].includes(extname)){//不是图片允许盗链
            next();
            return;
    }
    if(referer){//可能没有  
        //console.log(1111,referer);//我是傻叉
         //referer = url.parse(referer).host;//解析网址为一个对象 parse过期对象
         referer = new URL(referer).host; //代替url.parse()方法
        // console.log(22222222,referer);
       
        
    }
    if(referer&&host!==referer){
         //console.log("不允许");
        // res.send(404).end();
        req.url = '/img/logo.jpg'; //url rewrite
    }
     //console.log('防盗',host,referer);
    next();
}