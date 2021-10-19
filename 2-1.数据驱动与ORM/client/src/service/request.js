//封装axios请求
//1.发送请求的时候,如果有token,需要附带到请求头中
//2.响应的时候，如果有token,保存token到本地(cookie、localStore可保存token)
//3.响应的时候,如果响应的消息码是403(没有token或者token失效),在本地删除token
import axios from "axios";
export default function(){//1.发送请求的时候,如果有token,需要附带到请求头中
    const token = localStorage.getItem('token');//vue中直接在浏览器中取
    let instance = axios;
    if(token){
     instance = axios.create({//创建一个axios实例 附带一个请求头
            headers:{
                authorization:"bearer "+token ,
            }
        })
    }
    instance.interceptors.response.use((resp)=>{//响应拦截
        ////2.响应的时候，如果有token,保存token到本地(cookie、localStore可保存token)
            if(resp.headers.authorization){
                localStorage.setItem("token",resp.headers.authorization);
            }
            return resp;
    },(err) =>{
        //3.响应的时候,如果响应的消息码是403(没有token或者token失效),在本地删除token
        if(err.response.status===403){
            localStorage.removeItem("token");
        }
        return Promise.reject(err);
    })
    return instance;
}