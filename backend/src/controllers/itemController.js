// import { validationResult } from 'express-validator';
// import Item from "../models/Item.js";


// export const getItems = async (req, res, next) => {
//     try {
//         const items = await Item.find({ user: req.user.id }).sort({ createdAt: -1 });
//         res.json(items);
//     } catch (err) {
//         next(err);
//     }
// };


// export const createItem = async (req, res, next) => {
//     try {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });


//         const { name, quantity, notes } = req.body;
//         const item = new Item({ user: req.user.id, name, quantity: quantity || 1, notes: notes || '' });
//         await item.save();
//         res.status(201).json(item);
//     } catch (err) {
//         next(err);
//     }
// };


// export const updateItem = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const item = await Item.findById(id);
//         if (!item) return res.status(404).json({ message: 'Item not found' });
//         if (item.user.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });


//         const updates = (({ name, quantity, notes, purchased }) => ({ name, quantity, notes, purchased }))(req.body);
//         Object.keys(updates).forEach((k) => updates[k] === undefined && delete updates[k]);


//         Object.assign(item, updates);
//         await item.save();
//         res.json(item);
//     } catch (err) {
//         next(err);
//     }
// };


// export const deleteItem = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const item = await Item.findById(id);
//         if (!item) return res.status(404).json({ message: 'Item not found' });
//         if (item.user.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });


//         await item.remove();
//         res.json({ message: 'Item deleted' });
//     } catch (err) {
//         next(err);
//     }
// };


import Item from "../models/Item.js";

export const addItem = async (req, res) => {
  try {
    const { name, quantity, category } = req.body;

    const item = await Item.create({
      userId: req.user.id,
      name,
      quantity,
      category
    });

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find({ userId: req.user.id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
