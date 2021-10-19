const jwt = require("jsonwebtoken");//生成jwt令牌的插件
const secrect = 'nidaye';//固定密钥
const token = jwt.sign({
    id:1,
    name:'nidaye'
},secrect,{
    expiresIn:3600,//多久过期 1小时后过期
})//加密 参数只要传plyload部分对象 第二个参数密钥默认为对称加密 第三个参数 一些配置
console.log(token);//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Im5pZGF5ZSIsImlhdCI6MTYzMzUzMTUxMCwiZXhwIjoxNjMzNTM1MTEwfQ.zXIjKdZP2zSYiJnZC668XODm9yLpOolh1bjATIvZEAc
// const decoded = jwt.decode(token);//解密 不会验证
// console.log(decoded);//{ id: 1, name: 'nidaye', iat: 1633531608, exp: 1633535208 } iat创建时间 exp过期时间

//一般不用上面那个 用这个解密
const decoded = jwt.verify(token,secrect);//会进行验证  验证通过则解密 否则报错 参数加密 密钥 配置
console.log(decoded);
//防止报错可以用try catch
// try {
//     const decoded = jwt.verify(token,secrect);
//     console.log(decoded);
// } catch (error) {
//     console.log("jwt无效")
// }