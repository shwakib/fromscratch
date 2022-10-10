const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');
const morgan = require('morgan');

//Built In MiddleWare
app.use(express.json()); //POST/PUT/PATCH ->json object ->req.body

app.use('/api/students', studentRouter);

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