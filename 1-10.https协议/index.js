//https 保证数据在传输过程中不被窃取和篡改,从而保证传输安全            非https协议的明文传输  
//https模块 证书准备：1.网上购买权威机构证书：准备好钱 服务器 域名 该方式应用在部署环境中
 //2.本地产证书：自己作为权威机构发布证书    
 //具体方法：安装openssl-->生成CA私钥--->生成CA公钥(证书请求)-->生成CA证书------ 生成服务器私钥--->生成服务器公钥--->生成服务器证书 