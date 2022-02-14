const express = require("express");
const multer = require("multer");

// import controllers
const { 
    getProducts, 
    saveProduct, 
} =  require("../controllers/productController.js");
 
    // express router
const router = express.Router();

// Upload image with multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})
 
// Route get All Products
router.get('/', (req, res) => {
    getProducts
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
});
router.post('/', upload.single('image') , () => {
    saveProduct
});
 
// export router
module.exports = router;