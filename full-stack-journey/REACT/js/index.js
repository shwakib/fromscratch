let mat = require('date-format');

let time = mat('hh:mm:ss', new Date());
time = mat('dd/MM/yyyy', new Date());

console.log(time);