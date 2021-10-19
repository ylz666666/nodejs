//filename 获取整个文件路径 basename获取整个路径最后面的文件名
const path = require('path');
console.log(path.basename("sfsfs/fs/f/s/fs/fs/a.html",".html"));  //不在乎文件是否存在 只获取最后的名字 a.html 第二个参数文件的扩展名 输出a 会去掉后缀名没匹配上就不去掉
// console.log(path.sep)//获取当前系统的分隔符 win \     lixnu /   同一块东西内部分隔符
// console.log(path.delimiter) // ;  一块一块的分割符  不同的操作系统也不一样  可用作路径拆分上面
// console.log(path.dirname("a/b/c/d.html"));//获取文件目录 去掉文件名 a/b/c
//  console.log(path.extname("a/b/c.js"));//获取文件的后缀名 如果没有后缀则获取的为空 .js
// console.log(path.join("a","b","c","d.js"))  //把路径合成一个完整的路径a路径下的b路径下的c路径下的d.js文件  "../"返回上级目录 参数也可传变量基础路径
//normalize 把花里胡哨的路径 变成常见的路径
// path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');//把第一个路径到第二个路径用相对路径表示 '../../impl/bbb'
// console.log(path.resolve(__dirname,"./a.js"),)  
//获取当前绝对路径   Lixnue 表示绝对路径 从根目录从发找a.js win有盘符 返回一个当前路径的盘符加路径 C:\a.js  加参数表示相当于参数的路径 相当于拼接路径
//参数是相对路径 获取的是相对命令行的路径拼接上当前路径（相当于相对于process.cwd()） 前面可以加个参数__dirname 相对于当前模块的路径  __dirname表示运行的文件的路径 
