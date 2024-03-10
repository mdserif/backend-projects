import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
dotenv.config()
import connectDB from './config/connectdb.js'


const app= express()
const port=process.env.PORT
const DATABASE_URL=process.env.DATABASE_URL 

// CORS Policy
app.use(cors())

//Database connection
connectDB(DATABASE_URL)

//JSON
app.use(express.json())



app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})