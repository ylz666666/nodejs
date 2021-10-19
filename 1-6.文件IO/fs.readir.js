const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, './myfiles');
async function test() {
   const pathes = await fs.promises.readdir(filename);
   console.log(pathes);//返回一个数组 里面装的是目录中的所有文件包括目录（子文件） 没有深度递归   目录要存在

}
test();