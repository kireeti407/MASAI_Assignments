const GAME = require("../model/game.model")
const PUBLISHER = require("../model/publishr.model")


const addgames=async(req,res)=>{
    try{
        let data=req.body
        // let da=await PUBLISHER.findById(data.publisher)
        let d=await GAME.create(data)
        res.status(201).json({msg:"success",d})
    }
    catch(err){
        res.status(400).send("somthinwent wrong")
    }
}


const getgames=async(req,res)=>{
    try{
       
        let d=await GAME.find().populate()
        res.status(201).json({msg:"success",d})
    }
    catch(err){
        res.status(400).send("somthinwent wrong")
    }
}

const getgamesbyid=async(req,res)=>{
    try{
        let id=req.params.id
        let d=await GAME.find(id).populate()
        res.status(201).json({msg:"success",d})
    }
    catch(err){
        res.status(400).send("somthinwent wrong")
    }
}

const updategame=async(req,res)=>{
    try{
        let id=req.params.id
        let data=req.body
        let d=await GAME.findByIdAndUpdate(id,data).populate()
        res.status(201).json({msg:"success",d})
    }
    catch(err){
        res.status(400).send("somthinwent wrong")
    }
}
const deletegame=async(req,res)=>{
    try{
        let id=req.params.id
        let d=await GAME.findByIdAndDelete(id).populate()
        res.status(201).json({msg:"success",d})
    }
    catch(err){
        res.status(400).send("somthinwent wrong")
    }
}

module.exports={
    addgames,
    getgames,
    getgamesbyid,
    updategame,
    deletegame
}