import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error", error.message);
  }
};

export const updateProducts = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(200).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const editProduct = async (req, res) => {
  const ID = req.params.id;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(ID)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid product id" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(ID, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const ID = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(ID)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid product id" });
  }
  try {
    await Product.findByIdAndDelete(ID);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log(`error in deleting product ${error.message}`);
    res.status(500).json({ success: false, message: "server error" });
  }
};
