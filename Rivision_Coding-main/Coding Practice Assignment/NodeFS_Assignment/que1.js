const fs = require("fs");

function countLines(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const lines = data.split("\n").length;
    console.log(`Total lines: ${lines}`);
    return lines;
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
}

countLines("sample.txt"); // Replace with your file name
