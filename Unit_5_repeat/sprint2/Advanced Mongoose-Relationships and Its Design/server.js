const express=require("express")
const DB = require("./config/db")
 

const app=express()

DB()

app.use(express.json())

app.use("/library")

app.get('/test',(res,req)=>{
    try{
        res.status(200).send("test router")
    }
    catch(err){
        res.status(400).send("somthing went wrong")
    }
})

app.listen(3000,()=>{
    console.log("server run on port 3000")
})

