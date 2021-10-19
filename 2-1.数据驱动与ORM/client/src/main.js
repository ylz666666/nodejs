import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//store.dispatch("loginUser/login",{loginId:'abc',loginPwd:'123123'})
//  store.dispatch("loginUser/whoAmI")
// });//在网站被访问时，需要用token换取用户身份
// import * as loginServ from "./service/loginService";
// loginServ.login('abc',123123).then(resp =>{
//   console.log(1,resp);
// })
// loginServ.whoAmI().then(resp =>{
//   console.log(resp);
// })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
