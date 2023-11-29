/*refactoring divide router callback function and excuting function*/
const http= require("http");
const url= require("url");
http.createServer((req,res)=>{
    const path=url.parse(req.url,true).pathname;
    res.setHeader("Content-Type","Text/html");

    if(path==="/user"){
        user(req,res);
    }else if(path==="/feed"){
        feed(req,res);
    }else
        notFound(req,res);
})
.listen(3000,()=>console.log("let make router"));

const user=(req,res)=>{
    res.end(`[user]name:andy,age:30`);

};
const feed=(req,res)=>{
res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>`)

};
const notFound=(req,res)=>{
res.statusCode=404;
res.end("404page not found");
}