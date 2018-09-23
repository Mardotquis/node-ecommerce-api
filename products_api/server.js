const fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 8080;
const { mongoose, Product } = require("./db/mongoose");
const { ObjectID } = require('mongodb');



const jsonFile = JSON.parse(fs.readFileSync(__dirname + "/products.json", "utf-8"));

console.log(`PRODUCTS SERVER STARTED, LISTENING ON PORT ${port}`);
let app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get("/products", (request, response) => {
//     response.send(jsonFile.products)
// })

//ADDING A NEW PRODUCT
app.post("/products", (request, response) => {
    var product = new Product({

        productId: request.body.productId,
        title: request.body.title,
        description: request.body.description,
        price: request.body.price,
        productType: request.body.productType,
        productCategory: request.body.productCategory,
        productImages: request.body.productImages,
        availability: request.body.availability
    })

    product.save()
        .then(
            doc => { response.send(doc) },
            e => { response.send(e) }
        )
})
//GETTING PRODUCTS AND SENDING THEM TO REACT APP
app.get("/products", (request, response) => {
    Product.find()
        .then(
            products => { response.send(products) },
            e => { response.send(e) }
        )
})
//GETTING PRODUCTS BY productId
app.get("/products/:id", (request, response) => {
    let insertedId = request.params.id;
    Product.find({
        productId: insertedId
    })
        .then(
            product => {
                if (!ObjectID.isValid) {
                    return response.send("ID NOT FOUND")
                }
                response.send(product)
            }
        ).catch(e => { response.send(e) })
});
//DELETING PRODUCTS BY productId
app.delete("/products/:id", (request, response) => {
    let insertedId = request.params.id;
    Product.findOneAndRemove({
        productId: insertedId
    })
        .then(
            product => {
                if (!insertedId) {
                    return response.send("ID NOT FOUND")
                }
                response.send(product)
            }
        ).catch(e => response.status(400).send(e));
})

app.listen(port);