const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {
    let token = req.header('Authorization');
    if (!token) return res.status(400).send("Access Denied!!");
    else token = token.split(" ")[1].trim();

    const decoded = await jwt.verify(token, process.env.JWT_secret_Key);
    if (!decoded) return res.status(400).send("Invalid Token");

    req.user = decoded;
    next();
}