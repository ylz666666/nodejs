const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, './myfiles/1');
async function test() {
    const pathes = await fs.promises.mkdir(filename);//创建文件夹 存在则报错 没有返回值
    console.log(pathes);
//  for(let i = 1 ;i <= 5;i++){

//  }

}
test();