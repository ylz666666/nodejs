const path = require('path');
module.exports = {
    devServer:{//配置代理
        proxy:{
            "/api":{
                target:"http://localhost:666",//当访问以/api开头的地址时，改为该地址
            }
        }
        
    },
    outputDir:path.resolve(__dirname,'../public'),//打包到那个目录里面
}