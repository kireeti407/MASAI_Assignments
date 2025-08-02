const mongoose=require("mongoose")

const Order=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    products:[{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        },
        quantity:{
            type:Number,
            min:1
        }
    }],
    totalAmount:{
        type:Number,
        required:true,
        min:10
    }
})

const ORDER=mongoose.model("order",Order)

module.exports=ORDER
