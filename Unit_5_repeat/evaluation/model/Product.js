const mongoose=require("mongoose")

const Product=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["electronics", "clothing", "home", "beauty"]
    },
    inStock:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const  PRODUCT= mongoose.model("product",Product)

module.exports=PRODUCT