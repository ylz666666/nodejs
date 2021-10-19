const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname,'./temp/abc.txt');
const ws =  fs.createWriteStream(filename,{//返回一个流
    flags:"w",  //w覆盖文件 a添加内容
    encoding:'utf-8',//将写的字符串转换成二进制 start end ，
    highWaterMark:2,//每次写入字节数
});
//读取流有的事件 ws全有 还多2个事件
// let br =  ws.write("a")
// //参数可以是字符串或者Buffer 可以自动创建文件
// br = ws.write('b')
// console.log(br);//返回一个布尔值  true 每次写入字节数是否填满整个通道还有剩余空间（是否小于higtWaterMark） utf-8中一个汉字占三个字节  false 后面输入的数据需要排队
const t1 = +new Date();
for(let i = 0;i < 1024*1024*10 ; i++){
   const br =  ws.write('b');//写入数据太多  队列里面数据太多 会产生背压问题 可以用返回的值来设置条件 
   //解决背压问题  ws.drain事件 当写入队列清空时会触发 while ws.end([data可选参数 最后一次写入字符串或者buffer])手动调用自动关闭文件
   //end()方法 调用此方法会迫使操作系统将缓存区剩余数据立即被写入文件
  
}
//rs.pipe(ws) //读取自己封装的函数 把读取流的管道和写入流管道接起来  读一块写一块   1.将可读流连接到可写流 2.返回参数的值ws 3.解决背压问题 
