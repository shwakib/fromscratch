const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
const morgan = require('morgan')
//Built In MiddleWare
app.use(express.json()); //POST/PUT/PATCH ->json object ->req.body
if (process.env.NODE_ENV === 'development') {
    console.log("Development Server");
    app.use(morgan('dev'));
}

app.use('/api/students', studentRouter);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.get('/', (request, response, next) => {
    // response.send("Another Response!");
    next();
})

app.get('/', (request, response) => {
    response.send("Hello from expressJs!");
})

module.exports = app;