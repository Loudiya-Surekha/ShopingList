import express from "express";
import { addItem, getItems, deleteItem, updateItem } from "../controllers/itemController.js";
import {authMiddleware, verifyToken} from "../middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, addItem);
router.get("/", authMiddleware, getItems);
router.delete("/:id", authMiddleware, deleteItem);
router.put("/:id", authMiddleware, updateItem);

export default router;
