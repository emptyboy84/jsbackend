const express =require ("express");//load express module
const app=express();//express initialize and alssingment
// const port=3000;
app.get("/",(req,res)=>{
  res.set({"Content-Type":"text/html;charset=utf-8"});
  res.end("hello express");
});

app.listen(3000,()=>{//server start
  console.log(`start server: use${3000}`);

});
