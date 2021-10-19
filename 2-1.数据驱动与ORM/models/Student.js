const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const moment = require("moment");
module.exports = sequelize.define('Student',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    birthday:{
        type:DataTypes.DATE,
        allowNull:false,
        get(){//访问器get/set 当要输出显示birthday时候调用
            //返回时间戳
            const birth = this.getDataValue('birthday');
            if(birth){
                return this.getDataValue('birthday').getTime(); //this 模型定义的对象 getDataValue() 获取对象的那个值
            }else{
                return undefined;
            }
            
        }
    },
    age:{//虚拟属性 相当于计算属性 不显示在数据库
        type:DataTypes.VIRTUAL,
        get(){
            const now = moment.utc();
            const birth = moment.utc(this.birthday);
            return now.diff(birth,'y');//比较两个时间相差多少年 不是整数自动取整
        }
    },
    sex:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    },
    mobile:{
        type:DataTypes.STRING(11),
        allowNull:false,
    },

},{
    createdAt:'创建时间',
    updatedAt:'修改时间',
    paranoid:true,
});