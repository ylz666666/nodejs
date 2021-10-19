//登录功能
import request from "./request";
export function delay(durationin){//模拟延迟
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve();
        },durationin);
    })
}
export async function login(loginId,loginPwd){
    await delay(2000);
    const resp = await request().post("/api/admin/login",{
        loginId,loginPwd
    });
    return resp.data;
}
export function loginOut(){//删除token
    localStorage.removeItem("token");
}
export async function whoAmI(){//查看登录的个人信息
    await delay(2000);
    const resp = await request().get("/api/admin/whoami");
    return resp.data;
}