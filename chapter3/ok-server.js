//all requset returned server
const http =require("http");
const server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");//set response header value
    res.end("ok");


});
server.listen(3000,()=>console.log("server statr"));//steady connection