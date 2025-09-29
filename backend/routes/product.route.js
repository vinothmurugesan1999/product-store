import express from "express";
import {
  deleteProduct,
  editProduct,
  getProducts,
  updateProducts,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", updateProducts);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

export default router;
