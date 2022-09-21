const fs = require("fs");

module.exports = (done) => {
    process.stdin.on("data", (data) => {
        const cmd = data.toString().trim();
        if(cmd.includes("cat")){
            const filename = cmd.slice(cmd.indexOf(" ") + 1);
            fs.readFile(filename, (err, data) => {
                if(err){
                    throw err;
                } else {
                    done(data);
                }
            })
    }
})};