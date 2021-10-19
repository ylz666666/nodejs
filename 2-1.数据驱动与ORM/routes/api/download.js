//处理图片下载请求
const express = require("express");
const router = express.Router();//创建一个处理路径的路由
const path = require("path");
router.get('/:filename',(req,res) =>{//通用格式
    const absPath = path.resolve(__dirname,'../../resources',req.params.filename);
    res.download(absPath,req.params.filename);//下载文件 1.绝对路径 2.保存文件名字 3.错误处理函数
})
module.exports = router;
