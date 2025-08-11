const mongoose=require('mongoose')

const Publisher=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    location:{
        type:String,
    },
    yearEstablished:{
        type:Number,
        min:1950
    }
})

const PUBLISHER=mongoose.model('publisher',Publisher)

module.exports=PUBLISHER

