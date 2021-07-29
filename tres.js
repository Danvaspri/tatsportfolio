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
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function tres() {
    for (let j = 0; j < 345600; j++) {
        await sleep(250);
        console.log(j);
        const req = https.request(options);
        req.on("data", (d) => {
            console.log(d);
        });

        req.on("error", (e) => {
            console.log(e);
        });
        req.end();
    }
}

tres();
