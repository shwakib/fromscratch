const express = require('express');
const router = express.Router();
const { Student } = require('../models/students');
const authorize = require('../middlewares/authorize');

const studentList = async (req, res) => {
    const studentsList = await Student.find().sort({ name: 1 });
    res.send(studentsList);
};

const newStudent = async (req, res) => {
    const newStudent = new Student(req.body);
    try {
        const result = await newStudent.save();
        res.send(result);
    }
    catch (err) {
        const errMsgs = [];
        for (field in err.errors) {
            errMsgs.push(err.errors[field].message);
        }
        return res.status(400).send(errMsgs);
    }
};

const studentDetail = async (req, res) => {
    try {
        const studentData = await Student.findById(req.params.id);
        if (!studentData) return res.status(404).send("This Student ID is not found!");
        res.send(studentData);
    }
    catch (err) {
        return res.status(404).send("This Student ID is not found!");
    }
};

const updateStudent = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    try {
        const studentData = await Student.findByIdAndUpdate(id, updatedData, { new: true });
        if (!studentData) return res.status(404).send("This Student ID is not found!");
        res.send(studentData);
    } catch (err) {
        return res.status(404).send("This Student ID is not found!");
    }
};

const deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        const studentData = await Student.findByIdAndDelete(id);
        if (!studentData) return res.status(404).send("This Student ID is not found!");
        res.send(studentData);
    } catch (err) {
        return res.status(404).send("This Student ID is not found!");
    }
};

router.route('/')
    .get(authorize, studentList)
    .post(newStudent);

router.route('/:id')
    .get(studentDetail)
    .put(updateStudent)
    .delete(deleteStudent);

module.exports = router;