const mongoose=require('mongoose')

const userScheema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["User","Moderator"],
        default:"User"
    }
})

const User=mongoose.model("user",userScheema)

module.exports=User
