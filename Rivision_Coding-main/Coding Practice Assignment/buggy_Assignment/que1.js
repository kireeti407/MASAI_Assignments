const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save(); // ✅ Added await
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: "Error creating user" });
  }
});

mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => app.listen(3000, () => console.log("Server running on port 3000")))
  .catch(err => console.error(err));
