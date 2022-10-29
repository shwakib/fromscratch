const router = require('express').Router();
const { getProducts, getProductsById, updateProductsById, createProduct, getPhoto, filterProducts } = require('../controllers/productController');
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');

router.route('/')
    .post([authorize, admin], createProduct)
    .get(getProducts);

router.route('/:id')
    .get(getProductsById)
    .put([authorize, admin], updateProductsById)

router.route('/photo/:id')
    .get(getPhoto);

router.route('/filter')
    .post(filterProducts);

module.exports = router;