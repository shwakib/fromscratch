require('dotenv/config');
const app = require('./app');
const Mongoose = require('mongoose');

Mongoose.connect(process.env.MONGODB_URL_LOCAL)
    .then(() => console.log("Connected to Database successfully!"))
    .catch(err => console.error("Connection Failed!!"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
})
