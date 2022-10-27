const router = require('express').Router();
const { getProducts, getProductsById, updateProductsById, createProduct } = require('../controllers/productController');
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');

router.route('/')
    .post([authorize, admin], createProduct)
    .get(getProducts);

router.route('/:id')
    .get(getProductsById)
    .put(updateProductsById)

module.exports = router;