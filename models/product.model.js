//Model used to save data into database

const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String, //class of the data
            required: [true, "Please enter product name"], // whether or not it is required
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        },

    },
    {
        timestamps: true //tells us when data is created or updated
    }

);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;