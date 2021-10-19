//流 数据的流动 数据从一个地方缓缓流到另一个地方  
//流是有方向的 
//可读流  Readable 数据从源头流向内存
// 可写流  Writeable  数据从内存流向源头
//双工流  数据即可从源头流向内存又可从内存流向源头
//文件流 内存数据和磁盘文件数据之间的流动
const fs =require('fs');
const path = require('path');
const filename = path.resolve(__dirname,'./abc.txt');
const rs = fs.createReadStream(filename,{
    encoding:'utf-8',
    highWaterMark:1,
    autoClose:true,//和文件关闭有关 默认为true 读完后会自动关闭
});//path option{encoding:编码方式 默认buffer,start:起始字节,end:结束字节,highWaterMark:每次读取数量64*1024/1} 返回Readbble的子类ReadStream
//事件 rs.on(事件名,事件函数) 事件名 open:文件被打开触发事件
rs.on("open",()=>{//
    console.log("文件被打开了");
})
rs.on("error",()=>{//文件出错了 例 路径错误
    console.log("文件出错了");
})
rs.on("close",()=>{//rs.close() 手动关闭 当文件读完了会自动关闭
    console.log("文件关闭触发");
})
rs.on("data",(chunk)=>{//反复触发  注册该事件才会读取数据，否则不读取
    console.log("读到了一部分数据",chunk);
    rs.pause();
})
rs.on("pause",()=>{//
    console.log("文件读取暂停了");
    setTimeout(()=>{
        rs.resume();//恢复读取
    },1000)
})
rs.on("resume",()=>{//
    console.log("文件读取又恢复了");
})
rs.on("end",()=>{//读完会触发关闭事件close
    console.log("全部数据读取完了");
})
//rs.pause()暂停读取     rs.resume()恢复读取
