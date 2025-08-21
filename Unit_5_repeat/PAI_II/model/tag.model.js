const mongoose=require("mongoose")

const tagScheema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
})

const TAG= mongoose.model("tag",tagScheema)

module.exports=TAG