const express=require("express")
const fs=require("fs")

const app=express()

app.use(express.json())

app.get("/books",(req,res)=>{
    const books=fs.readFileSync("db.json","utf-8")
    res.status(200).json(books)
})

app.get("/books/:id",(req,res)=>{
    const books=fs.readFileSync("db.json","utf-8")
    const id=req.params.id
    const book=books.books.find(book=>book.id==id)
    res.status(200).json(book)
})

app.get("/books/search",(req,res)=>{
    const books=fs.readFileSync("db.json","utf-8")
    const search=req.query.search
    const filteredbooks=books.books.filter(book=>book.author.includes(search))
    res.status(200).json(filteredbooks)
})

app.post("/addbooks",(req,res)=>{
    const books=fs.readFileSync("db.json","utf-8")
    const newbook={...req.body,id:books.books.length+1}
    books.books.push(newbook)
    fs.writeFileSync("db.json",JSON.stringify(books,null,2))
})

app.put("/updatebooks/:id",(req,res)=>{
    const books=fs.readFileSync("db.json","utf-8")
    const id=req.params.id
    const updatedbook=req.body
    const index=books.books.findIndex(book=>book.id==id)
    if(index!==-1){
        books.books[index]=updatedbook
    }
})

app.delete("/deletebooks/:id",(req,res)=>{
    const books=fs.readFileSync("db.json","utf-8")
    const id=req.params.id
    const index=books.books.findIndex(book=>book.id==id)
    if(index!==-1){
        books.books.splice(index,1)
    }
    fs.writeFileSync("db.json",JSON.stringify(books,null,2))
    res.status(200).json({message:"Book deleted successfully"})
})  

app.use("*",(req,res)=>{
    res.status(404).json({message:"Route not found"})
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})



