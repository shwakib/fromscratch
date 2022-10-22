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
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU0M2NiNGUwNDVjYWM4MDg5N2VlMGUiLCJlbWFpbCI6InNpZmF0aGFzYW53YWtpYkBnbWFpbC5jb20iLCJpYXQiOjE2NjY0NjQ5NDgsImV4cCI6MTY2NjQ3NTc0OH0.nuBcRIOtBQgMTJfKHTkJ_cNvplK9DxBgjRE7oIUrMtw",
//     "user": {
//         "id": "63543cb4e045cac80897ee0e",
//         "email": "sifathasanwakib@gmail.com"
//     }
// }