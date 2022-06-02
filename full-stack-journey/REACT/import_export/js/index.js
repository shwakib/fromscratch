//Import & Export
//import { a, str, arr, hello, obj as xyz, Person } from './component.js'
import Application from './other.js'
import * as all from './component.js'

// console.log(str);
// hello();
// console.log(xyz);
// console.log(a);

// let newPerson = new Person();
// console.log(newPerson);

let newApp = new Application("Some random text");
console.log(newApp);

// console.log(all);
console.log(all.a);
console.log(all.str);
console.log(all.obj);
console.log(all.hello);
let newPerson1 = new all.Person();
console.log(newPerson1);