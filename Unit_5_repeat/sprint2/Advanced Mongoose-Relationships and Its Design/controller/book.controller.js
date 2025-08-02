const BOOK = require("../model/Book")

const addbook=async (req,res)=>{
    try{
        let book=req.body
        let d= await BOOK.create(book)
        res.status(200).json({msg:"success"})
    }
    catch(err){
        res.status(400).send({msg:"somthing went wrong"})
    }
}
const bookborrowers=async(req,res)=>{
    try{
        let id=req.params.bookId
        let d=await BOOK.findById(id).populate("member")
        res.status(200).json(d)
    }
    catch(err){
        res.status(404).send({msg:"somthing went wrong"})
    }
}
const updatebook=async(req,res)=>{
    try{
        let a=req.params.bookId
        let data=req.body
        let d=await BOOK.findByIdAndUpdate(a,data)
        res.status(200).json({msg:"sucessfully add"})
    }
    catch(err){
        res.status(400).send({msg:"somthing went wrong"})
    }
}

const deletebook=async(req,res)=>{
    try {
        let d=req.params.bookId
        let del=await BOOK.deleteOne(d)
        res.status(200).json({msg:"deleted data",del})
    } catch (error) {
        res.status(400).send({msg:"somthing went wrong"})
    }
}

module.exports={
    addbook,
    bookborrowers,
    updatebook,
    deletebook
}