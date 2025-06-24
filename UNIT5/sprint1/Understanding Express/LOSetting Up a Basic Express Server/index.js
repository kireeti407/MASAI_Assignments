const express=require("express")

const app=express()

app.get("/home",(req,res)=>{
    res.send("Welcome to the home page")
})

app.get("/about",(req,res)=>{
    res.send("Welcome to the about page")
})

app.get("/contact",(req,res)=>{
    res.send("Welcome to the contact page")
})

app.get("*",(req,res)=>{
    res.status(404).send("Page not found")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

