const express = require('express');
const router = express.Router();
const db = require('../dbread');

const studentList = (req, res) => {
    db.getDbStudents()
        .then(students => {
            res.send(students);
        })
};

const newStudent = (req, res) => {
    const newStudent = req.body;
    db.getDbStudents()
        .then(students => {
            students.push(newStudent);
            db.insertDbStudent(students)
                .then(data => {
                    res.send(newStudent);
                })
        })
};

const studentDetail = (req, res) => {
    const id = parseInt(req.params.id);
    db.getDbStudents()
        .then(students => {
            const student = students.find(s => s.id === id);
            if (!student) res.status(404).send("No Student found with this ID!");
            else res.send(student);
        });
};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    db.getDbStudents()
        .then(students => {
            const student = students.find(s => s.id === id);
            if (!student) res.status(404).send("No Student found with this ID!");
            else {
                const i = students.findIndex(s => s.id === id);
                students[i] = updatedData;
                db.insertDbStudent(students)
                    .then(msg => res.send(updatedData))
            }
        });
};

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    db.getDbStudents()
        .then(students => {
            const student = students.find(s => s.id === id);
            if (!student) res.status(404).send("No Student found with this ID!");
            const updatedStudents = students.filter(s => s.id !== id);
            db.insertDbStudent(updatedStudents)
                .then(msg => res.send(student))
        });
};

router.route('/')
    .get(studentList)
    .post(newStudent);

router.route('/:id')
    .get(studentDetail)
    .put(updateStudent)
    .delete(deleteStudent);

module.exports = router;