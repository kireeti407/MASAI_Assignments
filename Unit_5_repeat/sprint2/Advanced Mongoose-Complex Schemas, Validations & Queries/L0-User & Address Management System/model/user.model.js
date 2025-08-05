
const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: [
        {
            street: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
                
            },
            state: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
                default: "India",
            },
            pincode: {
                type: String,
                required: true,
            }
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;

