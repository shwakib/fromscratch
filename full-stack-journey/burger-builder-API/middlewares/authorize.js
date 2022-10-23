const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    let token = req.header('Authorization');
    if (!token) res.status(401).send("Access Denied. No token provided!");

    try {
        const decoded = jwt.verify(token.split(" ")[1].trim(), process.env.JWT_secret_Key);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(400).send('Invalid Token!');
    }
}