const ORDER = require("../model/order")
const PRODUCT = require("../model/Product")

const gteproduct=async(req,res)=>{
    try {
        let d=await PRODUCT.find({price:{"$gte":1000}})
        res.status(200).json({msg:"success",d})
    } catch (error) {
        res.status(400).send("somthing went wrong")
    }
}

const getelecle=async(req,res)=>{
    try {
        let d=await PRODUCT.find({category:{"$in":["electronics","clothing"]}})
        res.status(200).json({msg:"success",d})
    } catch (error) {
        res.status(400).send("somthing went wrong")
    }
}

const atloneproduct=async(req,res)=>{
    try {
        let d=await ORDER.find().populate()
        res.status(200).json({msg:"success",d})
    } catch (error) {
        res.status(400).send("somthing went wrong")
    }
}

module.exports={
    gteproduct,
    getelecle,
    atloneproduct
}