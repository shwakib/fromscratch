const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = require('./app');

mongoose.connect(process.env.MONGODB_SERVER)
    .then(() => console.log("Connected to Database successfully"))
    .catch(err => console.error("Connection Failed!!"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})
