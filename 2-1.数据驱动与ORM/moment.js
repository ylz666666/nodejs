const moment = require('moment');//获取moment对象  
moment.locale("zh-cn");//设置语言为中文
// const mo = moment();//得到当前时间，monment对象
//.log(moment().toString());//Tue Sep 21 2021 10:02:36 GMT+0800
//console.log(moment.utc().toString());
//服务器端用的是utc时间 本地用的是当前时间
//得到当前时间戳
//console.log(moment().valueOf());//1632190166492  valueOf 返回对象的原始值 可以转换成数字的时候 或者+moment()
//.log(moment().utc().valueOf());
//根据指定的时间格式得到时间,时间格式:xxxx-xx-xx   xxxx/xx/xx  时间戳
// const value = "1970-01-01 00:00:00";
// console.log(moment(value).toString(),+moment(value));  //moment() 对象格式时间 moment().toString() 字符串常用标准时间格式  +moment()转化成数字变成时间戳 Thu Jan 01 1970 00:00:00 GMT+0800 -28800000
// console.log(moment.utc(value).toString(),+moment.utc(value));  //不知道value是格林威治时间还是当地时间 所以两个时间戳不相同 Thu Jan 01 1970 00:00:00 GMT+0000 0

//使用日期令牌转换 
//令牌是一个格式化字符串,例如:"YYYY-MM-DD HH:mm:ss"
 const formats = ["YYYY-MM-DD HH:mm:ss","YYYY-M-D H:m:s","x"] //令牌格式 可以写多个 x表示时间戳
// console.log(moment.utc("1970-01-01 00:00:00", formats,true).toString()); //true 表示严格检查
// console.log(moment.utc("1970-1-1 0:0:0", formats,true).toString())
// console.log(moment.utc(0, formats,true).toString());
//  console.log(moment.utc("197-01-01 00:00:00", formats,true).isValid())//Invalid date   isValid()判断是不是一个有效的日期 false


//操作momnet 显示(发生在客户端)
// const m = moment.utc("2015-1-5 23:00:01",formats,true); 
// console.log(m.format("YYYY年MM月DD日 HH点mm分ss秒"));//2015年01月05日 23点00分01秒 根据格式返回字符串  utc时间
// if(m.isUTC()){//如果是utc时间在本地转换成本地时间
//    console.log(m.local().format("YYYY年MM月DD日 HH点mm分ss秒")) //2015年01月06日 07点00分01秒  
// }

//给服务端发送一个本地时间 转换成utc时间
// const m = moment("2015-1-5 23:00:01",formats,true); 
// const toServer = m.utc().format("YYYY-MM-DD HH:mm:ss");
// console.log(toServer);

//显示格式 fromNow() 
const m = moment.utc("2015-1-5 23:00:01",formats,true); 
console.log(m.local().fromNow());//7 years ago 7 年前

