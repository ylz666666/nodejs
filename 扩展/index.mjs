// import * as obj from './a.mjs';//导出全部 会重复导出一次 默认导出和普通导出一致 和视频输出的不一样
 import obj from './a.mjs'
console.log(obj);//es里面可以和commonJS互操作 
//  require('./a.mjs');//会把读取到的内容放到函数里面执行 es内容不能在函数里面执行
// import("./a.mjs").then(r =>{
//     console.log(r) ;
// }) //静态加载 可放在任何地方