// const sequelize =  require("./models/db");
// (async function(){//自动运行测试方法
//     try{
//         await sequelize.authenticate();
//         console.log('连接成功');
//     }catch(error){
//         console.error('连接失败',error);
//     }
// })();

//const Admin = require('./models/Admin');
// const ins = Admin.build({//增加一个数据 第一个方法
//     loginId:'晨刚',
//     loginPwd:'123',
// }); //同步方法 构建一个模型
// ins.loginPwd = '789';//修改模型数据
// ins.save().then(() =>{//异步方法 把数据添加到表里面
//     console.log('添加完成');
// })
//新增数据第二个方法
// Admin.create({//相当于先运行build再运行save
//     loginId:'陈二狗',
//     loginPwd:'456',
// }).then((ins) =>{//给一个实例参数 实例就是一行数据
//     console.log(ins.id,ins.loginId,'添加完成');
// })
// const adminServices = require('./services/adminServices');
// const ins =  adminServices.addAdmin({
//     loginId:'陈二狗',
//     loginPwd:'abcd',
// });
// console.log('完成');
// adminServices.updateAdmin(4,{//修改一个数据
//     loginId:'哈哈哈',
// });
// require('./models/relation');
//  require('./models/sync'); //同步多个数据 更新数据
// require('./mock/mockStudent');
// require('./spider/fetchBooks');
//  const adminServices = require('./services/adminServices');
//   adminServices.login('陈二狗','ABCD').then(res =>{
//       console.log(res);
//   })
// adminServices.getAdminById(1).then(res =>{
//     console.log(res);
// })
//findOne(where):查询单个数据  findByPk(id):按照主键(id)查询单个数据 findAll({offset,limit}):查询多个数据  count:查询总数  include:包含关系  
// const studentSerive = require('./services/studentService');
// studentSerive.getStudents(1,10,-1,'叶').then(res =>{
//     console.log(res.data[0].Class.name);
// })

//md5加密的特点:1.hash加密算法的一种 2.把任意长度的字符串 加密为固定长度的字符串 3.单向加密，只能加密不能解密 3.同样的源字符串加密后得到结果固定
// const md5 = require('md5');//md5加密  给字符串加密
// const result = md5('Sfsfsafsa');
// console.log(result); //加密后的结果 为固定长度的字符串
// const adminServices = require('./services/adminServices');
// adminServices.addAdmin({
//     loginId:'你打野',
//     loginPwd:"Tx78.chen%szz"
// })

//初始化
require("./init");
// require('./mock/mockStudent');


//数据验证  1.前端(客户端)：为了用户体验    2.业务逻辑层：保证业务完整性 3.数据库验证:保证数据完整性（跳过业务逻辑层的时候才会用到） 4.路由层:验证接口格式是否正常
//相关库 1.validator 用于验证某个字符串是否满足某个规则    2. validate.js 用于验证某个对象的属性是否满足某些规则
// const stu = require('./services/studentService');
// // stu.addStudent({
// //   name:'你大爷',
// //   birthday:"1998-11-25",
// //   sex:true,
// //   mobile:'15870803413',
// //   ClassId:10,
// //   shibi:111
// // });
// stu.getStudents().then(res =>{
//   console.log(res);
// })

// const path = require("path");
// const jimp = require('jimp');//处理图片水印的插件
// //封装方法 给一张图片加水印 
// async function mark(waterFile, originFile, targetFile, proportion = 10, marginProportion = 0.05) {//参数 水印图片路径/原图片路径/混合出新的图片路径/水图片比例(原始图片宽度/水印图片宽度)/水离右边原图宽高位置比例
//   const [water, origin] = await Promise.all([jimp.read(waterFile), jimp.read(originFile)]);
//   //对水印图片进行缩放
//   const curProportion = origin.bitmap.width / water.bitmap.width;//bitmap位图
//   water.scale(curProportion/proportion);//水印图片缩放 当前比例除以目标比例
//   //计算位置
//   const right = origin.bitmap.width * marginProportion; //离右边的距离
//  const bottom = origin.bitmap.height * marginProportion;//离下边的距离
//  const x = origin.bitmap.width - right -water.bitmap.width ;//水印x坐标
//  const y = origin.bitmap.height - bottom -water.bitmap.height ;//水印y坐标
//   //写入水印
//   origin.composite(water, x, y, {//混合
//     mode: jimp.BLEND_SOURCE_OVER,//水印图片在原图之上
//     opacitySource: 0.3,//水印图片透明度
//   });
//   await origin.write(targetFile);
// }

