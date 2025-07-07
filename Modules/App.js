import express from 'exoress'
const app=express()
let host='127.0.0.1'
let port=2002

/*
Usage: Application root Request
API URL:http:127.0.0.1:8080/
Method Type:GET
Required Fields:None
Access Type:Public
*/

app.get('/',(req,resp)=>{
    resp.send("need to respond")
})

/*
Usage: create new user
API URL:http:127.0.0.1:8080/user/create
Method Type:POST
Required Fields:uid,uname,loc,email
Access Type:Public
*/
app.post('/user/create',(req,resp)=>{
    resp.send("user created success")
})

/*
Usage: fetch user details based on uid
API URL:http:127.0.0.1:8080/user/id
Method Type:GET
Required Fields:None
Access Type:Public
*/
app.get('/user/get',(req,resp)=>{
    resp.send("fetched success")
})

/*
Usage: update user based in user id
API URL:http:127.0.0.1:8080/user/update/1
Method Type:PUT
Required Fields:None
Access Type:Public
*/
app.put('/user/update',(req,resp)=>{
    resp.send("update success")
})

/*
Usage: Delete user based in user id
API URL:http:127.0.0.1:8080/user/delete/1
Method Type:DELETE
Required Fields:
Access Type:Public
*/
app.delete('/user/delete',(req,resp)=>{
    resp.send("user deleted successfully")
})


app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`server is Running ... http://${host}:${port}/`)
})