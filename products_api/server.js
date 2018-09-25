const fs = require('fs'),
    express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    _ = require("lodash"),
    port = 8080,
    { mongoose, Product } = require("./db/mongoose"),
    { ObjectId } = require('mongodb');


console.log(`PRODUCTS SERVER STARTED, LISTENING ON PORT ${port}`);
let app = express();

app.use(cors());
app.use(bodyParser.json());

//ADDING A NEW PRODUCT
app.post("/products", (request, response) => {
    const { productId, title, description, price, productType, productCategory, productImages, availability, color } = request.body;
    var product = new Product({
        productId, title, description, price, productType, productCategory, productImages, availability, color
    });

    product.save()
        .then(
            doc => { response.send(doc) },
            e => { response.send(e) },

        )
})
//GETTING PRODUCTS AND SENDING THEM TO REACT APP
app.get("/products", (request, response) => {
    Product.find()//.find() is going to fetch this WHOLE collection
        .then(
            products => { response.send(products) },//sending the collection back
            e => { response.send(e) }
        )
});
//GETTING PRODUCTS BY productId
app.get("/products/:id", (request, response) => {
    let insertedId = request.params.id;
    Product.findById(insertedId)
        .then(
            product => {
                if (!product) {
                    return response.send("ID NOT FOUND")
                }
                response.send(product)
            }
        ).catch(e => { response.send(e) })
});
//DELETING PRODUCTS BY productId
app.delete("/products/:id", (request, response) => {
    let insertedId = request.params.id;
    Product.findByIdAndRemove(insertedId)
        .then(
            product => {
                if (!product) {
                    return response.status(404).send("ID NOT FOUND")
                }
                response.send(product)
            }
        ).catch(e => response.status(400).send(e));
});
//UPDATE A PRODUCT
app.put("/products/:id", (request, response) => {
    let insertedId = request.params.id;
    let body = _.pick(request.body, ["productId", "title", "description", "price", "productType", "productCategory", "productImages", "availability"]);
    Product.findByIdAndUpdate(insertedId,
        { $set: body }, { new: true })//$set is replacing the value on a field with a specified value
        .then(
            product => {
                if (!product) {
                    return response.status(404).send(e);
                }
                response.send(product)
            }
        ).catch(e => { response.status(400).send(e) })
});

app.listen(port);

