// // import mongoose 
import mongoose from "mongoose";
 
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
export default mongoose.model('Products', Product);


// import mongoose from 'mongoose';

// const Product = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: String,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     }
// })

// export default mongoose.model('product', Product)