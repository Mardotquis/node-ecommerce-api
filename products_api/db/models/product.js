const mongoose = require('mongoose');

/* SETTING UP THE PRODUCTS COLLECTION'S SCHEMA */

let Product = mongoose.model("Product", {

    title: {
        type: String,
        trim: true,
        // required: true
    },
    description: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        // required: true
    },
    productType: {
        type: String,

    },
    productImages: {
        type: String,
        trim: true,
        // required: true
    },
    availability: {
        type: String,
        default: "In Stock"
    }



})

module.exports = {
    Product
}