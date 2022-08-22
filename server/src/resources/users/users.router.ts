import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  validate
} from "./users.controller";
import { isAdmin, isLoggedIn, validateUserId } from "./users.validators";

const router = express.Router();
router.post("/", validate, createUser);
router.get("/get", isLoggedIn, isAdmin, getUsers);
router.put("/:id", isLoggedIn, validateUserId, validate, updateUser);
router.delete("/delete/:id", isAdmin, deleteUser, validateUserId);
router.get("/:id", isLoggedIn, isAdmin, validateUserId, getUser);

export default router;
