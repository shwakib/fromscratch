const router = require('express').Router();
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');
const { createCoupon } = require('../controllers/couponController');

router.route("/")
    // .get([authorize,admin])
    .post([authorize, admin], createCoupon);

module.exports = router;