const express = require('express');
const router = express.Router();

const {
  getproducts,
  getproduct,
  postproduct,
  updateproduct,
  deleteproduct
} = require('../controller/product.controller');

// Route definitions
router.get('/', getproducts);
router.get('/:id', getproduct);
router.post('/', postproduct);
router.put('/:id', updateproduct);
router.delete('/:id', deleteproduct);

module.exports = router;
