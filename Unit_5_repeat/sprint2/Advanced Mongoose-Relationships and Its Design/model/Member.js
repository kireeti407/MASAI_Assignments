const mongoose=require("mongoose")

const Member=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:true,
        require:true
    },
    borrowedBooks:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"book"
        }
    ]
})
const MEMBER=mongoose.model("member",Member)
module.exports=MEMBER