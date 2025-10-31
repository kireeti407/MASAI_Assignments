const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // ✅ ensures the returned document is updated
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Error updating user" });
  }
});

mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => app.listen(3000, () => console.log("Server running on port 3000")))
  .catch(err => console.error(err));
