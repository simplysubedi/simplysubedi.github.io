const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("./AddCookie", { data: req.cookies });
});

router.post("/", (req, res) => {
    const { key, value } = req.body;
    res.cookie(key, value);
    res.redirect("/");
});

module.exports = router;