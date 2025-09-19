const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const port = 8080;

main().then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/stayease');
}

app.get("/" , (req,res) => {
    res.send("hii i am root");
})

app.listen(port , () => {
    console.log(`Listening to port ${port}`);
})