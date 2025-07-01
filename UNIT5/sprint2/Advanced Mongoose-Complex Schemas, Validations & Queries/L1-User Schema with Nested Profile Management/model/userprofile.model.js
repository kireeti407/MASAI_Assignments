const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    profileName: {
        type: String,
        required: true,
        enum: ["fb", "twitter", "github", "instagram"]
    
    },
    url: {
        type: String,
        required: true,
    }
})

const userProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profiles:[profileSchema]
})

const User=mongoose.model("userProfile",userProfileSchema)

module.exports = User;

/*
 {
    "name":"John Doe",
    "email":"john.doe@example.com",
    "password":"123456",
    "profiles":[
        {
            "profileName":"github",
            "url":"https://github.com/john-doe"
        },
        {
            "profileName":"linkedin",
            "url":"https://www.linkedin.com/in/john-doe"
        },
        
}

*/