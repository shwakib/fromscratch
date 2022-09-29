const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');

//Built In MiddleWare
app.use(express.json()); //POST/PUT/PATCH ->json object ->req.body
app.use(express.urlencoded({ extended: true })); //id=1&&name=Something
app.use(express.static('public'));

//Custom Made middleware
app.use((req, res, next) => {
    console.log("I am middleware 1");
    next();
});
app.use((req, res, next) => {
    console.log("I am middleware 2");
    next();
});
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