const {
  verifyTokenAndAdmin,
} = require("./verifyToken");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts
} = require('../controllers/product.js')
const { uploadImage } = require('../middleware/uploadImage')

const router = require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, uploadImage.single('img') ,createProduct);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateProduct);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

//GET PRODUCT
router.get("/find/:id", getProduct);

//GET ALL PRODUCTS
router.get("/", getAllProducts);

module.exports = router;
