const express = require("express");
const router = express.Router();

// Index 

router.get("/" , (req , res) => {
    res.send("get for posts");
})

// Show 

router.get("/:id" , (req , res) => {
    res.send("get for show posts id");
})

// Post 

router.post("/" , (req , res) => {
    res.send("post for posts");
})

// Delete 

router.delete("/:id" , (req , res) => {
    res.send("delete for posts id");
})

module.exports = router;