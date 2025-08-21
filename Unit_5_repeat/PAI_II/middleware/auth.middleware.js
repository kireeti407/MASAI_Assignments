require('dotenv').config()
const authmiddleware=(req,res,next)=>{
    try{
        let token=req.headers?.Authorization?.split(' ')[1]
        if(token){
            var decoded = jwt.verify(token, process.env.secreat_key)
            console.log(decoded)
            return res.status(200).send({message:'welcome back'})
        }
        next()
    }catch(err){
       res.status(400).send({msg:"somthing went wrong"})
    }
}

const moderatorMiddleware=(req,res,next)=>{
    try{
        let token=req.headers?.Authorization?.split(' ')[1]
        if(token){
            var decoded = jwt.verify(token, process.env.secreat_key)
            if(decoded.role=="Moderator"){
                next()
                return
            }
            return res.status(400).send({msg:"you are not a moderator"})
        }
    }
    catch(err){
       res.status(400).send({msg:"somthing went wrong"})
    }
}
module.exports={
    authmiddleware,
    moderatorMiddleware
}
