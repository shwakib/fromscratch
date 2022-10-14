module.exports = function (req, res, next) {
    if (req.user.userRole !== "admin") return res.status(403).send('Forbidden');
    next();
}

// "name":"Naem Hasan",
// "email":"naemhasan@gmail.com",
// "password":"123456"
// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ5YjZhY2FlMTkwY2E3MDY4ZDIwNGIiLCJlbWFpbCI6Im5hZW1oYXNhbkBnbWFpbC5jb20iLCJpYXQiOjE2NjU3NzUyNzZ9.UJ-pall6YNQbiiioHAhsHnj4-NJCmTEYt1ghiKgurnU

// {
//     "name":"Rahat",
//     "email":"rahat@gmail.com",
//     "password":"654321"
// }

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ5YjZjZGFlMTkwY2E3MDY4ZDIwNGUiLCJlbWFpbCI6InJhaGF0QGdtYWlsLmNvbSIsImlhdCI6MTY2NTc3NTMwOX0.73-D8dcsMAzWF3VQEyq0MBAJzQNzr2XFovTaMAlBkhY