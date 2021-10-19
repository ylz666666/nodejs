const os =require('os');
// console.log(os.EOL)//查看换行的符号 window是/r /n 其他操作系统/n
// console.log(os.arch());//查看操作系统
// console.log(os.cpus().length);//获得cpu内核的信息 数组                                       有点用 根据不同cpu开启不同的线程
// console.log(os.freemem()/1024**3);//得到当前内存还剩下多少可以用 单位字节
// console.log(os.homedir());//获取管理员用户目录路径
// console.log(os.hostname());//获取主机名 右键电脑可以看到主机名
console.log(os.tmpdir())// 获取操作系统的临时目录     不同的操作系统临时目录也不一样 动态获取               有点用
