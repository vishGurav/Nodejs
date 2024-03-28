const fs=require("fs")

fs.copyFile("demo1.txt","m2.txt",(err)=>
{
    if(err)
    {
        console.log(err)
    }
        
    else
        console.log("data Copied succesfully...!");
})