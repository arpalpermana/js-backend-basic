const fs = require("fs");

const readableStream = fs.createReadStream("./article.txt", {
  highWaterMark: 10,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`${readableStream.read()}\n`);
  } catch (error) {}
});

readableStream.on("end", () => {
  console.log("Done");
});
