const fs=require("fs")

fs.rename("./demo.txt","demo1.txt",err=>
{
    if(err)
        throw Error(err)
    else
        console.log("file Renamed succesfully...!");
})