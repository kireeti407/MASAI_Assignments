
const express=require('express')

const {
    addgames,
    getgames,
    getgamesbyid,
    updategame,
    deletegame
}=require('../controller/games.controller')

const gamerouter=express.Router()

gamerouter.post('/api/games',addgames)

gamerouter.get('/api/games',getgames)

gamerouter.get('/api/games/:id',getgamesbyid)

gamerouter.put('/api/games/:id',updategame)

gamerouter.delete('/api/games/:id',deletegame)

module.exports=gamerouter