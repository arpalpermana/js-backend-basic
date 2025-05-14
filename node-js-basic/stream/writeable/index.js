const FS = require("fs");

const myReadStream = FS.createReadStream("./input.txt", {
  highWaterMark: 15,
});

const myWriteStream = FS.createWriteStream("./output.txt");

myReadStream.on("readable", () => {
  try {
    myWriteStream.write(`${myReadStream.read()}\n`);
  } catch (error) {}
});

myReadStream.on("end", () => {
  console.log("Done");
  myWriteStream.end();
});
