import express from 'express'
const app = express()
let host='127.0.0.1'
let port= 8520

app.get('/',(req,resp)=>{
    resp.send('api running')
})

app.post('/user/create',(req,resp)=>{
    resp.send('User created')
})

app.get('/user/get',(req,resp)=>{
    resp.send('fetched')
})


app.put('/user/put',(req,resp)=>{
    resp.send('updated success')
})

app.delete('/user/delete',(req,resp)=>{
    resp.send('deleted succesfully')
})

app.listen(port,host,(err)=>{
    if (err) throw err
    console.log(`server is running...http://${host}:${port}/`);
});
