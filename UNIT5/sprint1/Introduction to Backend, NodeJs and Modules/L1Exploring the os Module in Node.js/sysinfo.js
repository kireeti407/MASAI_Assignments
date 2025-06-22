const os = require("os");

const SYS=()=>{
    console.log("Architecture:", os.arch());
console.log("Platform:", os.platform());
console.log("CPU Cores:", os.cpus().length);
console.log("CPU Model:", os.cpus()[0].model);
console.log("CPU Speed:", os.cpus()[0].speed);
console.log("Total Memory:", os.totalmem() / 1024 / 1024 / 1024, "GB");
console.log("Free Memory:", os.freemem() / 1024 / 1024 / 1024, "GB");

console.log("Hostname:", os.hostname());
console.log("OS Type:", os.type());
}
 
module.exports = SYS;