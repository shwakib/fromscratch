const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Accessing environemnt variable
dotenv.config({ path: './config.env' });
const app = require('./app');

// console.log(app.get('env')); //set by express
// console.log(process.env); //set by node

//Connecting MongoDB
mongoose.connect('mongodb://localhost:27017/my-students-1')
    .then(() => console.log("Connected to Database successfully"))
    .catch(err => console.error("Connection Failed!!"));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})