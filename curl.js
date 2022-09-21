const request = require("request");

module.exports = (done) => {
    process.stdin.on("data", (data) => {
        const cmd = data.toString().trim();
        if(cmd.includes("curl")){
            const link = cmd.slice(cmd.indexOf(" ") + 1);
            request(link, (error, response, body) => {
                if(error){
                    done('error:', error); // Print the error if one occurred
                } else {
                    done('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                    done('body:', body); // Print the HTML for the Google homepage.
                }
            })
    }
})};