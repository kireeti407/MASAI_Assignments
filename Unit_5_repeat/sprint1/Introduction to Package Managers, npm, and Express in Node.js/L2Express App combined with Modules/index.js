const express = require("express");
const fs = require("fs");
const os = require("os");

const app = express();

app.get("/test", (req, res) => {
    res.send("Test route is working!");
});

app.get("/readfile", (req, res) => {
    fs.readFile("Data.txt", "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            res.send(data);
        }
    });
});

app.get("/systemdetails", (req, res) => {
    res.send({
        "platform": os.platform(),
        "totalMemory": os.totalmem(),
        "freeMemory": os.freemem(),
        "cpuModel": os.cpus()[0].model,
    })
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 
