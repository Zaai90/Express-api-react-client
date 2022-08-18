import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  validate,
} from "./product.controller";

const router = express.Router();
router.post("/", validate, createProduct);
router.get("/get", getProducts);
router.put("/:id", validate, updateProduct);
router.delete("/delete/:id", validate, deleteProduct);
router.get("/:id", validate, getProduct);

export default router;
