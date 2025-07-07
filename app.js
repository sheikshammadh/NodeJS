import express from 'express'
const app = express()
let host='127.0.0.1'
let port = 8080

/*
usage : app root 
API URL: http://127.0.0.1:8080/
Method Type:GET
*/
app.get("/",(req,resp)=>{
    resp.send("Application Root Req")
})

/*
usage : create new user 
API URL: http://127.0.0.1:8080/user/create
Method Type:POST 
Required Fields:name,email,mobile
Access Type:Public
*/
app.post("/user/create",(req,resp)=>{
    resp.send("create new User")
})
/*
usage : fetch users/user  
API URL: http://127.0.0.1:8080/user/read
Method Type:GET 
Required Fields:None
Access Type:Public
*/
app.get("/user/read",(req,resp)=>{
    resp.send("Fetching user Details")
})

/*
usage : update user
API URL: http://127.0.0.1:8080/user/update
Method Type:PUT
Required Fields:name,email,mobile
Access Type:Public
*/
app.put("/user/update",(req,resp)=>{
    resp.send("Updating user")
})

/*
usage : delete user 
API URL: http://127.0.0.1:8080/user/delete
Method Type:DELETE 
Required Fields:None
Access Type:Public
*/
app.delete("/user/delete",(req,resp)=>{
    resp.send("Delete User")
})
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`server is Running ... http://${host}:${port}/`)
})