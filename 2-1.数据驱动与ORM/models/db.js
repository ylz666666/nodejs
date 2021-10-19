const {Sequelize} = require('sequelize');
const {sqlLogger} = require("../logger");
const sequelize = new Sequelize('myschooldb','root','245241654',{//创建一个ORM实例 拥有连接池的功能
    host:'localhost',
    dialect:'mysql',//用那个数据库
    //logging:null,//控制台不显示日志信息 也可以给一个函数自己定义日志内容
    logging:(msg) =>{
        sqlLogger.debug(msg);
    }
});
module.exports = sequelize;