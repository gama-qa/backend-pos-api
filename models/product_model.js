import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("product", productSchema);
