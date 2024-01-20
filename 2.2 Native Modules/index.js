const fs = require("fs");

// fs.writeFile("message.txt", "Hello world", (err) => {
//   if (err) throw err;
//   console.log("File saved");
// });

fs.readFile("./message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
