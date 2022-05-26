let re;
let str;

//Postal Code
re=/^[0-9]{4}$/;

str="3500";

//Phone Number
//01714049000 +8801714049000 8801714049000
re=/^(\+)?(88)?01[0-9]{9}$/;

str="01714049000";

//Email address
//sifat6460@gmail.com
re=/^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;

str="sifat6460@gmail.com";

console.log(re.test(str));