const GAME = require("../model/game.model")


const publishermiddle=async(res,req,next)=>{
    try{
        let data=req.body.publisher
        let d=await GAME.find(data)
        if(d) next()
        else{
            return res.status(203).send("user not found")
        }
    }
    catch(err){
        res.status(400).send("somthing went wrong")
    }
}

module.exports=publishermiddle