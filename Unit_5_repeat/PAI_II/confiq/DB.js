const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

const DB=async()=>{
    try{
        await mongoose.connect(process.env.mongoDb)
        console.log("DB connected....")
    }
    catch(err){
        console.log("DB is not connected",err)
    }
}

module.exports=DB