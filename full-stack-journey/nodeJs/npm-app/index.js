const area = (r) => 3.14 * r * r;
const cir = (r) => 2 * 3.14 * r;

module.exports.area = area;
module.exports.cir = cir;

//AsyncJS

console.log("Line 1");

getStudents(3).then(students => {
    console.log(students);
    return getCourses(students);
})
    .then(courses => {
        console.log(courses);
        return getQuizMarks(courses.courses);
    })
    .then(marks => {
        console.log(marks);
    })

console.log("Line 2");

function getStudents(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching from database...");
            resolve({ id: id, name: "Rahim" })
        }, 2000);
    });
}

function getCourses(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Student Courses from database...");
            resolve({ id: student.id, name: student.name, courses: ["Javascript", "Python"] }), 5500
        })
    })
}

function getQuizMarks(courses) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Courses Marks are loading...");
            resolve({ [courses[0]]: 90, [courses[1]]: 85 }), 7000
        })
    })
}