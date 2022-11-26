const { Coupon } = require('../models/coupon');
const _ = require('lodash');

module.exports.createCoupon = async (req, res) => {
    // const {code,percentage,description}=_.pick(req.body,["code","percentage","description"]);
    const coupon = new Coupon(_.pick(req.body, ["code", "percentage", "description"]));
    const result = await coupon.save();
    return res.status(200).send(result);
}