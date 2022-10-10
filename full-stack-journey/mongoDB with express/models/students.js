const { Schema, model } = require('mongoose');

const Student = model("Student", Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 6 },
    hobbies: {
        type: Array,
        of: String,
        validate: {
            validator: (value) => value.length > 0,
            message: "Hobbies can't be empty"
        }
    }
}));

exports.Student = Student;