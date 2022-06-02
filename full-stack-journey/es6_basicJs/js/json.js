//JSON format
var student = {
    "name": "Rahim",
    "age": 26,
    "hometown": "Dhaka"
};

//JS format
var student = {
    name: "Rahim",
    age: 26,
    hometown: "Dhaka"
};

//JS to JSON
var student_json = JSON.stringify(student);
console.log(student_json);

//JSON to JS
var student_js = JSON.parse(student_json);
console.log(student_js);

//Value Declaration
var person = {
    name: "Rahim", //String
    age: 26, //Number
    hometown: "Dhaka",
    married: false, //Boolean
    dob: "1995-05-12", //Date
    test_null: null, //null
    test_undefined: undefined, //Undefined
    greet: function () { //function
        console.log(`Hello ${this.name}`);
    }
};
person.greet();

var person_JSON = JSON.stringify(person);
console.log(person_JSON);

//Warning
var person1 = {
    "name": "Rahim_P1",
    "age": 25,
    "hometown": "Dhaka",
    "married": false
};

var person2 = {
    name: "Karim",
    age: 35,
    hometown: "Chittagong",
    married: true
};

var person1_JSON = JSON.stringify(person1);
console.log(person1_JSON);

var person1_JS = JSON.parse(person1_JSON);
console.log(person1_JS);

console.log(person1.name);
console.log(person1.age);
console.log(person1.hometown);

//Array & iteration
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        // console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "/full-stack-journey/es6_basicJs/js/datafiles/data.json", true);
xmlhttp.send();

function jsonData(json_obj) {
    console.log(json_obj);
    var new_data = JSON.parse(json_obj);
    console.log(new_data);

    for (x in new_data.persons) {
        var persons = new_data.persons;
        console.log(persons[x]);
        for (y in persons[x]) {
            console.log(persons[x][y]);
        }
    }
}