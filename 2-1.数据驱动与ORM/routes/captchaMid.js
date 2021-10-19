//生成验证码 使用第三方库 svg-capthcha
const { next } = require('cheerio/lib/api/traversing');
const express = require('express');
const router = express.Router();
const svgCaptcha = require('svg-captcha');


router.get('/captcha',(req,res) =>{//请求/captch路径
    const captcha = svgCaptcha.create({//配置 svgCaptcha.createMathExpr({配置可以一样})数字加减结果
        size:6,//验证码长度
        ignoreChars:"iI1O0",//排除掉那些字符
        noise:6,//干扰线条的个数
        color:true,//验证码的字体是否有颜色 默认为false 如果设定了背景默认为有
        background:'#008c8c',//验证码图片背景颜色
    });//生成一个验证码
    //console.log(captcha);//{text:验证码,data:验证码图片路径}
    req.session.captcha = captcha.text.toLowerCase() ;//把验证码文本存入到session中 转化成小写
    //如果在一段时间中请求达到了一定的数量，就可能是机器
    console.log(req.session.captcha);
    res.type('svg');//类型
    res.status(200).send(captcha.data);//把验证码图片路径发送给客户端
})
function validateCaptcha(req,res,next){//验证验证码是否正确
    const reqCaptcha = req.body.captcha?req.body.captcha.toLowerCase():''; //获取用户传递过来的验证码
    if(reqCaptcha!== req.session.captcha){//验证码错误
        res.send({
            code:401,
            msg:'验证码错误',
        })
    }else{
        next();
    }
    req.session.captcha = '';
    
}
function captchaHandle(req,res,next){//验证提交的验证码是否正确
    if(!req.session.records){//如果session没有访问记录
        req.session.records = [];//records自定义属性
    }
    const now = new Date().getTime();//当前时间
    req.session.records.push(now)//如果有访问记录 把当前时间作为记录
    const duration = 10000;
    const repeat = 3 ;//10秒内请求了三次就是机器
    req.session.records = req.session.records.filter((time) =>{
       return now - time <= duration ;//筛选10秒内有多少个记录
    });
    if(req.session.records.length>=repeat || 'captcha' in req.body){//长度符合 验证码已提交
        //验证验证码是否正确
        validateCaptcha(req,res,next);
    }else{
        next();//不需要验证直接往后提交
    }
    console.log(req.session.records);
}
router.post('*',captchaHandle);//只要是提交数据的请求一般都要提交验证码
router.put('*',captchaHandle);
module.exports = router ;