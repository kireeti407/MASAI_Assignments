const mongoose= require('mongoose')

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength: 3
    }
    
})