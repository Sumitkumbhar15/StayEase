const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

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
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname , "/public")));

app.get("/" , (req,res) => {
    res.send("hii i am root");
})

// Index route

app.get("/listings" ,wrapAsync(async (req , res) => {
    const allListings =await Listing.find({});
    res.render("./listings/index.ejs" , {allListings});
}))

// New route

app.get("/listings/new" , (req , res) => {
    res.render("./listings/new.ejs");
})

// Show route

app.get("/listings/:id" ,wrapAsync(async (req , res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs" , {listing});
}))

// Create route

app.post("/listings" , wrapAsync (async (req , res , next) => {
    if(!req.body.listings){
        throw(new ExpressError(404 , "page not found"))
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");    
}))

// Edit route

app.get("/listings/:id/edit" ,wrapAsync(async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs" , {listing});
}))

// Update route

app.put("/listings/:id" ,wrapAsync(async (req,res) => {
    if(!req.body.listings){
        throw(new ExpressError(404 , "page not found"))
    }
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    res.redirect(`/listings/${id}`);
}))

// Delete route

app.delete("/listings/:id" ,wrapAsync(async (req , res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}))

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

// In Express 5, the "*" pattern is invalid ("*")

app.use((req , res , next) => {             
    next(new ExpressError(404 , "page not found"))
})

// Error handling middleware

app.use((err , req , res , next) => {
    let {statusCode = 500 , message = "Something went wrong"} = err;
    res.render("error.ejs" , {err})
})

app.listen(8080 , () => {
    console.log(`Listening to port 8080`);
})