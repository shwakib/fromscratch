const { Schema, model } = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');

const userSchema = Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 100 },
    email: { type: String, required: true, minlength: 5, maxlength: 255, unique: true },
    password: { type: String, required: true, minlength: 5, maxlength: 1024 },
    userRole: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

userSchema.methods.generateJWT = function () {
    const token = jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        role: this.role,
    }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
    return token;
}

const validateUser = user => {
    const schema = joi.object({
        name: joi.string().min(5).max(100).required(),
        email: joi.string().min(5).max(255).required(),
        password: joi.string().min(5).max(255).required(),
    });
    return schema.validate(user);
}

module.exports.User = model('User', userSchema);
module.exports.validate = validateUser;