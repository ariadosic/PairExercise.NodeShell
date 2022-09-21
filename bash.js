//output a prompt
const pwdCommand = require("./pwd");
const lsCommand = require("./ls");
const catCommand = require("./cat");
const curlCommand = require("./curl");

process.stdout.write('prompt> ');

//regulate the data that comes in
/*process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if(cmd === "pwd"){
        process.stdout.write(pwdCommand());
    } */

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write("prompt > ");
}


pwdCommand(done);

lsCommand(done);

catCommand(done);

curlCommand(done);

