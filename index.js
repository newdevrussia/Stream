const fs = require("fs");
let symbol = '';
let stream = fs.createReadStream('1.txt', { highWaterMark: 1 } );
stream.on('data', (chunk) => {
    symbol = symbol + (+chunk + 1);
 });
 stream.on("end", () => fs.createWriteStream("1.txt").write(symbol));



