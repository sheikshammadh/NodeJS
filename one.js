import express from 'express'
const app=express()
let host='127.0.0.1'
let port= 8000


app.get('/',(req,resp)=>{
    resp.send("need to respond")
})

app.post('/user/create',(req,resp)=>{
    resp.send("user created success")
})

app.get('/user/get',(req,resp)=>{
    resp.send("fetched success")
})

app.put('/user/update',(req,resp)=>{
    resp.send("update success")
})

app.delete('/user/delete',(req,resp)=>{
    resp.send("user deleted successfully")
})

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`server is Running ... http://${host}:${port}/`)
})

