const express = require("express");
const router = express.Router();
const adminServ = require("../../services/adminServices");
const {asyncHandler} = require("../getSendResult");
const crypto = require("../../utils/crypt");
const jwt = require('../jwt');
router.post("/login",asyncHandler(async (req,res) =>{
        console.log('url',req.url);
        const result = await adminServ.login(req.body.loginId,req.body.loginPwd);
        if(result){
            let value = result.id;//给浏览器加
            // value = crypto.encrypt(value.toString());//加密 参数必须时字符串 转化成字符串
           // res.header("set-cookie",`token=${result.id};path=/;domain=localhost;max-age=3600;`);//下面这步等同于这步操作
        //登录成功发送cookie
        //    res.cookie("token",value,{//给浏览器加  
        //        path:"/",
        //        domain:"localhost",
        //        maxAge:7*24*3600*1000,//要用毫秒数
        //        httpOnly:true,
        //        signed:true,//配合cookie密钥一起使用 给cookie加密
        //    });
         //  res.header("authorization",value)//给其他设备加 例如移动端

        //登录成功发送sessionid
        // console.log("session",req.session);//使用了session插件会在req里面添加一个session对象
        // req.session.loginUser = result; //给服务器添加session对象 键值对

        //登录成功添加发送jwt
           jwt.publish(res,undefined,{id:value}); //登陆成功 发布jwt给浏览器
        }
        return result;
    })
);
router.get("/whoami",asyncHandler(async (req,res) =>{
    console.log("url",req.url)
    return await adminServ.getAdminById(req.userId);
   
}))
module.exports = router ;