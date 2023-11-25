const fs = require("fs");
const express = require("express");
const app = express();

// read file using createreastream()
// takes path and uptional object{encode:utf8} to convert buffer to string
// call on() event and pass a 'data' event listener and callback
//funct that takes a data
const read_stream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});

// write into stream buffer
const writeIntoStream = fs.WriteStream("./docs/blog4.txt");
read_stream.on("data", (chunk) => {
  console.log("-----------NEW DATA---------");
  console.log(chunk);
  //use .write() on writeIntoStream
  writeIntoStream.write("\nNEW CHUNCK\n");
  writeIntoStream.write(chunk);
});

// can use pipe() on readstream and pass writestream as param
// this will read and write into blog4.
read_stream.pipe(writeIntoStream);

app.listen(4000, () => {
  console.log("you are listening to port ", 4000);
});
