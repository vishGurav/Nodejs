const fs=require("fs")

fs.unlink("m2.txt",(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(" file deleted succesfully...!");

    }
        
})