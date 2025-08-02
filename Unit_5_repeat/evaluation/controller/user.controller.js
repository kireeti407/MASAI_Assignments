const USER = require("../model/User")

const adduser=async (req,res)=>{
    try {
        let d=res.body
        let re=await USER.create(d)
        res.status(200).json({msg:"success",re})
    } catch (error) {
        res.status(400).send({msg:"somthing went wrong"})
    }
}

const getusers=async (req,res)=>{
    try {
        let re=await USER.find()
        res.status(200).json({msg:"success",re})
    } catch (error) {
        res.status(400).send({msg:"somthing went wrong"})
    }
}

module.export={
    adduser,
    getusers
}