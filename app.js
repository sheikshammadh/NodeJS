import express from 'express'
import userRouter from './routes/userRouter.js'
import prodRouter from './routes/prodRouter.js'
import orderRouter from './routes/orderRouter.js'
const app = express()
let host='127.0.0.1'
let port=8080
/*
Usage: Application root Request
API URL:http:127.0.0.1:8080/
Method Type:GET
Required Fields:None
Access Type:Public
*/
app.get("/",(req,resp)=>{
    return resp.json({"message":"Application root request"})
})

app.use("/user",userRouter)
app.use("/proudct",prodRouter)
app.use("/order",orderRouter)

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server Running... http://${host}:${port}/`)
})