const {asyncHandler} = require("../getSendResult");
const express = require("express");
const stuServ = require("../../services/studentService");
const router = express.Router(); //创建一个路由
 //get-> /api/student/     基于基地址
 router.get("/",asyncHandler(async (req,res) =>{
   const page = req.query.page||1;//获取地址栏参数  
   const limit = req.query.limit||10;
   const sex = req.query.sex||-1;
   const name = req.query.name||"";
   return await stuServ.getStudents(page,limit,sex,name);
    // res.send("分页获取学生");//响应给页面
 })
 );


 ////get-> /api/student/id
 router.get("/:id",asyncHandler(async (req,res,next) =>{
   return await stuServ.getStudentById(req.params.id); 
 })
);


 router.post("/",asyncHandler(async (req,res,next) =>{//添加学生
  return await stuServ.addStudent(req.body);
  
}))


router.delete("/:id",asyncHandler(async (req,res,next) =>{
  return await stuServ.deleteStudent(req.params.id)}
  )
  )


router.put("/:id",asyncHandler(async (req,res) =>{
  console.log(req.body);
  return await stuServ.updateStudent(req.params.id,req.body)}))
module.exports = router ;