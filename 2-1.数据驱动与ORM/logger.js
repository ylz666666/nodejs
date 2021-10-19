const log4js = require("log4js");
const path = require('path');
function getCommonAppender(pathSeg){
    return{
        //定义一个sql出口 默认是写到控制台
            type:'file',//日志写入到那个类型里面 异步的 dateFile文件备份的时候后缀名为日期
            filename:path.resolve(__dirname,'logs',pathSeg,'logging.log'),
            maxLogSize:1024 * 1024,            //配置文件的最大容量 超出备份清空
            keepFileExt:true,//备份文件添加原后缀名
            daysToKeep: 1,//保留多少天的日志 默认为0不限制
            layout:{//设置日志输出的格式
                type:"pattern",//表示自定义格式
                pattern:"%d{yyyy-MM-dd hh:mm:ss} %p %c: %m%n",//%d表示日期 %p日志级别 日志分类 %m日志内容 %n换行
            
        },
    }
}
log4js.configure({//配置  必须配置一个默认分类
    appenders:{//出口名称
        sql:getCommonAppender('sql'),
        default:{
            type:"stdout",//控制台输出  
            filename:path.resolve(__dirname,"logs","default","logging.log")
        },
        api:getCommonAppender('api'),
        
    },
    categories:{//分类配置
        sql:{
            appenders:["sql"],//该分类使用出口sql的配置写入日志
            level:"all",//配置级别
        },
        default:{
            appenders:["default"],
            level:'all'
        },
        api:{
            appenders:["api"],
            level:'all'
        }
    }
});
process.on("exit",() =>{//当进程要退出之前，会触发exit事件
    log4js.shutdown();//程序退出的时候调用一次
});

exports.sqlLogger = log4js.getLogger("sql");
exports.logger = log4js.getLogger();
exports.apilogger = log4js.getLogger('api');//导出一个日志记录