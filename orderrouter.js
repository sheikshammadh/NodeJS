import { Router } from "express"
let router=express.Router()

app.get('/',(req,resp)=>{
    return resp.json("need to respond")
})

app.post('/user/create',(req,resp)=>{
    return resp.json("user created success")
})

app.get('/user/get',(req,resp)=>{
    return resp.json("fetched success")
})

app.put('/user/update',(req,resp)=>{
    return resp.json("update success")
})

app.delete('/user/delete',(req,resp)=>{
    return resp.json("user deleted successfully")
})
export default router