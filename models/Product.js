// // import mongoose 
const mongoose = require("mongoose");
 
// // Buat Schema
const Product = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
 
// // export model
module.exports = mongoose.model('Products', Product);