//同步所有模型
require('./Admin');
require('./Book');
require('./Class');
require('./Student');
const sequelize = require('./db');
sequelize.sync({
    alter:true,
}).then(() =>{
    console.log('所有同步完成');
})