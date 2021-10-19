const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname,'./myFiles/2.txt');//如果文件名不存在会新建一个  如果目录不存在不能新建会报错
// async function test(){
//     const content = await fs.promises.writeFile(filename,'chengn',{
//         flag:'a'//标识a 意思是append追加内容    
//     },'utf-8');//第一个参数文件名 第二个写入内容 第四个默认为utf-8 可以不写  如果不想覆盖掉其他内容可以传第三个参数
//     console.log(content) ;
// }
async function test(){
  const buffer = Buffer.from('abc');
  const content =  await fs.promises.writeFile(filename,buffer);
  console.log(content);

}

test();
