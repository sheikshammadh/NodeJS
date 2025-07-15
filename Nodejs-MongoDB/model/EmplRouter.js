import express from 'express'
import emp_Model from './Employee.js'
let router = express.Router()
//employee Routuer Root Req
/*
Usage  : employee Router root req
API URL: http://127.0.0.1:8080/emp/
Method Type:
Req Fields:
Access Type:
*/
router.get("/",(req,resp)=>{
    return resp.json({"msg":"Employee Router Root Req"})
})
/*
Usage  : Fetch all employees
API URL: http://127.0.0.1:8080/emp/read
Method Type:GET
Req Fields: NONE
Access Type:public
*/
router.get("/read",async(req,resp)=>{
    let employees=await EmployeeModel.find();
    return resp.json(employees)
})
export default router;