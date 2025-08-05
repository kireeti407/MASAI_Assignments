const db = require("./conf/db");
const express = require("express");
const app = express();
const userRoutes = require("./router/user.routes");

db();

app.use(express.json());
app.use("/users", userRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})



