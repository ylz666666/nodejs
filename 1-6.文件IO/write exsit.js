const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, './myfiles/3.js');
//封装一个exsit方法 判断目录或文件是否存在
async function exists(name){
    try {
       await fs.promises.stat(filename);
        return false ;
    } catch (error) {
        if(error.code === 'ENOENT'){
            console.log('文件不存在');
            return false
        }
        throw error ;  
    }
}
async function test() {
    const res =await exists(filename); //目录是否存在
    if(res){
        console.log('文件存在');
    }else{
       if(path.extname(filename)){//如果有后缀名 则创建文件
           await fs.promises.writeFile(filename,'');
           console.log('创建文件成功')
       }else{//否则创建目录
      await fs.promises.mkdir(filename);
      console.log('创建目录成功');
    } 
    }
}
test();