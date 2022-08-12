
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const { 
  createCart,
  updatedCart,
  deleteItemInCart,
  getUserCart,
  getAllCart
} = require('../controllers/cart.js')

const router = require("express").Router();

//CREATE
router.post("/", verifyToken, createCart);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updatedCart);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteItemInCart);

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);

//GET ALL
router.get("/", verifyTokenAndAdmin, getAllCart);

module.exports = router;
