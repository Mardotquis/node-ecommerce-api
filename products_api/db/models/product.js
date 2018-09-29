const mongoose = require('mongoose');

let Product = mongoose.model("Product", {

    title: {
        type: String,
        // required: true
    },
    description: {
        type: String,
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