const express=require("express")
const DB = require("./config/db")
const orderroter = require("./routes/order.routes")
const userrouter = require("./routes/user.route")
const productrouter = require("./routes/product.route")
const filterrouter = require("./routes/filter.routes")
const analyticrouter = require("./routes/analytic.routes")

 

const app=express()

DB()

app.use(express.json())

app.use("/product",productrouter)

app.use("/user",userrouter)

app.use('/order',orderroter)

app.use('/filter',filterrouter)

app.use("/analtics",analyticrouter)

app.get('/test',(res,req)=>{
    try{
        res.status(200).send("test router")
    }
    catch(err){
        res.status(400).send("somthing went wrong")
    }
})

app.get('*',(req,res)=>{
    try{
        res.status(200).send("router not found")
    }
    catch(err){
        res.status.apply(400).send("somthing went wrong")
    }
})

app.listen(3000,()=>{
    console.log("server run on port 3000")
})

