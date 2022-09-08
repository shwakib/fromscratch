const area = (r) => 3.14 * r * r;
const cir = (r) => 2 * 3.14 * r;

module.exports.area = area;
module.exports.cir = cir;

//AsyncJS

console.log("Line 1");
const students = getStudents(1);
console.log(students);
console.log("Line 2");

function getStudents(id) {
    setTimeout(() => {
        console.log("Fetching from database...");
        return { id: id, name: "Rahim" }
    }, 2000);
}