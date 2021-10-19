const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname,'./myfiles/1.txt');
// console.log(fs.readFile(filename,{//写成对象还可以配置别的内容
//     encoding:'utf-8'
// },(err,content) => {
//     console.log(content);
// }))//路径写相对路径 相对命令行 一般用绝对路径任何时候都可以读取到 第二个参数编码类型utf-8 第三个个参数是一个回调函数两种写法 不转换是Buff 16进制数字
//为什么要回调函数 读取文件耗时较长 所以要用异步 否则会卡住 fs大多数函数都是异步的
// const content = fs.readFileSync(filename,'utf-8')//同步读取 会卡进程等待文件读取 Sync最好不要用
//Sync函数是同步的，会导致js阻塞，及其影响性能 
//通常在程序启动时运行有限的次数即可
// console.log(content,1)
async function test(){
   const res = await fs.promises.readFile(filename,'utf-8');
   console.log(res);
}
test();

//删除文件
fs.unlink(filename)