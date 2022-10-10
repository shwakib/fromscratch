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

//Create Data
async function createStudent() {
    const student = new Student({
        firstName: "Kahim",
        lastName: "Miah",
        dob: new Date("31 December 1998"),
        passed: true,
        hobbies: ["Swimming", "Singing"],
        parents: {
            fatherName: "A",
            motherName: "B"
        },
        subjects: [{ name: "Math", marks: 80 }, { name: "English", marks: 90 }]
    });

    try {
        const data = await student.save();
        console.log(data);
    }
    catch (err) {
        console.log(err._message);
    }
}

// student.save()
//     .then(data => console.log(data))
//     .catch(err => console.log(err._message));
//createStudent();

//Read Data
async function readStudentsData() {
    const studentData = await Student.find().select({ firstName: 1, lastName: 1, hobbies: 1, passed: 1 });
    console.log(studentData);
}
readStudentsData();

//Update Data
async function updateStudentData(id) {
    const studentData = await Student.updateOne({ _id: id }, {
        $set: { passed: true }
    });
    console.log(studentData);
}

// updateStudentData('63431ba62ae73dc62066062a');

//Delete Data
async function deleteStudentData(id) {
    const studentData = await Student.deleteOne({ _id: id });
    console.log(studentData);
}

// deleteStudentData('63431ba62ae73dc62066062a');