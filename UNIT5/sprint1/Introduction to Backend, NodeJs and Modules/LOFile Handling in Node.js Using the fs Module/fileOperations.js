const fs = require("fs");
const readFileData = () => {
    const data = fs.readFileSync("data.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
       return data;
    });
    console.log(data);
}

const appendFileData = (content) => {
    fs.appendFileSync("data.txt", content, (err) => {
        if (err) {
            console.error("Error appending file:", err);
            return;
        }
        return 
    });
}

module.exports = {readFileData,appendFileData}