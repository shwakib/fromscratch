const router = require('express').Router();
const { getProducts, getProductsById, updateProductsById, createProduct, getPhoto } = require('../controllers/productController');
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

module.exports = router;