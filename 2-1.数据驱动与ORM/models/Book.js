const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Book = sequelize.define('Book',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    imgurl:{
        type:DataTypes.STRING,//存储图片路径
       
    },
    publishDate:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.TEXT("LONG"),
        allowNull:false,
    },

},{
    createdAt:'创建时间',
    updatedAt:'修改时间',
    paranoid:true,
});
module.exports = Book ;