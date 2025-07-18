import express from 'express'
import EmpModel from '../models/Employee.js'
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
    let employees=await EmpModel.find();
    return resp.json(employees)
})

//create new employee id:
router.post("/create",async(req,resp)=>{
    //read data from pm/form
    let emp_obj=req.body;
    console.log(`*************** ${emp_obj}`)
    //verify employee already exist or not?
    let emp=await EmpModel.findOne({'eid':emp_obj.eid})
    
    console.log(`############ ${emp}`)
    if(emp){
        return resp.json({"msg":"Employee Already Exists"})
    }
    //convert employee obj to Employee Model obj
    console.log("If Employee Not Exits")
    let employee=new EmpModel(emp_obj)
    await employee.save();
    return resp.json({"msg":"New Employee Create"})
})

//update employee details:
router.put("/update/:eid",async(req,resp)=>{
    //how to read url parameters
    let eid=req.params.eid;
    //how to read form data
    let emp_obj=req.body;
    //verify employee exits or not
    let employee =await EmpModel.findOne({'eid':eid})
    if(!employee){
        return resp.json({"msg":"Employee Not Exits"})
    }
    await EmpModel.findByIdAndUpdate(employee._id,emp_obj)
    return resp.json({"msg":"Employee updated"})
})
//delete employee details:
/*
Usage  : Delete Employee
API URL: http://127.0.0.1:8081/emp/delete/101
Method Type:Delete
Req Fields: None
Access Type:public
*/
router.delete("/delete/:eid",async(req,resp)=>{
    let eid=req.params.eid;
    //verify employee exist or not 
    let employee = await EmpModel.findOne({'eid':eid})
    console.log(employee)
    if(!employee){
        return resp.json({"msg":"Emplyee not Exits"})
    }
    await EmpModel.findByIdAndDelete(employee._id)
    return resp.json({"msg":"Employee Deleted"})
})
export default router;
