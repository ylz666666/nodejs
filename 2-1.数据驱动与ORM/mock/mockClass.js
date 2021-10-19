const Mock = require('mockjs');
const result =  Mock.mock({
    'datas|17':[{
        'id|+1':1,
        name:'前端第 @id 期',
        openDate:'@date'
    }],//生成3-10项数组，数组里面每项是一个对象
}).datas;//返回模拟的数据
const Class = require('../models/Class');
Class.bulkCreate(result);//在表中插入多个数据