const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router
  .route('/')
  .get(ordersController.getAllOrders)
  .post(ordersController.addOrder)
  .delete(ordersController.deleteOrder);

module.exports = router;
