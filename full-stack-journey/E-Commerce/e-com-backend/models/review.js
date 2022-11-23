const { Schema, model } = require('mongoose');

module.exports.Review = model('review', Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
    productId: { type: Schema.Types.ObjectId, ref: "Product", unique: true, required: true },
    star: { type: Number, required: true, maxlength: 5 },
    comment: { type: String, required: true }
}))