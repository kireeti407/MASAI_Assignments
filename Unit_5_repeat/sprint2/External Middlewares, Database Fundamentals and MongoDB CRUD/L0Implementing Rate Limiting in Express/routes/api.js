const express = require('express')

const rateLimit = require('express-rate-limit')

const router = express.Router()

const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 5, 
    message: "Too many requests, please try again later.",
    standardHeaders: true, 
})

router.get('/limited', apiLimiter, (req, res) => {
    res.status(200).json({message: "You have access to this limited endpoint!"})
})

router.get('/public', (req, res) => {
    res.status(200).json({message: "this is a public endpoint"})
})

module.exports = router
