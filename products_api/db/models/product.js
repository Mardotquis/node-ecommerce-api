const mongoose = require('mongoose');

let Product = mongoose.model("Product", {
    productId: {
        type: Number,

    },
    title: {
        type: String,

    },
    description: {
        type: String,

    },
    price: {
        type: Number,

    },
    productType: {
        type: String,

    },
    productImages: {
        type: String,

    },
    availability: {
        type: String,

    },
    // color: {
    //     type: Array,

    // }


})

module.exports = {
    Product
}