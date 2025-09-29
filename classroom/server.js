const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser(secretcode));

app.get("/getSignedCookie" , (req , res ) => {
    res.cookie("Made-in" , "India" , {signed: true});
    res.send("cookie sended");
})

app.get("/verify" , (req , res ) => {
    console.log(req.SignedCookies);
    res.send("verified");
})

app.get("/getcookie" , (req , res) => {
    res.cookie("greet" , "namaste");
    res.send("our website store cookie");
})

app.get("/greet" , (req , res) => {
    let {name} = req.cookies;
    res.send(`hii ${name}`);
})

app.get("/", (req, res) => {
    console.dir(req.cookies);
  res.send("app is listening");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
  console.log("listening to port 3000");
});
