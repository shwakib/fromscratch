const { Coupon } = require('../models/coupon');
const _ = require('lodash');

module.exports.createCoupon = async (req, res) => {
    // const {code,percentage,description}=_.pick(req.body,["code","percentage","description"]);
    const coupon = new Coupon(_.pick(req.body, ["code", "percentage", "description"]));
    const result = await coupon.save();
    return res.status(201).send(result);
}

module.exports.redeemCoupon = async (req, res) => {
    const code = req.body.code;
    const coupon = await Coupon.find({ code: code });
    return res.status(200).send(coupon);
}