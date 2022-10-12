const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
// const morgan = require('morgan');
const mongoose = require('mongoose');

//Connecting MongoDB
mongoose.connect('mongodb://localhost:27017/my-students-1')
    .then(() => console.log("Connected to Database successfully"))
    .catch(err => console.error("Connection Failed!!"));

//Built In MiddleWare
app.use(express.json()); //POST/PUT/PATCH ->json object ->req.body

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

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})