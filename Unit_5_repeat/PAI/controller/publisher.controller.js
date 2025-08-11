const PUBLISHER = require("../model/publishr.model")


const addpublisher=async(req,res)=>{
    try{
        let data=req.body
        let d=await PUBLISHER.create(data)
        res.status(201).json({msg:"success",d})
    }
    catch(err){
        res.status(400).send("somthinwent wrong")
    }
}

const getpublisher=async(req,res)=>{
    try{
        let d=await PUBLISHER.find()
        res.status(201).json({msg:"success",d})
    }
    catch(err){
        res.status(400).send("somthinwent wrong")
    }
}

const getpublisherbyid=async(req,res)=>{
    try{
        let id=req.params.id
        let d=await PUBLISHER.findById(id)
        res.status(201).json({msg:"success",d})
    }
    catch(err){
        res.status(400).send("somthinwent wrong")
    }
}

const updatepublisher=async(req,res)=>{
    try{
        let id=req.params.id
        let data=req.body
        let d=await PUBLISHER.findByIdAndUpdate(id,data)
        res.status(201).json({msg:"successfully updataed",d})
    }
    catch(err){
        res.status(400).send("somthinwent wrong")
    }
}

const deletepublisher=async(req,res)=>{
    try{
        let id=req.params.id
        let d=await PUBLISHER.findByIdAndDelete(id)
        res.status(201).json({msg:"successfully updataed",d})
    }
    catch(err){
        res.status(400).send("somthinwent wrong")
    }
}

module.exports={
    addpublisher,
    getpublisher,
    getpublisherbyid,
    updatepublisher,
    deletepublisher
}