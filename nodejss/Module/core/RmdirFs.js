const fs=require("fs")

fs.rmdir("public",err=>
{
    if(err)
        throw Error(err)
    else
        console.log("delete folder succesfully...!");
})