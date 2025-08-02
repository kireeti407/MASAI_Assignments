const PRODUCT = require("../model/Product")

const addproduct=async(req,res)=>{
    try{
        let product=req.body
        let d=await PRODUCT.create(product)
        res.status(200).json({msg:"Success",d})
    }
    catch(err){
        res.status(400),send({msg:"somthing went wrong"})
    }
}


const getproductb=async(req,res)=>{
    try{
        let d=await PRODUCT.find()
        res.status(200).json({msg:"Success",d})
    }
    catch(err){
        res.status(400),send({msg:"somthing went wrong"})
    }
}

const updproducy=async(req,res)=>{
    try{
        let id=req.params.id
        let product=req.body
        let d=await PRODUCT.updateOne(id,product)
        res.status(200).json({msg:"Success",d})
    }
    catch(err){
        res.status(400),send({msg:"somthing went wrong"})
    }
}

const deleteproduct=async(req,res)=>{
    try{
        let id=req.params.id
        let d=await PRODUCT.deleteOne(id)
        res.status(200).json({msg:"Success",d})
    }
    catch(err){
        res.status(400),send({msg:"somthing went wrong"})
    }
}

module.exports={
    addproduct,
    getproductb,
    updproducy,
    deleteproduct
}