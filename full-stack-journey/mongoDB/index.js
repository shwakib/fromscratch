const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-students')
    .then(() => console.log("Connected to Database successfully"))
    .catch(err => console.error("Connection Failed!!"));

//Schema-> Define the shape of documents
const studentSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: String,
    dob: Date,
    entryDate: { type: Date, default: Date.now },
    passed: Boolean,
    hobbies: [String],
    parents: {
        fatherName: String,
        motherName: String
    },
    subjects: [{ name: String, marks: { type: Number, min: 0, max: 100 } }]
})

//Model
const Student = mongoose.model('Student', studentSchema); //Class
const student = new Student({
    firstName: "Sifat Hasan",
    lastName: "Wakib",
    dob: new Date("31 December 1998"),
    passed: true,
    hobbies: ["Swimming", "Singing"],
    parents: {
        fatherName: "A",
        motherName: "B"
    },
    subjects: [{ name: "Math", marks: 80 }, { name: "English", marks: 90 }]
});

student.save()
    .then(data => console.log(data))
    .catch(err => console.log(err._message));