const { Schema, model } = require('mongoose');
const { CartItemSchema } = require('./cartItem');

module.exports.Order = model('Order', Schema({
    cartItems: [CartItemSchema],
    transaction_id: {
        type: String,
        unique: true
    },
    address: {
        phone: String,
        address1: String,
        address2: String,
        city: String,
        state: String,
        postcode: Number,
        country: String
    },
    payment_status: {
        type: String,
        enum: ["Pending", "Complete"],
        default: "Pending"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    sessonKey: String
}))