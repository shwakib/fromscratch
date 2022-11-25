require('dotenv/config');
const app = require('./app');
const Mongoose = require('mongoose');

global.__basedir = __dirname;

const DB = process.env.MAIN_MONGODB_SERVER.replace('<PASSWORD>', process.env.MONGODB_ATLAS_PASS);

Mongoose.connect(DB)
    .then(() => console.log("Connected to Database successfully!"))
    .catch(err => console.error("Connection Failed!!"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
})