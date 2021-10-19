const express = require("express");//获取到的请求交给express中间函数处理
const app = express();
const cors = require("cors");
const session = require('express-session');//使用sessiong中间件
app.use(session({
    secret:"nidaye",  //对客服端sessionid进行加密   
    name:"sessionid",//默认为connect.sid 
}));//必须传配置
//app.use(require('./staticMiddleware'));//判断静态资源是否存在 请求之前做的事情

// app.get("/news/abc",(req,res,next) =>{//监听get请求 中间件(处理函数) next表示下个处理函数可以运行
//     console.log("handleone");
//      //当该中间件报错了
//     //throw new Error("abc");//抛出错误
//     //相当于
//     next(new Error('abc'));//如果中间件发生了错误，寻找错误处理中间件(参数里面含有err) 如果没有,则响应500
//      //res.send("你好");
//      //next();
//  }

 //(req,res,next) =>{//可以写多个中间处理函数
//     console.log("handletwo");
//     res.send("你好")
//     next();}
    
//)

// app.get("/news",(req,res,next) =>{//中间处理函数 
//     console.log("handlethree");
//     next();//当最后一个提交了 需要发送请求 否则页面报错 结束放在任一个请求函数中都可以
    
// })
//中间件处理错误一般用use //能匹配/news和它的所有子路径
const path = require("path");
const staticRoot = path.resolve(__dirname,'../public');//_dirname 当前文件目录
// app.use('/news',require('./errorMiddleware'));//可以不写参数匹配任何请求
//下面这段代码的作用：当请求时，会根据请求路径(req.path),从指定的目录中寻找是否存在该文件，如果存在，直接响应文件内容，而不再移交给后续的中间件
// app.use("/static",express.static(staticRoot));//传入一个文件目录路径 返回一个处理函数 第一个参数表示从/static里面去找 地址栏输入要加个/static/css/index
// app.get("/css/index/.css",(req,res) =>{//上面已经请求到了该文件 所以这步不执行
//     console.log("abc");
// });
// app.use("/static",(req,res) =>{//static/css/index.css 子路径也可以监控到
//     
//     console.log(req.baseUrl,req.path);//baseUrl基础路径(/static)  path 去掉基础路径的路径(css/index.css)
// })

// app.use("/static",(req,res)=>{
//     console.log("wuyu1");
// })
// app.use("/static/css/index.css",(req,res)=>{//上面已经请求到了该文件 所以这步不执行
//     console.log("wuyu2");
// })
// const history = require('connect-history-api-fallback');//插件 处理静态页面(静态资源刷新不会报错) 会修改没有后缀名的文件的后缀名
// app.use(history({//
//     rewrites: [//配置下 否则对所有get请求都返回一个html页面
//       {
//          from: /^\/api\/.*$/,
//         to: function(context) {//表示所有带api的get都代理到parsedUrl.path，其实就是原来的路径
//             //console.log('history',context.parsedUrl,context.parsedUrl.path,22);///api/student/9973 22 意思以api开头的不处理
//             return context.parsedUrl.path
//         }
//       }
//     ]
//   }));

//防盗链
app.use(require('./imgProtectMid'));//图片防盗链处理件
//对静态资源缓存处理
// app.use(express.static(staticRoot,{
//     //maxAge:1000* 3600,//设置过期时间1小时 单位是毫秒
//     setHeaders(res,path){//设置请求头三个参数
//         if(!path.endsWith('.html')){//判断是否是页面文件
//             res.header('Cache-Control',`max-age=${3600*24}`);
//         }
//     }
// }));

 app.use(express.static(staticRoot));////默认情况下(没有路径参数时)，如果映射的结果路径是一个目录(地址栏666/),则会自动使用index.html文件
// app.use(express.static(staticRoot,{//默认情况下可以配置 
//     index:"default.html"//默认路径从index.html改为default.html
// }));
// app.get("/css/index/.css",(req,res) =>{//上面已经请求到了该文件 所以这步不执行
//     console.log("abc");
// });

//session中间件处理


app.use(cors({
    origin(origin,callback){
        console.log(111,origin);
        if(!origin){
            callback(null,"*");
            return;
        }
       callback(null,origin);
        
    },
     credentials:true,//配合带cooike的请求
})); //cors 函数返回一个中间件

//使用代理
app.use(require('./proxyMid'));


//处理跨域
 app.use(require("./corsMiddleware"));
//使用cors插件代替上面中间件

// const whiteList = ["null","http://localhost:666"];
// app.use(cors({
//     origin(origin,callback){
//         console.log(111,origin);
//         if(!origin){
//             callback(null,origin);
//             return;
//         }
//         if(whiteList.includes(origin)){
//            callback(null,origin);
//         }else{
//             callback(new Error("not allowed"));
//         }
        
//     },
//      credentials:true,//配合带cooike的请求
// })); //cors 函数返回一个中间件

//加入cookie-parser 中间件
const cookieParser = require("cookie-parser");//得到一个函数
app.use(cookieParser("nidaye"));//调用后返回一个中间件  里面可以传参数作为密钥
//加入use之后 会在req对象中注入cookies属性用于获取所有请求过来的cookie
//加入之后会在res对象中注入cookie方法，用于设置cookie

//应用token中间件
app.use(require("./tokenMiddleware"));


//根据Content-type(请求类型)不同，分别使用express.urlencoded和express.json()(类型等于row)
//当Content-type(请求类型)为"application/x-www-form-urlencoded"时,会把流的数据读出来,放到Body里面
//  app.use(require('./myUrlEncoded'));//用封装的中间件

app.use(express.urlencoded({//中间件 解析post穿过来的数据 localhost:666/api/student
    extended:true,//表示使用新库qs来解析
}));

app.use(require('./apiLoggerMid'));//处理日志中间件
 app.use(express.json());
// app.post("/api/student",(req,res)=>{
//     console.log(req.body);//如果没有用urlencode中间件输出的时underfined,否则输出的时传过来的消息 { name: 'abc', age: '123' }
// });
//处理 api的请求
// app.post("/api/student",(req,res)=>{
//         //添加学生
//     });
// app.get("/api/student",(req,res) =>{
//     //获取学生
// }) 
// app.put("/api/student/:id",(req,res) =>{
//     //修改学生
// })  
//上面的操作不好，student修改全部都要改 可以使用express路由
//  const studentRouter = express.Router(); //创建一个路由
//  //get-> /api/student/     基于基地址
//  studentRouter.get("/",(req,res) =>{
//      console.log("获取学生")
//  })
//  ////get-> /api/student/id
//  studentRouter.get("/:id",(req,res) =>{
//     console.log("获取单个学生")
// })
//  studentRouter.post("/",(req,res) =>{
//     console.log("添加学生")
// })
// studentRouter.put("/",(req,res) =>{
//     console.log("修改学生")
// })

//使用生成验证码中间件
app.use(require('./captchaMid'));

//模板引擎
app.set('views',path.resolve(__dirname,"./views"));//设置模板在哪个目录
app.use('/api/students',require('./controller/student'));//该请求给一个完整的html页面


app.use("/api/student",require("./api/student"));//交给中间件路由处理 配置基地址
//  app.use("/api/class",require("./api/class"));
app.use("/api/admin",require("./api/admin"));
//  app.use("/api/book",require("./api/book"));
app.use('/api/upload',require('./api/upload'));//图片处理
//处理对下载资源的请求
app.use('/res',require('./api/download'));

app.use(require("./errorMiddleware"));
app.listen(666,() =>{//监听9527
    console.log(666);
})
