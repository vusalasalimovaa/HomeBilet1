import Product from "../models/productModel.js";

export const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    await newProduct.save();

    return res.status(200).send("New product added successfully");
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const findProduct = await Product.findOne({ _id: id });

    if (!findProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json(findProduct);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete({ _id: id });

    if (deletedProduct) {
      return res.status(200).json({
        success: true,
        message: "Product deleted successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Product not deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const patchProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    if (updatedProduct) {
      return res.status(200).json({
        success: true,
        message: "Product updated successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Product not updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const putProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = await Product.findOneAndReplace(
      { _id: id },
      req.body
    );

    if (updatedProduct) {
      return res.status(200).json({
        success: true,
        message: "Product updated successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Product not updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};
