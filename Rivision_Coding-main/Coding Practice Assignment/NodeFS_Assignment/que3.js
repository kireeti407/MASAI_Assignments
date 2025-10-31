const fs = require("fs");

function filterUsers(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(data);
    const filtered = users.filter(user => user.age > 25);
    console.log(filtered);
    return filtered;
  } catch (err) {
    console.error("Error reading or parsing file:", err.message);
  }
}

filterUsers("users.json"); // Replace with your JSON file name

