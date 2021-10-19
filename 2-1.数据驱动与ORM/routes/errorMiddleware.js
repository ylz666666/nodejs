//处理错误的中间件
const getMsg = require('./getSendResult');
const multer = require("multer");//处理文件错误

module.exports = (err,req,res,next) =>{
    //console.log(req.baseUrl);//use里面能获取到基地址
    if(err){
        if(err instanceof multer.MulterError){//数组包含 对象属于
            res.status(200).send(getMsg.getErr(err.message));
            return;
        }
        const errObj = err instanceof Error?err.message:err;
    
        res.status(500).send(getMsg.getErr(errObj));
    }else{
        next();
    }
}