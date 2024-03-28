const fs=require("fs")

console.log("read");

let ReadData=fs.createReadStream("./demo.txt","utf-8")
ReadData.on("data",(chunk)=>
{
    console.log(chunk);
})
ReadData.on("error",(err)=>
{
    throw Error(err);

})

