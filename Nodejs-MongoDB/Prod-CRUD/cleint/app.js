import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import chalk from 'chalk'
import productRouter from './Routers/ProdRouters'
let app =express()


dotenv.config({path:'./config/dev.config'})
let port=process.env.port;
let host=process.env.host;
let db_url=process.env.MONGO_DB_URL;


app.use(morgan('tiny'))

app.get("./",(req,resp)=>{
    return resp.json({"msg":"Application root request"})
})
mongoose.Connec(db_url)
.then((resp)=>{

})