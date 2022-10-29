const router = require('express').Router();
const { createCartItem, updateCartItem, deleteCartItem, getCartItem } = require('../controllers/cartController');
const authorize = require('../middlewares/authorize');

router.route('/')
    .get(authorize, getCartItem)
    .post(authorize, createCartItem)
    .put(authorize, updateCartItem);

router.route('/:id')
    .delete(authorize, deleteCartItem)

module.exports = router;