const express=require("express");
const fetch=require("node-fetch");
const app=express();
app.use(express.json());
app.use(express.static("."));
app.post("/chat",async(req,res)=>{
const p1="sk-ant-api03-wU6d99ElC8xAEjWvz44uQnDvgHyV6Hmzgj7eKsFqTS19MW0im_oUZ";
const p2="kar4ZKezNZN922rsC9gSlwoJJD7Z7uzBQ-LL_vUwAA";
try{
const r=await fetch("https://api.anthropic.com/v1/messages",{
method:"POST",
headers:{"content-type":"application/json","x-api-key":p1+p2,"anthropic-version":"2023-06-01"},
body:JSON.stringify(req.body)
});
const d=await r.json();
res.json(d);
}catch(e){res.status(500).json({error:e.message});}
});
app.listen(process.env.PORT||3000);
