const fs=require("fs")

let WriteData=fs.createWriteStream("text,txt")
let ReadData=fs.createReadStream("./demo.txt");
ReadData.pipe(WriteData);