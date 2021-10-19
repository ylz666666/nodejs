//静态资源服务器
//http://localhost:6000/index.html  --> public/index.html 文件内容
//http://localhost:6000/css/index.css --> public/css/index.css 文件内容
// const http = require('http');
// const url = require('url');
// const path = require('path');
// const fs = require('fs');
// const csspath = path.resolve(__dirname, 'public/css/index.css');
// const htmlpath = path.resolve(__dirname, 'public/index.html');
// const scrip = path.resolve(__dirname,'public/script/index.js')

// const serve = http.createServer((req, res) => {//监听的文件不止一个，会多次触发
//     console.log(0000);
//     const urlobj = url.parse(req.url);//接受一个URL字符串，解析它，然后返回一个URL对象。如果urlString不是字符串，则抛出类型错误。如果存在auth属性但无法解码，则会抛出URIError。
//     reqs(res, urlobj);
// });
// serve.listen(9527);
// serve.on('listening', () => {
//     console.log('开始监听了');
// })
// async function reqs(req, urlobj) {
//     console.log(111,urlobj.pathname);
//     const css = await fs.promises.readFile(csspath);
//     const html = await fs.promises.readFile(htmlpath);
//     const scrips = await fs.promises.readFile(scrip);
//     if (urlobj.pathname == '/css/index.css') {
//         console.log(222)
//         // req.write(css);
//     } else if (urlobj.pathname == '/index.html') {
//         console.log(333)
//         req.write(html);
//     }else if(urlobj.pathname == '/script/index.js'){
//         console.log(444);
//         // req.write(scrips)
//     }
//     req.end();
// }








// const http = require("http");
// const URL = require("url");
// const path = require("path");
// const fs = require("fs");

// async function getStat(filename) {
//   try {
//     return await fs.promises.stat(filename);
//   } catch {
//     return null;
//   }
// }

/**
 * 得到要处理的文件内容
 */
// async function getFileContent(url) {
//   const urlObj = URL.parse(url);
//   let filename; //要处理的文件路径
//   filename = path.resolve(__dirname, "public", urlObj.pathname.substr(1));
//   let stat = await getStat(filename);
//   if (!stat) {
//     //文件不存在
//     return null;
//   } else if (stat.isDirectory()) {
//     //文件是一个目录
//     filename = path.resolve(
//       __dirname,
//       "public",
//       urlObj.pathname.substr(1),
//       "index.html"
//     );
//     stat = await getStat(filename);
//     if (!stat) {
//       return null;
//     } else {
//       return await fs.promises.readFile(filename);
//     }
//   } else {
//     return await fs.promises.readFile(filename);
//   }
// }

// async function handler(req, res) {
//   const info = await getFileContent(req.url);
//   if (info) {
//     res.write(info);
//   } else {
//     res.statusCode = 404;
//     res.write("Resource is not exist");
//   }
//   res.end();
// }

// const server = http.createServer(handler);
// server.on("listening", () => {
//   console.log("server listen 6000");
// });
// server.listen(6100);



//用流封装一个
const http = require('http');
const fs = require('fs');
const path = require('path');
const URL = require('url');
const serve = http.createServer(handle);
serve.on('listening', () => {
    console.log('开始监听了');
});
serve.listen(9527);
//封装一个响应数据方法
async function handle(req,res){
  const info = await getData(req.url);
  console.log(333,info);
  if(info){
      res.write(info);
  }else{
      res.statusCode = 404;
      res.write('This is a error file');
  }
  res.end();
}


//封装一个方法 判断文件是否存在 
async function getStat(url) {//参数为路径
    try {
        return await fs.promises.stat(url);
    } catch{
        return null;
    }
}
async function getData(url) {
    const urls = URL.parse(url);
    let filename = path.resolve(__dirname, 'public', urls.pathname.substr(1));
    console.log(111,filename);
    const info = await getStat(filename);
    
    if (!info) {//文件不存在
        return null;
    }else if(info.isDirectory()) {//是一个目录存在 有可能是目录
        filename = path.resolve(__dirname, 'public', urls.pathname.substr(1), 'index.html')
        console.log(222,filename);
        const status = await  getStat(filename);
        if(status){//如果存在 则读取
           return await fs.promises.readFile(filename);
        }else{//不存在
                return null;
        }

    }else{//是一个文件 读取
       return await fs.promises.readFile(filename);
    }
}

//封装一个方法 读取文件内容
// async function readfile(filename){//参数为路径
//     console.log(44444444444);
//    const rs = await fs.createReadStream(filename);//创建一个流
//    let data ='';
//    rs.on('data',(chunk) =>{
//        console.log('开始读取内容');
//        data+=chunk;        
//    })
//    rs.on('end',()=>{
//        console.log(4);
//        return data ;
       
//    });  
   
  
// }

