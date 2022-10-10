const express = require('express');
const router = express.Router();

const studentList = (req, res) => {

};

const newStudent = (req, res) => {
    const newStudent = req.body;

};

const studentDetail = (req, res) => {
    const id = parseInt(req.params.id);

};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;

};

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);

};

router.route('/')
    .get(studentList)
    .post(newStudent);

router.route('/:id')
    .get(studentDetail)
    .put(updateStudent)
    .delete(deleteStudent);

module.exports = router;