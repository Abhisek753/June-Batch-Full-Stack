const http=require("http");



const server=http.createServer((req,res)=>{
    // console.log(req.method);
    // console.log("server created for first time");
    res.end("Hello Students");
});

server.listen(5000,()=>{
    console.log("server is running on port 5000");
});
