// const mysql = require('mysql2');
// //创建一个数据库连接
// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'245241654',
//     database:'test2',
// });
// // connection.query('select * from `company`;',(err,results,fild) =>{
// //     console.log(results);
// // });
// // connection.query("insert into company(`name`,location,buildDate) values('晨刚科技有限公司','深圳市龙华区',curdate())",(err,results) =>{//增加数据
// //     console.log(results); 
// // });
// // connection.query("update company set `name`= '晨刚' where id = 6",(err,results) =>{//修改语句
// //     console.log(results);
// // });
// connection.query("delete from company where id=6 ",(err,results)=>{//删除语句
//     console.log(results);
// })
 const mysql = require('mysql2/promise');
// async function test(){
//     const connection = mysql.createConnection({//一般都使用连接池连接 mysql.createPool({})//最多十个连接 
//         //多出的属性 waitForConnections:true,默认为true要等待，否则超过数量直接报错
//         //connectionLimit:10  最大的连接数量，最大为10
//         //queueLimit:0  //排队 为零意思市不限制长度 慢慢等
//     host:'localhost',
//     user:'root',
//     password:'245241654',
//     database:'test2',
//     multipleStatements:true,//可以运行多条sql语句
//     });
//     //  const [result] =await connection.query("insert into company(`name`,location,buildDate) values('陈大傻','龙华区',curdate())");
//      const [result] = await connection.query("delete from company where id in(10,11)");//不建议用query会产生sql语句注入，改变数据库内容 可以用execute(sql语句，传入的参数)
//     console.log(result);
// }
// test();
// const pool = mysql.createPool({//写在外面只需创建一次
//     host:'localhost',
//     user:'root',
//     password:'245241654',
//     database:'test2',
//     multipleStatements:true,
//     waitForConnections:true,
//     connectionLimit:10,
//     queueLimit:0
// });
// async function test(id){

//     const sql = "select * from employee where `name` like  concat('%',?,'%');";
//     const [results] = await pool.execute(sql,[id]);
//     console.log(results);
// }
// test('袁');

