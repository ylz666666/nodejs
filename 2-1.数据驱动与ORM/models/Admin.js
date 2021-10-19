const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Admin = sequelize.define('Admin',{
    loginId:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    loginPwd:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    // name:{
    //     type:DataTypes.STRING,
    //     allowNull:false,
    // },
   
},
{
    createdAt:'创建时间',
    updatedAt:'修改时间',
    paranoid:true,//从此以后该表的数据不会真正的删除，而是增加一列deletedAt,记录删除的时间
}
);
//Admin.sync()// 异步方法 返回Promise  如果表存在则不创建 否则创建 传参数{ force:true   } 如果表存在，则删除，重新创建   {alter:true} 如果表存在 判断表和模型是否有差异 有则修改表

module.exports = Admin ;
