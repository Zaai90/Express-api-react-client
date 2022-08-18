import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  validate,
} from "./product.controller";
import { validateProductId } from "./product.validators";

const router = express.Router();
router.post("/", validate, createProduct);
router.get("/get", getProducts);
router.put("/:id", validate, validateProductId, updateProduct);
router.delete("/delete/:id", validate, validateProductId, deleteProduct);
router.get("/:id", validate, validateProductId, getProduct);

export default router;
