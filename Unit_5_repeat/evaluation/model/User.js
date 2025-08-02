const mongoose=require("mongoose")

const Member=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
   address:{
    type:String,
   },
   createdAt:{
    type:Date,
    default:Date.now()
   }
})
const USER=mongoose.model("user",Member)
module.exports=USER