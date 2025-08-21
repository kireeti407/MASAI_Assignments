const express=require("express")
const DB = require("./confiq/DB")
const authC = require("./routes/auth.routes")
const postR=require("./routes/post.routes")
const intractionR=require("./routes/intraction.routes")
const analyticR = require("./routes/analytic.routes")
const customMiddleware  = require("./middleware/custom.middleware")

const app=express()

app.use(express.json())

DB()
app.use(customMiddleware)
app.use('/api/auth',authC)
app.use('/api/posts',postR)
app.use('/api/posts',intractionR)
app.use('/api/analytics',analyticR)

app.get("/test",(req,res)=>{
    try{
        res.status(200).send({Msg:"server is running,this is test router"})
    }
    catch(err){
        res.status(400).send({Msg:"Somthing went wrong"})
    }
})
app.use((req,res)=>{
    try{
        res.status(200).send({Msg:"router is not found"})
    }
    catch(err){
        res.status(400).send({Msg:"Somthing went wrong"})
    }
})
app.listen(3000,()=>{
    console.log("server run on port no 3000")
})