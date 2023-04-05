const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router
  .route('/')
  .get(productsController.getAllProducts)
  .post(productsController.addProduct)
  .patch(productsController.updateProduct)
  .delete(productsController.deleteProduct);

module.exports = router;
