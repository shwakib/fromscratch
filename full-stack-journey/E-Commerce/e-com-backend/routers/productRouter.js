const router = require('express').Router();
const { getProducts, getProductsById, updateProductsById, createProduct, getPhoto, filterProducts, updateProductCount, postReview, getReviews } = require('../controllers/productController');
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');

router.route('/')
    .post([authorize, admin], createProduct)
    .get(getProducts)
    .put(authorize, updateProductCount)

router.route('/:id')
    .get(getProductsById)
    .put([authorize, admin], updateProductsById)

router.route('/photo/:id')
    .get(getPhoto);

router.route('/filter')
    .post(filterProducts);

router.route('/review/:id')
    .post(authorize, postReview)
    .get(getReviews)

module.exports = router;