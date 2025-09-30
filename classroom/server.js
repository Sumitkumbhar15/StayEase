const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine" , "ejs");
app.set("views" ,path.join(__dirname , "views"));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
  }

app.use(session(sessionOptions));
app.use(flash());

app.get("/register" , (req , res) => {
    let { name = "anonymus" } = req.query;
    req.session.name = name;
    req.flash("success" , "user registered succesfully");
    res.redirect("/hello");
    // res.send(`Welcome ${name}`);
})

app.get("/hello" , (req,res) => {
    res.locals.msg = req.flash("success");
    res.render("page.ejs",{name: req.session.name});
})

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`you sent a request ${req.session.count} times`);
// });

// app.get("/test" , (req,res) => {
//     res.send("test successful");
// })

app.listen(3000, () => {
  console.log("listening to port 3000");
});

// const cookieParser = require("cookie-parser");

// app.use(cookieParser(secretcode));

// app.get("/getSignedCookie" , (req , res ) => {
//     res.cookie("Made-in" , "India" , {signed: true});
//     res.send("cookie sended");
// })

// app.get("/verify" , (req , res ) => {
//     console.log(req.SignedCookies);
//     res.send("verified");
// })

// app.get("/getcookie" , (req , res) => {
//     res.cookie("greet" , "namaste");
//     res.send("our website store cookie");
// })

// app.get("/greet" , (req , res) => {
//     let {name} = req.cookies;
//     res.send(`hii ${name}`);
// })

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//   res.send("app is listening");
// });

// app.use("/users", users);
// app.use("/posts", posts);
