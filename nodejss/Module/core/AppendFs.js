const fs=require("fs")
//& if file is already exist then write the data into end of the exiting data to the file.
fs.appendFile("./demo.txt"," and react js",err=>
{
    if(err)
        throw Error(err)
    else
        console.log("data appened succesfully...!");

})
//& if file is not avaliable then create file and write the data into end of the exiting data to the file
fs.appendFile("./m1.txt"," and react js",err=>
{
    if(err)
        throw Error(err)
    else
        console.log("data appened succesfully...!");

})