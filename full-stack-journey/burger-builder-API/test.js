const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
});

const user = {
    email: "s@gmail.com",
    password: "12345"
}

const { error } = schema.validate(user);
console.log(error.details[0].message);



//Input Data
// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU1MTM2MWM2MTM2Yzk2MTVlMDc5YjIiLCJlbWFpbCI6InNpZmF0aGFzYW53YWtpYkBnbWFpbC5jb20iLCJpYXQiOjE2NjY1MTk5MzcsImV4cCI6MTY2NjUzMDczN30.h70xREvW7sLNn1h7yLyJeEf1VulEZiUqLxKuNtBwwuw",
//     "user": {
//         "id": "63551361c6136c9615e079b2",
//         "email": "sifathasanwakib@gmail.com"
//     }
// }