const router = require('express').Router();
const { signIn, signUp, fetchPurchaseHistory } = require('../controllers/userControllers');
const authorize = require('../middlewares/authorize');

router.route('/signup')
    .post(signUp);

router.route('/signin')
    .post(signIn);

router.route('/purchasehistory')
    .post(authorize, fetchPurchaseHistory);

module.exports = router;