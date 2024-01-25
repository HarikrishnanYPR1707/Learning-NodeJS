// File handling
const fs = require("fs");

// Synchronous Call
// fs.writeFileSync("./text.txt", "Hey There");

// Asynchronous Call
// fs.writeFile("./text.txt", "Hey There this is async", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// Asynchronous function will expect a Call Back

// fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./text.txt", `${Date.now()}Hey There \n`);

fs.cpSync("./text.txt", "./copy.txt", {});
