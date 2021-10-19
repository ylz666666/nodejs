//处理日志中间件
const {apilogger} = require('../logger.js');

//用插件
const log4js = require('log4js');
module.exports = log4js.connectLogger(apilogger,{
    level:'auto',
})

//自己写
// module.exports = (req,res,next) =>{
//     next();//先移交后移交都可以
//     apilogger.debug(`${req.method} ${req.path} ${req.ip}`);//ipaddr ip地址
    
// }