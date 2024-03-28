const { error } = require("console")
const fs =require("fs")

//& if file is not avaliable then create file and write the data to the file
fs.writeFile("demo.txt","hello node js","utf-8",err=> 
{
    if(err)
        throw Error(err)
    else
        console.log("write data successfully...!")
})


//& if file is already exist then write the data to the file
fs.writeFile("m1.txt","hello node js","utf-8",err=> 
{
    if(err)
        throw Error(err)
    else
        console.log("write data successfully...!")
})