
const mongoose=require("mongoose")

const posts=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:5
    },
    content:{
        type:String,
        required:true,
        minlength:20
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    tags:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag"
    }],
    upvotes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    comments:[{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        text:{
            type:String,
            required:true,
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    }]
})

const POST=mongoose.model("Post",posts)

module.exports=POST