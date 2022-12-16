const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
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

app.listen(3000);
