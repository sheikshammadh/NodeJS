import express from 'express'
import fs from 'fs'
import path from 'path'
const router=express.Router()
/*
usage  : emp module Root Request
API URL: http://127.0.0.1:8080/emp/
Method Type:GET
Required Field:None
Access Type:Public
*/
router.get("/",(req,resp)=>{
    return resp.json({"message":"emp module root request"})
})
/*
usage  : create new employee
API URL: http://127.0.0.1:8080/emp/create
Method Type:POST
Required Field:eid,ename,esal
Access Type:Public
*/
router.post("/create",async (req,resp)=>{
    let employee= req.body;
    //console.log(employee)
    let employees= await getEmployees()
    //verify employee already exist or not?
    let emp=employees.find(emp=>emp.eid ===employee.eid)
    if(emp){
        //console.log(emp)
        return resp.json({"msg":"Employee Already Exists"})
    }
    employees.push(employee)
    createEmployees(employees);
    return resp.json({"msg":"New Employee Created"})
})

/*
usage  : fetch all employees
API URL: http://127.0.0.1:8080/emp/read
Method Type:GET
Required Field:None
Access Type:Public
*/

router.get("/read",async(req,resp)=>{
    let employees=await getEmployees()
    return resp.json(employees)
})

/*
usage  : update employee based on eid
API URL: http://127.0.0.1:8080/emp/update/101
Method Type:PUT
Required Field:eid,ename,esal
Access Type:Public
*/
router.put("/update/:eid",async(req,resp)=>{
    let eid=req.params.eid;
    let employee =req.body;
    let employees=await getEmployees();
    let emp = employees.find((emp)=>{
        return emp.eid === parseInt(eid);
    })
    // console.log("Tst case 123")
    console.log(emp)
    if(!emp){
        return resp.json({"msg":"Employee Not Exits"})
    }
    let remaining_Employees=employees.filter(emp=>emp.eid !==employee.eid);
    remaining_Employees.unshift(employee)
    createEmployees(remaining_Employees)
    return resp.json({"msg":"Employee Object Updated"})
})

/*
usage  : delete employee based on eid
API URL: http://127.0.0.1:8080/emp/delete/101
Method Type:delete
Required Field:None
Access Type:Public
*/
router.delete("/delete/:empId",async(req,resp)=>{
    let eId=req.params.empId;
    console.log(typeof eId)
    let employees=await getEmployees();
    console.log(employees)
    let emp = employees.find((employee)=>{
        return employee.eid ===parseInt(eId);
    })
    console.log(emp) 
    if(!emp){
        return resp.json({"msg":"Employee Not Exits"})
    }

    let remaining_Employees = employees.filter(emp=>emp.eid !==parseInt(eId))
    createEmployees(remaining_Employees)
    return resp.json({"msg":"Employee Deleted"})
})

let getEmployees=()=>{
    //console.log("Test Case 12")
    let emp_Data = fs.readFileSync(path.join(process.cwd(),"data","emp.json"),'utf-8')
    let employees=JSON.parse(emp_Data)
    return employees;
}

let createEmployees=(employees)=>{
    fs.writeFileSync(path.join(process.cwd(),"data","emp.json"),
                     JSON.stringify(employees))
}

export default router;