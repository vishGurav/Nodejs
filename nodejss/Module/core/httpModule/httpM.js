const http=require("http")
 
let server=http.createServer((req,res)=>
{
    // console.log("i am node js");
    // console.log(req.method);

    res.setHeader("content-type","text/html")
    res.statusCode=300;
    res.end("<h1>home page</>")
})


server.listen(4000,(err)=>
{
    if(err)
        throw Error (err)
    else
        console.log("Server is running on Port 4000")
})