const fs = require('fs');

const getDbStudents = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./db.json', 'utf-8', (err, data) => {
            const students = JSON.parse(data);
            resolve(students);
        });
    })
}

const insertDbStudent = (student) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./db.json', JSON.stringify(student), (err) => {
            resolve("Successfully Added");
        })
    })
}

module.exports.getDbStudents = getDbStudents;
module.exports.insertDbStudent = insertDbStudent;