const POST = require("../model/post.model")

const comments=async (req, res) => {
    try{
        let d=req.body
        let id=req.params.id
        await POST.findByIdAndUpdate(id, {$push:{comments:d}}, {new:true})
        res.status(200).send({Msg:"Comment added successfully",d})

    }
    catch(err){
        res.status(400).send({Msg:"Something went wrong"})
    }
}

const upvotes=async(req, res)=>{
    try{
        let id=req.params.id
        await POST.findByIdAndUpdate(id, {$inc:{upvotes:1}}, {new:true})
        res.status(200).send({Msg:"Post upvoted successfully"})
    }
    catch(err){
        res.status(400).send({Msg:"Something went wrong"})
    }
}

module.exports={ 
    comments,
    upvotes
}

