const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("./form", { title: "Login Form" });
});

router.post("/result", (req, res) => {
    const { name, age } = req.body;
    // res.send(`Name: ${name} Age: ${age}`);
    res.render("./result", { name, age, title: "Result" });
});
module.exports = router; 