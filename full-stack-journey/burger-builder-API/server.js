const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const app = require('./app');

const DB = process.env.MONGODB_SERVER.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB)
    .then(() => console.log("Connected to Database successfully"))
    .catch(err => console.error("Connection Failed!!"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})
