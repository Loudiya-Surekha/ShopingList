// import express from 'express';
// import { body, param } from 'express-validator';
// import auth from '../middleware/auth.js';
// import { getItems, createItem, updateItem, deleteItem } from '../controllers/itemController.js';


// const router = express.Router();
// router.use(auth);


// router.get('/', getItems);
// router.post('/', [body('name').isLength({ min: 1 }).withMessage('Name required'), body('quantity').optional().isInt({ min: 1 })], createItem);
// router.put('/:id', [param('id').isMongoId().withMessage('Invalid id')], updateItem);
// router.delete('/:id', [param('id').isMongoId().withMessage('Invalid id')], deleteItem);


// export default router;


import express from "express";
import { addItem, getItems, deleteItem, updateItem } from "../controllers/itemController.js";
// import authMiddleware from "../middleware/auth.js";
import {authMiddleware, verifyToken} from "../middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, addItem);
router.get("/", authMiddleware, getItems);
router.delete("/:id", authMiddleware, deleteItem);
router.put("/:id", authMiddleware, updateItem);

export default router;
