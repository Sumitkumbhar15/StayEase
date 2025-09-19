const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/stayease";

main().then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/" , (req,res) => {
    res.send("hii i am root");
})

app.get("/testListing" ,async (req , res) => {
    let sampleListing = new Listing ({
        title : "Dazzle Villa",
        description : "Villa that touches your heart by viewing nature",
        price : 40999,
        location : "karjat",
        country : "India"
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful");
})

app.listen(8080 , () => {
    console.log(`Listening to port 8080`);
})