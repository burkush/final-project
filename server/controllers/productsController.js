const Product = require('../models/Product');
const asyncHandler = require('express-async-handler');

// @desc Get all products
// @route GET /
// @access Private
const getAllProducts = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit) || 0;

  const products = await Product.find()
    .sort({ discount: -1 })
    .limit(limit)
    .lean();

  if (!products?.length) {
    return res.status(400).json({ message: 'No products found' });
  }
  res.json(products);
});

// @desc Add product
// @route POST /
// @access Private
const addProduct = asyncHandler(async (req, res) => {
  const {
    title,
    type,
    image,
    price,
    discount,
    rating,
    shortDescription,
    longDescription,
    additionalInfo
  } = req.body;

  if (
    !title ||
    !type ||
    !image ||
    !price ||
    !shortDescription ||
    !longDescription
  ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const duplicate = await Product.findOne({ title }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate product name' });
  }

  const productObject = {
    title,
    type,
    image,
    price,
    shortDescription,
    longDescription
  };

  if (discount) {
    productObject.discount = discount;
  }

  if (rating) {
    productObject.rating = rating;
  }

  if (additionalInfo) {
    productObject.additionalInfo = additionalInfo;
  }

  const product = await Product.create(productObject);
  if (product) {
    res.status(201).json({ message: 'New product added' });
  } else {
    res.status(400).json({ message: 'Invalid data received' });
  }
});

// @desc Update product
// @route PATCH /
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  const {
    id,
    title,
    type,
    image,
    price,
    discount,
    rating,
    shortDescription,
    longDescription,
    additionalInfo
  } = req.body;

  if (
    !id ||
    !title ||
    !type ||
    !image ||
    !price ||
    !shortDescription ||
    !longDescription
  ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const product = await Product.findById(id).exec();
  if (!product) {
    return res.status(400).json({ message: 'Product not found' });
  }

  const duplicate = await Product.findOne({ title }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate product title' });
  }

  product.title = title;
  product.type = type;
  product.image = image;
  product.price = price;
  product.shortDescription = shortDescription;
  product.longDescription = longDescription;

  if (discount) {
    product.discount = discount;
  }

  if (rating) {
    product.rating = rating;
  }

  if (additionalInfo) {
    product.additionalInfo = additionalInfo;
  }

  await product.save();
  res.json({ message: `Product ${id} was updated` });
});

// @desc Delete product
// @route DELETE /
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: 'Product ID is required' });
  }

  const product = await Product.findById(id).exec();
  if (!product) {
    return res.status(400).json({ message: 'Product not found' });
  }

  await product.deleteOne();
  res.json({ message: `Product ${id} was deleted` });
});

module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct
};
