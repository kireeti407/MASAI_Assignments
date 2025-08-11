const mongoose=require('mongoose')

const Game=new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    genre:{
        type:String,
        enum:['RPG', 'Action', 'Adventure', 'Strategy','Sports']
    },
    releaseDate:{
        type:Date
   },
   publisher:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
   }
})

const GAME=mongoose.model('game',Game)

module.exports=GAME

