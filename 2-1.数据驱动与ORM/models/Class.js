const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Student = require('./Student');
const Class = sequelize.define('Class',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    openDate:{
        type:DataTypes.DATE,
        allowNull:false,
    },

},{
    createdAt:'创建时间',
    updatedAt:'修改时间',
    paranoid:true,
});
module.exports = Class;