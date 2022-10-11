const { Schema, model } = require('mongoose');

const User = model("User", Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 20 },
    email: { type: String, required: true, minlength: 8, maxlength: 255, uniqure: true },
    password: { type: String, required: true, minlength: 5, maxlength: 1024 }
}));

exports.User = User;