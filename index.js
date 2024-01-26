const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} : New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url) {
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("Hii, I am Harikrishnan Prasannakumar");
                break;
            case "/contact-me":
                res.end("Contact me at hari@example.com");
                break;
            default:
                res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Sever Started!!")
);