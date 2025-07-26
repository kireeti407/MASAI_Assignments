const express=require("express")
const fs=require("fs")

const app=express()

app.use(express.json())

app.get("/students",(req,res)=>{
    const students=fs.readFileSync("db.json","utf-8")
    res.status(200).json(students)
})

app.get("/students/search",(req,res)=>{
    const course=req.query.course
    const students=fs.readFileSync("db.json","utf-8")
    const filteredstudents=students.students.filter(student=>student.course.includes(course))
    if(filteredstudents.length===0){
        res.status(404).json({message:"No student found"})
    }
    res.status(200).json(filteredstudents)
})

app.get("/students/:id",(req,res)=>{
    const students=fs.readFileSync("db.json","utf-8")
    const id=req.params.id
    const student=students.students.find(student=>student.id==id)
    res.status(200).json(student)
})

app.post("/addstudents",(req,res)=>{
    const students=fs.readFileSync("db.json","utf-8")
    const newstudent={...req.body,id:students.students.length+1}
    students.students.push(newstudent)
    fs.writeFileSync("db.json",JSON.stringify(students,null,2))
    res.status(201).json(newstudent)
})      

app.put("/updatestudents/:id",(req,res)=>{
    const students=fs.readFileSync("db.json","utf-8")
    const id=req.params.id
    const updatedstudent=req.body
    const index=students.students.findIndex(student=>student.id==id)
    if(index!==-1){
        students.students[index]=updatedstudent
    }
    fs.writeFileSync("db.json",JSON.stringify(students,null,2))
    res.status(200).json(updatedstudent)
})

app.delete("/deletestudents/:id",(req,res)=>{
    const students=fs.readFileSync("db.json","utf-8")
    const id=req.params.id
    const index=students.students.findIndex(student=>student.id==id)
    if(index!==-1){
        students.students.splice(index,1)
    }
    fs.writeFileSync("db.json",JSON.stringify(students,null,2))
    res.status(200).json({message:"Student deleted successfully"})
})

app.use("*",(req,res)=>{
    res.status(404).json({message:"Not student found"})
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})


