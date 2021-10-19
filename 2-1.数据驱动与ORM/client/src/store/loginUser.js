import * as loginServ from "../service/loginService";
export default{
    namespaced:true,
    state:{
        data:null,//登录的用户
        isLoading:false,//是否登录中
    },
    mutations:{
        setData(state,payload){
            state.data = payload;
        },
        setisLoading(state,payload){
            state.isLoading = payload;
        }
    },
    actions:{
        async login({commit},{loginId,loginPwd}){
            commit("setisLoading",true);//正在登录中
          const resp = await loginServ.login(loginId,loginPwd);
          commit('setData',resp.data);
          commit('setisLoading',false);//登录完成设置为false
          return resp.data;
        },
        loginOut({commit}){//注销
        commit('setData',null);//用户设置为空
        loginServ.loginOut();//注销
       },
       async whoAmI({commit}){
        commit('setisLoading',true);
        try {
        const resp = await loginServ.whoAmI();
        commit('setData',resp.data);
        } catch (error) {
            commit('setData',null);
        }
        commit('setisLoading',false);//登录完成设置为false
       }
    },
}