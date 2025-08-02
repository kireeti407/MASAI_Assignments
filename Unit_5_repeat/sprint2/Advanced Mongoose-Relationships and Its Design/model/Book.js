const mongoose=require("mongoose")

const Book=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Available","borrowed"]
    },
    borrowers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Member"
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const BOOK = mongoose.model("book",Book)

module.exports=BOOK