const mongoose=require('mongoose')

const DB=async()=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/PAI")
        console.log("DB connect succefully....")
    }
    catch(err){
        console.log("error, db is not connect")
    }
}

module.exports=DB