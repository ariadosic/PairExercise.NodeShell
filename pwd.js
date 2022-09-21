//regulate the data that comes in
const done = require("./bash");

module.exports = (done) => {
    process.stdin.on("data", (data) => {
        const cmd = data.toString().trim();
        if(cmd === "pwd"){
            done(process.cwd());
    }
})};