const area = (r) => 3.14 * r * r;
const cir = (r) => 2 * 3.14 * r;

module.exports.area = area;
module.exports.cir = cir;

//AsyncJS

console.log("Line 1");

getStudents(2, (student) => {
    console.log(student);
})

console.log("Line 2");

function getStudents(id, callbackFunc) {
    setTimeout(() => {
        console.log("Fetching from database...");
        callbackFunc({ id: id, name: "Rahim" })
    }, 2000);
}