// async function test() {//测试
//   const waterPath = path.resolve(__dirname, './water.jpg');
//   const originPath = path.resolve(__dirname, './origin.jpg');
//   const targetPath = path.resolve(__dirname, './new.jpg');//处理后的新图片地址
//   // const [water, origin] = await Promise.all([jimp.read(waterPath), jimp.read(originPath)]);//读取图片 使用Promise一起读取 解构出数组里面的对象
//   // origin.composite(water, 10, 10, {//混合
//   //   mode: jimp.BLEND_SOURCE_OVER,//水印图片在原图之上
//   //   opacitySource: 0.3,//水印图片透明度
//   // });//混合图片 参数 要混合的水印图片 坐标 水印图片其他配置

//   // //混合完后保存
//   // await origin.write(targetPath);//保存的混合图片的名称
//   mark(waterPath,originPath,targetPath);
// }
// test();


//模板引擎 在静态资源里面插入动态资源 插件ejs
// const ejs = require('ejs');
// const str = `
// 生成的数字:<%= number %>
// `;//number需要动态生成
// const result = ejs.render(str,{//生成Number
//     number:Math.random(),
// });
// console.log(result);生成的数字:0.742497469936658

//操作文件里面的内容
// const ejs = require('ejs');
// ejs.renderFile('./test.ejs',{
//     number:Math.random(),
// }).then(res =>{//文件得到的是Promise
//     console.log(res);//得到的html字符串
// });//参数文件路径 生成的数据

//生成二维码 qrcode插件 客服端用qrcodejs
// const qrcode = require('qrcode');
// // qrcode.toFile('./code.png','你真会睡，你女朋友在哭个，细佬',(err)=>{//1.生成的文件名字 2.二维码代表的内容 3.回调函数纠错
// //     if(err){//有错误
// //         console.log(err);
// //     }
// // });//生成二维码到文件里面
// qrcode.toDataURL('nidaye',(err,url)=>{
//     if(err){
//         console.log(err);
//     }else{//生成一个url资源
//         console.log(url);//data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKvSURBVO3BQW7sWAwEwSxC979yjpdcPUCQur/NYUT8wRqjWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoFw8l4ZtUTpJwonJHEr5J5YlijVKsUYo1ysXLVN6UhJMknKicJKFTOVF5UxLeVKxRijVKsUa5+LAk3KHySUnoVJ5Iwh0qn1SsUYo1SrFGuRhGpUvC/0mxRinWKMUa5eKPUzlR6ZLQJaFT+cuKNUqxRinWKBcfpvJNSThR6ZLwhMpvUqxRijVKsUa5eFkSvikJnUqXhDcl4Tcr1ijFGqVYo1w8pPKbqXRJuEPlLynWKMUapVijXDyUhE7lTUnoVO5IQqfSJaFLwonKSRLuUHlTsUYp1ijFGuXiIZU7ktCpnKjckYRO5Q6VLgknSehU/qVijVKsUYo1SvzBA0n4JpU7knCi0iWhUzlJwhMqbyrWKMUapVijXLxM5Y4kdConSThROVE5UfkklS4JncoTxRqlWKMUa5T4gweS0Kl0SehUTpJwh8onJaFTOUlCp/JNxRqlWKMUa5T4gz8sCZ3KSRKeUDlJwolKl4RO5YlijVKsUYo1SvzBA0n4JpWTJJyodEnoVLoknKicJOFE5U3FGqVYoxRrlIuXqbwpCW9KwkkSOpUuCV0S7lD5pGKNUqxRijXKxYcl4Q6VN6mcJKFTOVF5IgmdypuKNUqxRinWKBfDqHRJ6FTelIROpUtCp/JJxRqlWKMUa5SLYZLQqZyonCShU3kiCScqTxRrlGKNUqxRLj5M5V9KQqdyh0qXhE6lS8KJyicVa5RijVKsUS5eloRvSsIdSehUuiR0KidJOFHpktCpvKlYoxRrlGKNEn+wxijWKMUapVijFGuUYo1SrFGKNUqxRinWKMUapVijFGuUYo1SrFGKNcp/oOwO5LiJGVcAAAAASUVORK5CYII=
//     }
// })

