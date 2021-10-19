//颁发jwt 生成
const secrect = "nidaye";
const cookieKey = "token";
const jwt = require("jsonwebtoken");
exports.publish =(res,maxAge=3600*24,info={}) =>{//参数响应对象(确定传输方式移动端(Author)还是浏览器(cookie)) 过期时间 内容
    //生成jwt
  const token =  jwt.sign(info,secrect,{
        expiresIn:maxAge
    })
//添加到cookie 浏览器端
// res.cookie(cookieKey,token,{
//     maxAge:maxAge*1000,//毫秒
//     path:"/",

// });//res本身的方法 参数名称 值 配置
// //其他设备
res.header("authorization",token);
}
//验证jwt
exports.verify = function(req){
    //尝试从cookie中获取  浏览器端解密
    // let token;
    // token = req.cookies[cookieKey];
    // if(!token){//还是没有值
    //     //尝试从header里面中获取
    //     token = req.headers.authorization;
    // }
    // if(!token){//还是没有值登录失败
    //     return null;
    // }
    //authorization:bearer token
    let token = req.headers.authorization;
    if(!token){
        return null;
    }
    token = token.split(" "); //以空格拆分成2部分
    token = token.length ===1?token[0]:token[1];
    try {
        const result = jwt.verify(token,secrect);//解密
        return result;
    } catch (error) {
        return null;
    }
    

}