const express = require("express");
const app = express();

app.get("/home", (req, res) => {
    res.send("This is home page");
});
app.get("/contact", (req, res) => {
    res.send("Contact us at contact@contact.com");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});