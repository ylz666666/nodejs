const util = require("util");
// async function delay(duration = 1000){

//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve(duration);
//         },duration);
//     })

// }
// const delayCallback = util.callbackify(delay);  
// delayCallback(500,(err,d) =>{//第一个为传的参数 callbackify是高阶函数 把一个Promise转换成回调函数
//     console.log(d);
// })
// delay(500).then(d =>{
//     console.log(d);
// })
//--------------------------------------------------
// function delayCallback(duration,callback){
//     setTimeout(() =>{
//         callback(null,duration); //回调的两个参数 错误和值
//     },duration)
// }
// const delay = util.promisify(delayCallback);//把回调转换成Promise
// // delay(500).then(d =>{
// //     console.log(d);
// // })
// (async () =>{
//     const r = await delay(500) ;
//     console.log(r);
// })();
//util.inherits(MyStream,EventEmitter); //继承 第一个填儿子 第二个父亲

//isDeepStrictEqual  将两个对象进行深度严格比较 
const obj1 = {
    a: 1,
    b: {
        c: 3,
        d: {
            e: 5
        }
    },

}
const obj2 = {
    a: 1,
    b: {
        c: 3,
        d: {
            e: 5
        }
    },

}
console.log(util.isDeepStrictEqual(obj1,obj2));
