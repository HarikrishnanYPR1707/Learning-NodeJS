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

// fs.cpSync("./text.txt", "./copy.txt", {});

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./text.txt"));

// fs.mkdirSync("my-docs");

fs.mkdirSync("sampledoc/a/b", { recursive: true });



// Blocking and Non-Blocking func./Request 


// Blocking...
// console.log("1");

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);
// console.log("2");


// Non--Blocking...
console.log("1");

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    console.log(result);
});
console.log("2");
console.log("3");
console.log("4");
console.log("5");
