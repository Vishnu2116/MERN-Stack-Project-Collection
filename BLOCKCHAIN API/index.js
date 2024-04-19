import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app=new express();
const port=3000;


app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended:true}));

let token;
const url="https://api.blockchain.com/v3/exchange/tickers/";

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/getdata",async (req,res)=>{
    token=req.body.cryp;
    console.log(token);
    try{
    const response=await axios.get(url+token);
    console.log(response.data);
    res.render("index.ejs",{data:response.data});
     }catch(error){
         
         res.render("index.ejs",{error:"not found"});
     }

});










app.listen(port,()=>{
    console.log(`App successfully running on port ${port}`);
})