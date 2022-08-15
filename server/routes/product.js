const {
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts
} = require('../controllers/product.js')
const upload = require('../middleware/uploadImage')

const router = require("express").Router();

//CREATE
router.post("/", upload.single('img'),createProduct);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateProduct);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

//GET PRODUCT
router.get("/find/:id", getProduct);

//GET ALL PRODUCTS
router.get("/", getAllProducts);

module.exports = router;
