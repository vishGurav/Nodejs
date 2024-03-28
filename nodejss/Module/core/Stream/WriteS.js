const fs =require("fs")

console.log("node js");

let WriteData=fs.createWriteStream("./demo.txt")
WriteData.write("hello js and R js",(err)=>
{
    if(err)
        throw Error(err)
    else
    {
        console.log("data written succesfully..!")
    }
})
