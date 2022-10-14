const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 20 },
    email: { type: String, required: true, minlength: 8, maxlength: 255, uniqure: true },
    password: { type: String, required: true, minlength: 5, maxlength: 1024 },
    userRole: { type: String, enum: ['user', 'admin'], default: 'user' }
});

userSchema.methods.generateJWT = function () {
    const token = jwt.sign({ _id: this._id, email: this.email, userRole: this.userRole }, process.env.mySecretKey);
    return token;
}

const User = model('User', userSchema);

exports.User = User;