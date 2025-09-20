const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

const MONGO_URL = "mongodb://127.0.0.1:27017/stayease";

main().then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine" , "ejs");
app.set(path.join(__dirname , "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

app.get("/" , (req,res) => {
    res.send("hii i am root");
})

// Index route

app.get("/listings" ,async (req , res) => {
    const allListings =await Listing.find({});
    res.render("./listings/index.ejs" , {allListings});
})

// New route

app.get("/listings/new" , (req , res) => {
    res.render("./listings/new.ejs");
})

// Show route

app.get("/listings/:id" ,async (req , res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs" , {listing});
})

// Create route

app.post("/listings" ,async (req , res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})

// Edit route

app.get("/listings/:id/edit" ,async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs" , {listing});
})

// Update route

app.put("/listings/:id" ,async (req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    res.redirect(`/listings/${id}`);
})

// Delete route

app.delete("/listings/:id" ,async (req , res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})

// app.get("/testListing" ,async (req , res) => {
//     let sampleListing = new Listing ({
//         title : "Dazzle Villa",
//         description : "Villa that touches your heart by viewing nature",
//         price : 40999,
//         location : "karjat",
//         country : "India"
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful");
// })

app.listen(8080 , () => {
    console.log(`Listening to port 8080`);
})