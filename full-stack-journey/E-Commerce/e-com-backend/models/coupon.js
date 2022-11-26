const { Schema, model } = require('mongoose');

module.exports.Coupon = model('Coupon', Schema({
    code: { type: String, required: true, minlength: 6 },
    percentage: { type: Number, required: true },
    description: { type: String, required: true }
}))