//手动加密 加密和解密 使用对称加密算法：常见的aes算法 128位
//128位的密钥 16字节字字母符串
const secret = Buffer.from("fsdsdddsss11sdfs");
const crypto = require("crypto");//node内置库 用于加密
const iv = Buffer.from("ffffffffffffffff");
// const result = crypto.getCiphers();//获取所有加密算法
// console.log(result);
//准备一个iv,随机向量    密钥固定 向量不固定
// module.exports =function(){

//    const iv = Buffer.from(Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8));
//    return{
//        encrypt(str){
//            //返回一个加密的函数
//          const cry = crypto.createCipheriv("aes-128-cbc",secret,iv);//创建一个加密算法 加密名字aes 128密钥 cbc模式
//          let result =  cry.update(str,"utf-8","hex");//开始加密 要加密的字符串 加密的类型 机密完后类型 返回一个字符串
//          result+= cry.final("hex");//hex16进制
//          return result ;
//        },
//        decrypt(str){
//            const decry = crypto.createDecipheriv("aes-128-cbc",secret,iv);//创建一个解密器
//            let result = decry.update(str,"hex","utf-8");//开始解密 传入加密的字符串 加密的字符串格式 输出的字符串格式
//            result+= decry.final("utf-8");
//             return result ;
//        },
//    } 
// }
exports.encrypt = function(str){
    const cry = crypto.createCipheriv("aes-128-cbc",secret,iv);//创建一个加密算法 加密名字aes 128密钥 cbc模式
             let result =  cry.update(str,"utf-8","hex");//开始加密 要加密的字符串 加密的类型 机密完后类型 返回一个字符串
             result+= cry.final("hex");//hex16进制
             return result ;
}
exports.decrypt = function(str){
    const decry = crypto.createDecipheriv("aes-128-cbc",secret,iv);//创建一个解密器
           let result = decry.update(str,"hex","utf-8");//开始解密 传入加密的字符串 加密的字符串格式 输出的字符串格式
           result+= decry.final("utf-8");
            return result ;
}

