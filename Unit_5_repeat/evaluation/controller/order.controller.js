const ORDER = require("../model/order")

const addorders=async (req,res)=>{
    try {
        let d=res.body
        let re=await ORDER.create(d)
        res.status(200).json({msg:"success",re})
    } catch (error) {
        res.status(400).send({msg:"somthing went wrong"})
    }
}

const getorders=async (req,res)=>{
    try {
       
        let re=await ORDER.find()
        res.status(200).json({msg:"success",re})
    } catch (error) {
        res.status(400).send({msg:"somthing went wrong"})
    }
}

const delorder=async (req,res)=>{
    try {
        let id=res.params.id
        let re=await ORDER.deleteOne(id)
        res.status(200).json({msg:"success",re})
    } catch (error) {
        res.status(400).send({msg:"somthing went wrong"})
    }
}

module.exports={
    addorders,
    getorders,
    delorder
}


