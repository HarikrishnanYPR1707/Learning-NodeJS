const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} : ${req.url} : New Req Received\n`;

  const myUrl = url.parse(req.url);
  console.log(myUrl);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        // alksjdflkjalksjdflkj
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

myServer.listen(8000, () => console.log("Sever Started!!"));
