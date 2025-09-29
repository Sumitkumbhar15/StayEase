const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const ExpressError = require("./utils/ExpressError.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/stayease";

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

main().then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine" , "ejs");
app.set("views" ,path.join(__dirname , "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname , "/public")));

app.get("/" , (req,res) => {
    res.send("hii i am root");
})




app.use("/listings" , listings);

app.use("/listings/:id/reviews" , reviews);

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