const express=require('express')
const DB = require('./confiq/db')
const gamerouter = require('./routes/game.routes')
const publishrouter = require('./routes/publisher.routes')
const relationrouter = require('./routes/relation.routes')


const app=express()

app.use(express.json())

DB()

app.use('/publisher',publishrouter)

app.use('/game',gamerouter)

app.use('/relation',relationrouter)

app.get('/test',(req,res)=>{
    try{
        res.status(200).send("server is working")
    }
    catch(err){
        res.status(400).send("somthing is wrong")
    }
})


app.use((req,res)=>{
    try{
        res.status(200).send("router is not found")
    }
    catch(err){
        res.status(400).send("somthing is wrong")
    }
})

app.listen(3000,()=>{
    console.log("server is running on port no 3000")
})