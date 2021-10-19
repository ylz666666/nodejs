const Admin = require('../models/Admin');
const md5 = require('md5');
exports.addAdmin = async function (adminObj) {//添加一个 不能重复、
    //判断adminObJ的各种数据是否合理，以及账号是否已存在
    adminObj.loginPwd = md5(adminObj.loginPwd);//给密码加密
    const ins = await Admin.create(adminObj);
    return ins.toJSON();//返回一个平面对象 不是实例

}
exports.deleteAdmin = async function (adminId) {//删除不能全部删完，要留一个
    //方式一 有实例的时候用  会执行2条语句 查询删除
    // const ins = await Admin.findByPk(adminId);//查询 得到查询的实例
    // console.log(ins);
    // if(ins){//防止报错
    //     await ins.destroy();//删除实例 异步
    // }
    //方式2 直接删除
    await Admin.destroy({
        where: {
            id: adminId,
        }
    });


}
exports.updateAdmin = async function (id, adminObj) {
    //方式一 
    // const ins = await Admin.findByPk(id);//得到实例
    // ins.loginId = adminObj.loginId ;//修改
    // ins.save() //保存
    //方式二
    if(adminObj){
        adminObj.loginPwd = md5(adminObj.loginPwd);
    }
    await Admin.update(adminObj, {
        where: {
            id,
        }
    })

}
exports.login = async function (loginId, loginPwd) {
    // loginPwd = md5(loginPwd);
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd
        }

    })
    if(result){
        return result.toJSON();
    }else{
        return null ;
    }
   
}
exports.getAdminById = async function(id){
const result =await Admin.findByPk(id);//根据id查询
if(result){
    return result.toJSON();
}
    return null ;
}