const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, './myfiles');

async function test() {
    const res = await fs.promises.stat(filename); //查看当前文件或目录状态信息 异步的 不存在就会报错
    // console.log(res.isDirectory(), res.isFile());//是否是目录  是否是文件 文件不存在就会报错
    console.log(res.size);
}
test();
// Stats {
//     dev: 3659066362,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: 4096,
//     ino: 15199648742519420,
//     size: 4,  //占用字节数  目录中size为0
//     blocks: 0,
//     atimeMs: 1629634090902.3745,
//     mtimeMs: 1629634089913.9624,
//     ctimeMs: 1629634089913.9624,
//     birthtimeMs: 1629629297817.6235,
//     atime: 2021-08-22T12:08:10.902Z, //上一次访问这个文件的时间
//     mtime: 2021-08-22T12:08:09.914Z,//上一次修改文件的时间
//     ctime: 2021-08-22T12:08:09.914Z,//上一次改变文件状态的时间 访问权限等
//     birthtime: 2021-08-22T10:48:17.818Z
//   }