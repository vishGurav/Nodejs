const fs =require("fs")
 fs.readFile("./demo.txt",(err,data)=>
 {
     if(err)
         throw Error(err)
     else
     {
         //  console.log(data) //& that time show data in buffer format we cant read it..

           //* o/p  <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 20 6a 73 20 61 6e 64 20 72 65 61 63 74 20 6a 73>
  
         //& so we want read data then we use the to string method..
          console.log(data.toString());
         //* o/p : hello node js and react js
     }
        
})
 //& and other option is readfile method we pass 2nd parameter is a option ="utf-8"
 fs.readFile("./demo.txt","utf-8",(err,data)=>
 {
     if(err)
         throw Error(err)
     else
         console.log(data)
        
 })