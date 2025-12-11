// import mongoose from 'mongoose';


// const ItemSchema = new mongoose.Schema({
// user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// name: { type: String, required: true, trim: true },
// quantity: { type: Number, default: 1 },
// notes: { type: String, default: '' },
// purchased: { type: Boolean, default: false }
// }, { timestamps: true });


// export default mongoose.model('Item', ItemSchema);

import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      default: "1",
    },
    category: {
      type: String,
      default: "General",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Item", itemSchema);
