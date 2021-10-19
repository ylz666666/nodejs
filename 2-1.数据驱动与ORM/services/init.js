//给validate扩展
const validate = require("validate.js");
const moment = require('moment');
validate.extend(validate.validators.datetime,{
    //检验时间格式是否合法 并返回时间戳
    parse(value,options){//自动用于日期格式转换，在验证时自动触发，它需要把任何数据转换成时间戳返回，如果无法转换返回NaN
        //value 表示要传入的日期  options 针对某个属性的验证配置(整个配置对象 )
        let formats = ["YYYY-MM-DD HH:mm:ss","YYYY-M-D H:m:s","x"];//检验value是否符合该格式
        if(options.dateOnly){//判断dateOnly是否为true
            formats = ["YYYY-MM-DD","YYYY-M-D","x"];
        }
        return +moment.utc(value,formats,true);
    },

    format(value,options){//用户显示错误消息时,使用的字符串 parse自动执行value变成了时间戳 
        let format = "YYYY-MM-DD";
        if(!options.dateOnly){
            format+=' HH:mm:ss';
        }
        //把时间格式化成规定样式
        return moment.utc(value).format(format) ; //显示错误信息的时候 规定时间格式  'Birthday must be no earlier than 1921-09-22'
        //-----------这里不能不建议用上面的方法 
        // let formats = ["YYYY-MM-DD HH:mm:ss","YYYY-M-D H:m:s","x"];
        // if(options.dateOnly){//判断dateOnly是否为true
        //     formats = ["YYYY-MM-DD","YYYY-M-D","x"];
        // }
        // return moment.utc(value,formats,true);//'Birthday must be no earlier than Thu Sep 22 1921 12:49:43 GMT+0000'
    }
})