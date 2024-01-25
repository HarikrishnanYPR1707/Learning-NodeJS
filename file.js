// File handling
const fs = require("fs");

// Synchronous Call
// fs.writeFileSync("./text.txt", "Hey There");

// Asynchronous Call
fs.writeFile("./text.txt", "Hey There this is async", (err) => {});
