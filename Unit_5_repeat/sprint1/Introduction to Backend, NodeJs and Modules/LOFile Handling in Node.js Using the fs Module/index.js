const {readFileData,appendFileData} = require("./fileOperations");
console.log("Initial File Content:");
readFileData();
console.log("\nAppending data... \n");
appendFileData("This is appended data.");
console.log("Updated File Content:");
readFileData()
