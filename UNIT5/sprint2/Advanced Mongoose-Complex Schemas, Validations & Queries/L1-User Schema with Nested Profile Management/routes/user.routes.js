const express = require("express");

const User = require("../model/userprofile.model");

const userRouter = express.Router();

userRouter.post("/add-user", async(req, res) => {
    const { name, email, password, profiles } = req.body;
    const user = await User.create({ name, email, password, profiles });
    res.status(201).json(user);
})

userRouter.post("/add-profile/:id", async(req, res) => {
    const {profileName, url} = req.body;
    const user = await User.findById(req.params.id);
    user.profiles.push({profileName, url});
    await user.save();
    res.status(201).json(user);
})

userRouter.get("/get-user", async(req, res) => {
    const {profileName} = req.query;
    const users = await User.find({profiles:{$elemMatch:{profileName}}} );
    res.status(200).json(users);
})

userRouter.get("/get-by-nameProfile", async(req, res) => {
    const {name, profileName} = req.query;
    const user = await User.findOne({name, profiles:{$elemMatch:{profileName}}});
    res.status(200).json(user);
})

userRouter.get("/get-by-profileName", async(req, res) => {
    const {profileName} = req.query;
    const user = await User.find({profiles:{$elemMatch:{profileName}}});
    res.status(200).json(user);
})

userRouter.put("/update-profile/:id/:profileName", async(req, res) => {
    const {id, profileName} = req.params;
    const {url} = req.body;
    const user = await User.findByIdAndUpdate(id,{$set:{profiles:{$elemMatch:{profileName, url}}}});
    res.status(200).json(user);
})

userRouter.delete("/delete-profile/:id/:profileName", async(req, res) => {
    const {id, profileName} = req.params;
    const user = await User.findByIdAndDelete(id,{$pull:{profiles:{$elemMatch:{profileName}}}});
    res.status(200).json(user);
})

module.exports = userRouter;



