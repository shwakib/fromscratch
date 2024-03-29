//class ES6
let person1 =
{
    firstname: "Fazle",
    lastname: "Rahat",
    dob: "11-13-1995",

    fullname: function () {
        console.log(`${this.firstname}${this.lastname}`);
    }
}

let person2 =
{
    firstname: "Moin",
    lastname: "Ali",
    dob: "11-13-2001",

    fullname: function () {
        console.log(`${this.firstname}${this.lastname}`);
    }
}

console.log(person1);
console.log(person2);

class Person //class name's first word should be in capital
{
    constructor(fname, lname, bday) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = bday;
    }

    //setting up method
    calculateAge() {
        let birthday = new Date(this.dob);//converting dob to date & save into birthday
        // console.log(birthday);
        let diff = Date.now()/*return milisecons till now from 1970*/ - birthday.getTime()/*calculate milisecond since 1970*/;
        // console.log(Date.now());
        // console.log(diff);
        let ageDate = new Date(diff);
        // console.log(ageDate.getUTCFullYear());//return the year of any date
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    fullname() {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}

let person3 = new Person("Fazle", "Rabbi", "04-27-1998");
let person4 = new Person("Moin", "Ali", "04-27-1997");
let person5 = new Person("Maruf", "Ahmed", "04-27-1999");
console.log(person3.calculateAge());
console.log(person4.calculateAge());
console.log(person5.calculateAge());
console.log(person3.fullname());
console.log(person4.fullname());
console.log(person5.fullname());

//SubClass
class Person2 //Parent Class //class name's first word should be in capital
{
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        return `Hello, I Am  ${this.firstname} ${this.lastname}!`;
    }
}

class customer extends Person2 { //Child or Sub-Class
    constructor(fname, lname, phnumber, memcard) {
        super(fname, lname);
        this.phone = phnumber;
        this.memberShip = memcard;
    }

    fullname() {
        console.log(this.firstname, this.lastname);
    }
}
let person6 = new Person2("Maruf", "Ahmed");
console.log(person6);
console.log(person6.greeting());

let customer1 = new customer("Naem", "Hasan", "01714049024", "1234");
console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullname());

//Static Function
class Person3 //Parent Class //class name's first word should be in capital
{
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        console.log(`Hello, I Am  ${this.firstname} ${this.lastname}!`);
    }
    static test() {
        console.log("I am Static!");
    }
}
let person7 = new Person3("Abdur", "Rahman");
console.log(person7.greeting());
console.log(Person3.test());