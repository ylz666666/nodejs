//请求图片上传请求
const express = require("express");
const path = require('path');
const jimp = require('jimp');//上传的时候给图片加水印
const multer = require("multer");//使用插件处理解析文件
// const upload = multer({
//     dest:path.resolve(__dirname,'../../public','upload'),//文件存在哪里 (上传的文件存在该文件夹中)
// });

const storage = multer.diskStorage({//磁盘存储引擎 基础配置
    destination:function(req,file,cb){//存到哪 file文件信息对象
        cb(null,path.resolve(__dirname,"../../public/origin"));
    },filename:function(req,file,cb){
        // cb(null,file.fieldname+"-" + Date.now());//file.filename:'img'
        //文件名 时间戳-6位随机数，文件后缀
        const timeStamp = Date.now();//获取时间戳
        const ramdomStr = Math.random().toString(36).slice(-6);//6位随机字符
        const ext = path.extname(file.originalname) ;//获取字符文件名称SFSAF.JPG extname获取文件后缀名 
        const filename = `${timeStamp}-${ramdomStr}${ext}`;
        cb(null,filename);//没有错误多个参数 有错误只有null参数
    }
})
const upload = multer({//限制配置
    storage,limits:{//文件限制
        fileSize:100 * 1024,//字节数 文件最大尺寸
    },
    fileFilter(req,file,cb){//过滤文件
      const extname =  path.extname(file.originalname);//获取文件后缀名
      const whitelist = [".jpg",".git",".png"];//允许的文件后缀名
      if(whitelist.includes(extname)){//在里面
        cb(null,true);//允许
      }else{
          cb(new Error('不允许'))//不允许
      }
    }
})
const router = express.Router();
const waterPath = path.resolve(__dirname,'../../public/img/water.jpg');//水印图片路径
router.post('/',upload.single('img'),async (req,res) =>{//single处理单个文件 插件会给req添加file对象
    const url = `/upload/${req.file.filename}`; //水印图片路径
    //上传完后加水印
    const newPath = path.resolve(__dirname,"../../public/upload",req.file.filename);
    await mark(waterPath,req.file.path,newPath);//加水印 multer给req提供了一个file对象
    // res.send('服务器完成了图片处理,给你一个访问图片的路径:/upload/xxx.jpg')
    res.send({
        code:0,
        msg:'',
        data:url,
    })
});

async function mark(waterFile, originFile, targetFile, proportion = 10, marginProportion = 0.05) {//参数 水印图片路径/原图片路径/混合出新的图片路径/水图片比例(原始图片宽度/水印图片宽度)/水离右边原图宽高位置比例
    const [water, origin] = await Promise.all([jimp.read(waterFile), jimp.read(originFile)]);
    //对水印图片进行缩放
    const curProportion = origin.bitmap.width / water.bitmap.width;//bitmap位图
    water.scale(curProportion/proportion);//水印图片缩放 当前比例除以目标比例
    //计算位置
    const right = origin.bitmap.width * marginProportion; //离右边的距离
   const bottom = origin.bitmap.height * marginProportion;//离下边的距离
   const x = origin.bitmap.width - right -water.bitmap.width ;//水印x坐标
   const y = origin.bitmap.height - bottom -water.bitmap.height ;//水印y坐标
    //写入水印
    origin.composite(water, x, y, {//混合
      mode: jimp.BLEND_SOURCE_OVER,//水印图片在原图之上
      opacitySource: 0.3,//水印图片透明度
    });
    await origin.write(targetFile);
  }
module.exports = router;