const Student = require('../models/Student');
const { Op } = require('sequelize');//导出模糊查询操作符
const Class = require('../models/Class');
const validate = require('validate.js');
const momnet = require("moment");
const {pick} = require('../utils/propertyHelper');
exports.addStudent = async function (StudentObj) {
   StudentObj = pick(StudentObj,"name","sex","ClassId","birthday","mobile","age");
    // console.log(StudentObj);
    validate.validators.classExits = async function (value) {//判断班级是否存在 传入classid值
        const isexit = await Class.findByPk(value);
        if (isexit) {
            return;
        }
        return '班级不存在';
    }
    const rule = { //验证规则 
        name: {
            //presence:true,//表示必须要写name  没写的话输出 { name: [ "Name can't be blank" ] } 数组里面装有多个错误信息 空字符串也可以
            presence: {
                allowEmpty: false,//值不允许为false
            },
            type: "string",//数据类型  
            length: {//字符串长度
                minimum: 1,//最短长度为1
                maximum: 10,//最大长度为10
            }
        },
        birthday: {
            presence: {
                allowEmpty: false,
            },
            datetime: {//日期验证 给时间戳会进行转换parse
                dateOnly: true,//表示只要日期年月日
                earliest: +momnet.utc().subtract(100, 'y'),//表示日期距现在时间不能大于一百年
                latest: +momnet.utc().subtract(5, 'y'),//表示日期距离当前时间不能小于五年
            }
        },
        sex: {
            presence: true,
            type: 'boolean'
        },
        mobile: {
            presence: {
                allowEmpty: false,
            },
            format: /1\d{10}/, //检验手机号 
        },
        ClassId: {
            presence: {
                allowEmpty: false,
            },
            type: 'integer',//整数类型
            classExits: true,//检验班级是否存在
        }
    }
    try {//异步验证 什么都不会输出要用try catch
        await validate.async(StudentObj, rule);
    } catch(err) {
       console.log(err);
    }
    // const result =validate.validate(StudentObj,rule); 同步验证
    // console.log(result); //验证通过输出undefined 不通过输出错误信息
    // const ins = await Student.create(StudentObj);
    // return ins.toJSON();
}
exports.deleteStudent = async function (StudentId) {
    if (StudentId) {
        Student.destroy({
            id: StudentId
        });
    }

}
exports.updateStudent = async function (id, StudentObj) {
    Student.update(StudentObj, {
        where: {
            id,
        }
    });
}
exports.getStudents = async function (page = 1, limit = 10, sex = -1, name = '') {//查询所有学生
    //   const results = await  Student.findAll({
    //       offset:(page-1) * limit ,//跳过多少页
    //       limit:+limit //每页显示多少 +号防止传入字符串  
    //   });//返回一个数组 传参数是分页查询
    //   const count =await Student.count()//查询学生总数 
    //   const datas =JSON.parse(JSON.stringify(results)) ;
    //   return {
    //       count,
    //       datas,
    //   }
    //第二个方法 上面的结合体
    const where = {};
    if (sex != -1) {//如果不等于 -1 按照参数查询 如果等于-1 条件为空查询所有
        where.sex = !!sex;//!!转换成布尔类型
    }
    if (name != '') {
        where.name = {
            [Op.like]: `%${name}%`//模糊查询  包含name
        };
    }
    const result = await Student.findAndCountAll({
        //可以填where条件
        where,
        // attributes: ['id', 'name'],//限制查询显示的内容 只显示id name
        include: [Class],//查询包含的表格数据
        offset: (page - 1) * limit,
        limit: +limit,
    })
    return {
        count: result.count,
        data: JSON.parse(JSON.stringify(result.rows)),
    };
}
exports.getStudentById = async function(id){
    const result = await Student.findByPk(id);//根据id查询
    if(result){
        return result.toJSON();
    }
        return null ;
    }