const PaymentSession = require('ssl-commerz-node').PaymentSession;
const { CartItem } = require('../models/cartItem');
const { Profile } = require('../models/profile');
const { Order } = require('../models/order');
const { Payment } = require('../models/payment');
const path = require('path');
const { Product } = require('../models/product');

module.exports.ipn = async (req, res) => {
    const payment = new Payment(req.body);
    const tran_id = payment['tran_id'];
    if (payment['status'] === 'VALID') {
        const order = await Order.updateOne({ transaction_id: tran_id }, { payment_status: 'Complete' });
        const cartObjects = await Order.findOne({ transaction_id: tran_id });
        cartObjects.cartItems.map(async (item, i) => await Product.updateOne({ _id: item.product._id }, { soldUnit: item.count }));
        /*console.log(item.product._id, item.price, item.quantity, item.count, i)*/
        await CartItem.deleteMany(order.cartItems);
    } else {
        await Order.deleteOne({ transaction_id: tran_id });
    }
    await payment.save();
    return res.status(200).send("IPN");
}

module.exports.initPayment = async (req, res) => {
    const userId = req.user._id;
    const cartItems = await CartItem.find({ user: userId });
    const profile = await Profile.findOne({ user: userId });

    const { address1, address2, city, state, postcode, country, phone } = profile;

    const total_amount = cartItems.map(item => item.count * item.price).reduce((a, b) => a + b, 0);
    const total_item = cartItems.map(item => item.count).reduce((a, b) => a + b, 0);
    const tran_id = '_' + Math.random().toString(36).substring(2, 9) + (new Date()).getTime();

    const payment = new PaymentSession(true, process.env.STORE_ID, process.env.STORE_PASSWORD);

    payment.setUrls({
        success: "https://safe-ocean-93615.herokuapp.com/api/payment/success", // If payment Succeed
        fail: "yoursite.com/fail", // If payment failed
        cancel: "yoursite.com/cancel", // If user cancel payment
        ipn: "https://safe-ocean-93615.herokuapp.com/api/payment/ipn", // SSLCommerz will send http post request in this link
    });

    // Set order details
    payment.setOrderInfo({
        total_amount: total_amount, // Number field
        currency: "BDT", // Must be three character string
        tran_id: tran_id, // Unique Transaction id
        emi_option: 0, // 1 or 0
        // multi_card_name: "internetbank", // Do not Use! If you do not customize the gateway list,
        // allowed_bin: "371598,371599,376947,376948,376949", // Do not Use! If you do not control on transaction
        // emi_max_inst_option: 3, // Max instalment Option
        // emi_allow_only: 0, // Value is 1/0, if value is 1 then only EMI transaction is possible
    });

    // Set customer info
    payment.setCusInfo({
        name: req.user.name,
        email: req.user.email,
        add1: address1,
        add2: address2,
        city: city,
        state: state,
        postcode: postcode,
        country: country,
        phone: phone,
        fax: phone,
    });

    // Set shipping info
    payment.setShippingInfo({
        method: "Courier", //Shipping method of the order. Example: YES or NO or Courier
        num_item: total_item,
        name: req.user.name,
        add1: address1,
        add2: address2,
        city: city,
        state: state,
        postcode: postcode,
        country: country,
    });

    // Set Product Profile
    payment.setProductInfo({
        product_name: "Computer Test",
        product_category: "General",
        product_profile: "general",
    });

    const response = await payment.paymentInit();
    let order = new Order({ cartItems: cartItems, user: userId, transaction_id: tran_id, address: profile })
    if (response.status === 'SUCCESS') {
        order.sessionKey = response['sessionkey'];
        await order.save();
    }
    return res.status(200).send(response);
}

module.exports.paymentStatusSuccess = async (req, res) => {
    return res.status(200).sendFile(path.join(__basedir + "/public/success.html"));
}