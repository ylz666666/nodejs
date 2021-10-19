
const qs = require("querystring");
module.exports = (req,res,next) =>{
    if(req.headers["content-type"] ==="application/x-www-form-urlencoded"){
        //自行解析消息体
        let result = '';
        req.on("data",  (chunk) =>{
            result+=chunk.toString("utf-8");
        });
        req.on("end",() =>{
          const querry =  qs.parse(result);//把字符串路径解析成对象
            req.body = querry;
            next();
        });
    }else{
        next();
    }
}