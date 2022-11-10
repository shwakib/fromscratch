const router = require('express').Router();
const { initPayment, ipn, paymentStatusSuccess } = require('../controllers/paymentController');
const authorize = require('../middlewares/authorize');

router.route('/')
    .get(authorize, initPayment);

router.route('/ipn')
    .post(ipn);

router.route('/success')
    .post(paymentStatusSuccess);

module.exports = router;