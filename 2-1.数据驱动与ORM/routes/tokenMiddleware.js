// 用于解析token
const {getErr} = require('./getSendResult');
const jwt = require("./jwt");
const {pathToRegexp} = require("path-to-regexp");//安装并导入 路径正则验证
// const reg = pathToRegexp("/api/student/:id"); //传入一个路径返回一个正则表达式
// console.log(reg.test("/api/student/1770"));
const crypto = require("../utils/crypt");//解密
const needTokenApi = [
{method:"POST",path:"/api/student/"},
{method:"PUT",path:"/api/student/:id"},{method:"GET",path:"/api/admin/whoami"}

]//配置需要认证的请求
//{method:"GET",path:"/api/student"}

module.exports = (req,res,next)=>{
   const apis =  needTokenApi.filter((api) =>{
   const reg = pathToRegexp(api.path);
       return api.method === req.method && reg.test(req.path);
    })
    if(apis.length == 0){
        next();
        return;
    }
    
    //jwt验证
    const result = jwt.verify(req);//调用jwt解密方法
    if(result){//认证成功
        req.userId = result.id;//存入一个id在客服端
        next();
    }else{
        handleNoneToken(req,res,next);
    }


    //session验证
    // console.log(req.session);
    // if(req.session.loginUser){
    //     //说明已经和浏览器交流过 
    //     next();//直接交过其他中间件
    // }else{
    //     handleNoneToken(req,res,next);
    // }


    //通过了进行后续操作 没有则停止 cookie验证
    // let token = req.cookies.token; //获取的时未加密的cookie 如果加密了则获取不到
    // let token = req.signedCookies.token;//获取加密的cookie
    // if(!token){//如果cookies里面没有 看authorization是否有
    //     token = req.headers.authorization; //从请求头里面获取
    // }
    // if(!token){//还是没有说明没有从服务器请求到 没有登陆成功
    //     handleNoneToken(req,res,next);
    //     console.log("验证未通过")
    //     return;
    // }
    //验证通过
    // const userId = crypto.decrypt(token);//token是加密过后的字符串
    // console.log("验证通过",userId);
    // req.userId = userId;//保存到req里面 后续的请求可以知道是谁在操作
    // next()//提交给后续中间件处理
    // console.log(req.cookies);
};
function handleNoneToken(req,res,next){//没有认证处理函数
    res.status(403).send(getErr("你没有认证",403));//响应一个错误
}