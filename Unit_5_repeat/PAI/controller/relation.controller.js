const { model } = require("mongoose")
const GAME = require("../model/game.model")


const getrelation=async(req,res)=>{
    try{
        let publisher=req.body.publisherId
        let d=await GAME.find(publisher)
        res.status(200).json({msg:"Sucess",d})
    }
    catch(err){
        res.status(400).send("somting went wrong")
    }
}

module.exports=getrelation