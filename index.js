const express=require("express");
const path=require("path");
const ejs=require("ejs")
const HomeRouter=require("./route/HomeRouter")

const app=express();
const port=8000;


app.use(HomeRouter)
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))





app.listen(port,()=>{
    console.log(`Server is started at port ${port}`);
})