const express=require("express")
const fs=require("fs")

const app=express()

app.use(express.json())

app.get("/dishes",(req,res)=>{
    const dishes=fs.readFileSync("db.json","utf-8")
    res.status(200).json(dishes)
})
app.get("/dishes/:id",(req,res)=>{
    const dishes=fs.readFileSync("db.json","utf-8")
    const id=req.params.id
    const dish=dishes.dishes.find(dish=>dish.id==id)
    res.status(200).json(dish)
})
app.get("/dishes/get",(req,res)=>{
    const name=req.query.name
    const dishes=fs.readFileSync("db.json","utf-8")
    const filtereddishes=dishes.dishes.filter(dish=>dish.name.includes(name))
    res.status(200).json(filtereddishes)
})  

app.post("/adddishes",(req,res)=>{
    const dishes=fs.readFileSync("db.json","utf-8")
    const newdish={...req.body,id:dishes.dishes.length+1}
    dishes.dishes.push(newdish)
    fs.writeFileSync("db.json",JSON.stringify(dishes,null,2))
    res.status(201).json(newdish)
})

app.put("/updatedishes/:id",(req,res)=>{
    const dishes=fs.readFileSync("db.json","utf-8")
    const id=req.params.id
    const updateddish=req.body
    const index=dishes.dishes.findIndex(dish=>dish.id==id)
    if(index!==-1){
        dishes.dishes[index]=updateddish
    }
    fs.writeFileSync("db.json",JSON.stringify(dishes,null,2))
    res.status(200).json(updateddish)
})

app.delete("/deletdishes/:id",(req,res)=>{
    const dishes=fs.readFileSync("db.json","utf-8")
    const id=req.params.id
    const index=dishes.dishes.findIndex(dish=>dish.id==id)
    if(index!==-1){
        dishes.dishes.splice(index,1)
    }
    fs.writeFileSync("db.json",JSON.stringify(dishes,null,2))
    res.status(200).json({message:"Dish deleted successfully"})
}) 

app.get("*",(req,res)=>{
    res.status(404).json({message:"Route not found"})
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})





