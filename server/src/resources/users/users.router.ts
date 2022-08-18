import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  validate,
} from "./users.controller";

const router = express.Router();
router.post("/", validate, createUser);
router.get("/get", getUsers);
router.put("/:id", validate, updateUser);
router.delete("/delete/:id", validate, deleteUser);
router.get("/:id", validate, getUser);

export default router;
