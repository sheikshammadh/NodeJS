// import express from 'express'
// import fs from 'fs'
// import path from 'path'
// const router=express.Router()
// /*
// usage  : emp module Root Request
// API URL: http://127.0.0.1:8080/emp/
// Method Type:GET
// Required Field:None
// Access Type:Public
// */
// router.get("/",(req,resp)=>{
//     return resp.json({"message":"emp module root request"})
// })
// /*
// usage  : create new employee
// API URL: http://127.0.0.1:8080/emp/create
// Method Type:POST
// Required Field:eid,ename,esal
// Access Type:Public
// */
// router.post("/create",(req,resp)=>{
//     let employee= req.body;
//     console.log(employee)
//     return resp.json({"message":"create emp"})
// })



// let getEmployees=()=>{
//     console.log("Test Case 12")
//     let emp_Data = fs.readFileSync(path.join(process.cwd(),"data","emp.json"),'utf-8')
//     let employees=JSON.parse(emp_Data)
//     return employees;
// }
// let createEmployees=(employees)=>{
//     fs.writeFileSync(path.join(process.cwd(),"data","emp.json"),
//                      JSON.stringify(employees))
// }