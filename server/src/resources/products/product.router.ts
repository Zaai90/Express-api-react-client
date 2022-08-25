import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  validate
} from "./product.controller";

const router = express.Router();
router.post("/", validate, createProduct);
router.get("/", getProducts);
router.put("/:id", validate, updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getProduct);

export default router;
