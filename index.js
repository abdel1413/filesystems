const express = require("express");
const app = express();
const fs = require("fs");
const readStream = require("./readStream");

const PORT = 3020 || 3000;

app.listen(PORT, () => {
  console.log("you are listening to " + PORT);
});

//create a dir if it doesn't exist
//takes two params (nameof dir, callback)
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    console.log("something went wrong");
  });
} else {
  fs.rmdir("./assets", (err) => {
    err ? console.log(err) : console.log("directory removed");
  });
}

//read file
//takes two params (path, callback)
fs.readFile("./docs/file.txt", (er, data) => {
  if (er) console.log(er);
  console.log("data as buffer: ", data);
  console.log("data converted to string:", data.toString());
});

//write text into file
//if file doesn't exist, one is created
// takes three params (path, text to insert, callback)
const textToInsert = "this is the inserted text";
fs.writeFile("./docs/file.txt", textToInsert, (err) => {
  if (err) console.log(err);
  console.log("text is added to file");
});

//delete file
//takes two param (path, callback)
//use unlink() to delete a file
if (fs.existsSync("./docs/fileToDel.txt")) {
  fs.unlink("./docs/fileToDel.txt", (er) => {
    if (er) console.log(er);
    console.log("successfully deleted");
  });
}
console.log("readin stream", readStream.read_stream);
