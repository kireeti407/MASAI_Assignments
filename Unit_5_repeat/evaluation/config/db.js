const mongoose=require("mongoose")

const DB=async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/evaluatiion")
        console.log("connected db.....")
    }
    catch(err){
        console.log("Error occured during DB",err)
    }
}

module.exports=DB