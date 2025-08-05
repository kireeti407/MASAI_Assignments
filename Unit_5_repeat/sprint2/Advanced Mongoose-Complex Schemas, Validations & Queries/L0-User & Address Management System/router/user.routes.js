const express = require("express");
const User = require("../model/user.model");
const userRouter = express.Router();

userRouter.get("/summary", async(req, res) => {
    const users = await User.find();
    res.status(200).json(users);
})

userRouter.post("/", (req, res) => {
    const { name, email, address } = req.body;
    const user = new User({ name, email, address });
    user.save();
    res.status(201).json(user);
})

userRouter.post("/:id/address", async(req, res) => {
    const { id } = req.params;
    const { street, city, state, country, pincode } = req.body;
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    user.address.push({ street, city, state, country, pincode });
    await user.save();
    res.status(201).json(user);
})


module.exports = userRouter;