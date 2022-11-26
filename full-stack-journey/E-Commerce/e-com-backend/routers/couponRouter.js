const router = require('express').Router();
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');
const { createCoupon, redeemCoupon } = require('../controllers/couponController');

router.route("/")
    // .get([authorize,admin])
    .post([authorize, admin], createCoupon);

router.route("/redeem")
    .post(authorize, redeemCoupon);

module.exports = router;