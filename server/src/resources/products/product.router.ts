import express from "express";
import { isAdmin, isLoggedIn } from "../users/users.validators";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  validate
} from "./product.controller";
import { validateProductId, validateProductNotExist } from "./product.validators";

const router = express.Router();
router.post("/", isLoggedIn, isAdmin, validate, validateProductNotExist, createProduct);
router.get("/", getProducts);
router.put("/:id", isLoggedIn, isAdmin, validateProductId, validate, updateProduct);
router.delete("/:id", isLoggedIn, isAdmin, validateProductId, deleteProduct);
router.get("/:id", validateProductId, getProduct);

export default router;
