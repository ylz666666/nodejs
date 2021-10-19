//controller处理请求(响应·一个完整的页面) view放模板的
const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    console.log('模板')
    res.render('./student.ejs',{//响应一个页面 同时传递一个模板动态数据
        number:123,
    });//渲染一个模板 相对的路径是view 已经设置好了目录
})
module.exports = router ;