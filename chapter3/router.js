const http = require("http");
const url=require("url");//url module load
http.createServer((req,res)=>{
    const path=url.parse(   req.url,true).pathname;//pathname assign
    res.setHeader("Content-Type","text/html");

    if(path=="/user"){
        res.end("[user] name:andy, age:30");//user result value setting
    }else if(path=="/feed"){
        res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>`)//feed result value set
    }else{
        res.statusCode=404;
        res.end("404 page not found");//result value error message

    }
})
.listen(3000,()=>console.log("let make router"));


