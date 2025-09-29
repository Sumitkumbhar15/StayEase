const express = require("express");
const router = express.Router();

// Index users

router.get("/" , (req , res) => {
    res.send("get for users");
})

// Show users

router.get("/:id" , (req , res) => {
    res.send("get for show users id");
})

// Post users

router.post("/" , (req , res) => {
    res.send("post for users");
})

// Delete users

router.delete("/:id" , (req , res) => {
    res.send("delete for users id");
})

module.exports = router;