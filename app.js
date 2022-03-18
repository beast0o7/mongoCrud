const express = require("express");
const userRoutes= require ("./routes/user");
const connectToMongo= require("./data");



const app=express();
connectToMongo();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/",(req,res)=>{
    res.redirect("/user");
})

app.use("/user",userRoutes);

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });