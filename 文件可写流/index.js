//读取一个文件到另一个文件里面
const fs = require("fs");
const path = require('path');
const filename = path.resolve(__dirname,"./temp/abc.txt");
async function test1(){
    
    const t1 = +new Date(); 
    const from = await fs.promises.readFile(filename,'utf-8');
    const to = await fs.promises.writeFile('a.js', from);
    const t2 = +new Date();
    console.log(t2-t1);
}
// test1();//87s

function test2(){
    const t1 = +new Date();
    const rs = fs.createReadStream(filename);
    const ws = fs.createWriteStream('a.js');
    
    rs.on('data',(chunk) =>{//读取 写入
       const br =  ws.write(chunk);
       if(!br){//如果 管道堵塞 暂停读取
            rs.pause();
       }
    })
    ws.on("drain",() =>{//管道为空 继续读取
        rs.resume();
    })
    rs.on('end',() =>{//读取完毕
        ws.end();//把最后数据写入
        const t2 = +new Date();
        console.log(t2-t1);
    })


}
test2();//32


