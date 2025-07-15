import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import chalk from 'chalk';
import morgan from 'morgan';
import path from 'path'
import empRouter from 9
import emp_Model from './model/Employee.js';
dotenv.config({ path: './config/dev.config' });

let app= express()
let port=process.env.PORT
let host=process.env.HOST
let db_url=process.env.db_url_url


//read form data
app.use(express.json())

// app.use('/api',Employee)
app.use(express.urlencoded({extended:true}))
//add http logger middleware
app.use(morgan('tiny'))
//forward requst to employee router
app.use('/emp',empRouter) 


app.get('/',(req,resp)=>{
    return resp.json({"msg":"Application root request"})
})

//connection with mongodb.
mongoose.connect(db_url)
    .then(()=>{   //if connection success
        console.log("connection success.");
    })
    .catch(()=>{
        console.log("connection error.");
        process.exit
    })//if connection failure

app.listen(port,host,(err)=>{
    if (err) throw err
    console.log(`Server is running... http://${host}:${port}/`);
})