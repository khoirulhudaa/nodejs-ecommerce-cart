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
});
router.post('/', upload.single('image') , () => {
    saveProduct
});
 
// export router
module.exports = router;