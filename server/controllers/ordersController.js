const Order = require('../models/Order');
const Product = require('../models/Product');
const asyncHandler = require('express-async-handler');

// @desc Get all orders
// @route GET /
// @access Private
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().lean();

  if (!orders?.length) {
    return res.status(400).json({ message: 'No orders found' });
  }
  res.json(orders);
});

// @desc Add order
// @route POST /
// @access Private
const addOrder = asyncHandler(async (req, res) => {
  const { name, email, address, phone, message, products } = req.body;

  if (
    !name ||
    !email ||
    !address ||
    !phone ||
    !products ||
    !Array.isArray(products)
  ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const productIds = products.map((product) => product._id);
  const existingProducts = await Product.find({
    _id: { $in: productIds }
  }).lean();

  if (existingProducts.length !== productIds.length) {
    return res.status(400).json({ message: 'Invalid products received' });
  }

  const orderObject = {
    name,
    email,
    address,
    phone,
    products: existingProducts.map((product, index) => ({
      _id: product._id,
      title: product.title,
      price: product.price,
      quantity: products[index].quantity
    }))
  };

  if (message) {
    orderObject.message = message;
  }

  const order = await Order.create(orderObject);
  if (order) {
    res.status(201).json({ message: 'New order added' });
  } else {
    res.status(400).json({ message: 'Invalid data received' });
  }
});

// @desc Delete order
// @route DELETE /
// @access Private
const deleteOrder = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: 'Order ID is required' });
  }

  const order = await Order.findById(id).exec();
  if (!order) {
    return res.status(400).json({ message: 'Order not found' });
  }

  await Order.deleteOne();
  res.json({ message: `Order ${id} was deleted` });
});

module.exports = {
  getAllOrders,
  addOrder,
  deleteOrder
};
