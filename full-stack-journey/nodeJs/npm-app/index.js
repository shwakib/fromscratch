const area = (r) => 3.14 * r * r;
const cir = (r) => 2 * 3.14 * r;

module.exports.area = area;
module.exports.cir = cir;

//AsyncJS

console.log("Line 1");

getStudents(2, showStudentInfo);

console.log("Line 2");

function showMarks(marks) {
    console.log(marks);
}

function showCourse(courses) {
    console.log(courses);
    getQuizMarks(courses.courses, showMarks);
}

function showStudentInfo(student) {
    console.log(student);
    getCourses(student, showCourse);
}

function getStudents(id, callbackFunc) {
    setTimeout(() => {
        console.log("Fetching from database...");
        callbackFunc({ id: id, name: "Rahim" })
    }, 2000);
}

function getCourses(student, callbackFunc) {
    setTimeout(() => {
        console.log("Student Courses from database...");
        callbackFunc({ id: student.id, name: student.name, courses: ["Javascript", "Python"] }), 5500
    })
}

function getQuizMarks(courses, callbackFunc) {
    setTimeout(() => {
        console.log("Courses Marks are loading...");
        callbackFunc({ [courses[0]]: 90, [courses[1]]: 85 }), 7000
    })
}