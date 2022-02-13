import express from "express";
import multer from "multer";

// import controllers
import { 
    getProducts, 
    getProductById, 
    saveProduct, 
    updateProduct,
    deleteProduct, 
} from "../controllers/productController.js";
 
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
router.get('/', getProducts);
// Route get single Product
router.get('/:id', getProductById);
// Route CREATE Product
router.post('/', upload.single('image') , saveProduct);
// Route UPDATE Product
router.patch('/:id', updateProduct);
// Route DELETE Product
router.delete('/:id', deleteProduct);
 
// export router
export default router;