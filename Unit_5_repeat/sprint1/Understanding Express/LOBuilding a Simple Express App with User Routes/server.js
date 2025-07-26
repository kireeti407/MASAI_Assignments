const express = require("express");

const app = express();

app.get("/users/get", (req, res) => {
  res.status(200).json({
    message: "Users fetched successfully",
    data: [{ id: 1, name: "John Doe", email: "john@example.com" }],
  });
});

app.get("/users/list", (req, res) => {
  res.status(200).json({
    message: "Users fetched successfully",
    data: [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Doe", email: "jane@example.com" },
      { id: 3, name: "Bob Smith", email: "bob@example.com" },
    ],
  });
});



app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
