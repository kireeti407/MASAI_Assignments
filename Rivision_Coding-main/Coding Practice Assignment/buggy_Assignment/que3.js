
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id); // ✅ Added await
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user" });
  }
});

mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => app.listen(3000, () => console.log("Server running on port 3000")))
  .catch(err => console.error(err));
