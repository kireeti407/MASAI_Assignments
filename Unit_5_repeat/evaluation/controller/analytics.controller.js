const ORDER = require("../model/order")

const topproducts=async(req,res)=>{
    try {
        let ord=await ORDER.find().sort({products:{quantity:1}}).limit(3)
        res.status(200).json(ord)
    } catch (error) {
        res.status(400).send("somthingwent wrong")
    }
}

module.exports=topproducts