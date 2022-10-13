const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    //Get from request header
    let token = req.header('Authorization');
    if (!token) res.status(401).send("Access denied! No token Provided");
    token = token.split(" ")[1].trim();

    //Verify Token
    try {
        const decoded = jwt.verify(token, process.env.mySecretKey); //If verified, thenname, age,email will be stored in decoded
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(400).send('Invalid token');
    }
}