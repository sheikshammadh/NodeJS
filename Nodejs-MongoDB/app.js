import express from 'express'
import mongoose from 'mongoose'
dotenv.config({'path':'./config/dev.config'})
let app= express()
let port=process.env.PORT
let host=process.env.HOST
let DB_url=process.env.DB_url
//read form data
app.use(express.json())
app.use('/api',emprouter)




mongoose.connect(url)
    .then(()=>{   //if connection success
        console.log("connection success");
    })
    .catch()//if connection failure

app.listen(port,host,(err)=>{
    if (err) throw err
    console.log(object);
})