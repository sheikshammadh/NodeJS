import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import cors from 'cors'
import dotevn from 'dotenv'
import mongoose from 'mongoose'
import productRouter from './routes/productRouter.js'

const app = express()
//load env variable
dotevn.config({path:'./config/dev.config'})
let port=process.env.PORT;
let host=process.env.HOST;
let db_url=process.env.MONGO_DB_LOCAL_URL;


//enable CROSS ORIGIN RESOURCE SHARING
app.use(cors())
//enable http logger Middleware
app.use(morgan('tiny'))

/*Application Root Req
API URL:http://127.0.0.1:5000/
Method Type:GET
Required Fields:None
Access Type:Public
*/
app.get("/",(req,resp)=>{
    return resp.json({"msg":"Application root Request"})
})
//configure express app - to receive form Data/post man data
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//forward req to productRouter
app.use("/api",productRouter);

mongoose.connect(db_url)
.then((resp)=>{
    console.log("MongoDB Connection Successfully!")
})
.catch((err)=>{
    console.log(err)
    process.exit(1);//if unable to connect stop nodejs process
})


app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server is Running on http://${host}:${port}/`)
})