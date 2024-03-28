//! reading data from one file and Write  to the diff file
 const fs =require("fs")
 fs.readFile("./demo.txt","utf-8",(err,data)=>
 {
    if(err)
        throw Error(err)
    else
    {
        fs.writeFile("m2.txt",data,err=>
        {
            if(err)
                throw Error(err)
        })
    }

 })