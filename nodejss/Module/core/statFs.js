const fs=require("fs")

fs.stat("demo1.txt",(err,stats)=>
{
    if(err)
        throw Error(err)
    else
        // console.log(stats);
        console.log(stats.isFile());
        console.log(stats.isDirectory());
})