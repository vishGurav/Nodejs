const fs=require("fs")

fs.mkdir("public",err=>
{
    if(err)
        throw Error(err)
    else
        console.log("create folder succesfully...!");
})