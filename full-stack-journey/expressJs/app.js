const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("Hello from expressJs!");
})

app.get('/another', (request, response) => {
    response.send("I am another response!");
})

app.get('/courses', (request, response) => {
    response.send(JSON.stringify(["Bangla", "English"]));
})

const port = 3000;
app.listen(port, () => {
    console.log('Listening on port 3000!');
})