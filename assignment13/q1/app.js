const express = require("express");
const cookieParser = require("cookie-parser");
const addCookieRouter = require("./routes/cookieRoutes");
const app = express();
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use("/", addCookieRouter);

app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("The server is running at port 3000");
});