const express = require('express');
const { Order } = require('../models/order');
const router = express.Router();

router.route('/')
    .get()
    .post()

module.exports = router;