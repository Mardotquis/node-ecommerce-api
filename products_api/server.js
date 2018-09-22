

const fs = require('fs');
const express = require('express');
const cors = require('cors');

const jsonFile = JSON.parse(fs.readFileSync(__dirname + "/products.json", "utf-8"));
const port = 8080;
console.log(`PRODUCTS SERVER STARTED, LISTENING ON PORT ${port}`);
let app = express();

app.use(cors());

app.get("/products", (request, response) => {
    response.send(jsonFile.products)
})

app.listen(port)