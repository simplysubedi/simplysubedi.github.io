const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!age) {
        age = "age"
    }

    if (!name) {
        name = "person";
    }
    res.send(`Welcome ${name}
    ${age}
    `);
});

app.listen(3000, () => {
    console.log("The server is running in 3000 port")

})
