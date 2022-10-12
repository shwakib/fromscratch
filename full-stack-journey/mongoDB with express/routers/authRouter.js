const express = require('express');
const router = express.Router();
const { User } = require('../models/users');
const bcrypt = require('bcrypt');

const authUser = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid e-mail or password");

    const validUser = await bcrypt.compare(req.body.password, user.password);
    if (!validUser) return res.status(400).send("Invalid e-mail or password");

    const token = user.generateJWT();
    res.send({ token: token });
}

router.route('/')
    .post(authUser)

module.exports = router;