//regular expression

// let re; //Conflicts with
// let str; //Conflicts with

// re=/hello/;
re = /hello/i; //i=case insentitive

console.log(re);
console.log(re.source);

str = "Hello World";
str = "Again Hello World";
str = "Hell World";
str = "sdsHellosds World";
str = "Again Hello World Hello";
// str = "World";

//execution exec()-Return result in an array or null
let result = re.exec(str);

//test()-true/false
result = re.test(str);

//match()-Return result in an array or null
result = str.match(re);

//search() - Return index of the first match or -1
result = str.search(re); //If gets then the index or not getting then -1

//replace()- Return new String
result = str.replace(re, "Hi"); //Again Hi World Hello

console.log(result);

let re;
let str;

//Literal Character
re = /hello/i;
str = "Hello World";
// str = "Again Hello World";
// str='Hello hello';
str = 'Hello';
str = 'Hallo';
str = 'Hllo';
str = 'H llo';
str = 'Hillo';
str = 'Hilo';
// str='H33323llo';
str = "hllo";
str = "hllo";
str = "hello?";

//Meta Characters
re = /^hello/i; //Must start with
re = /hello$/i; //must end with
re = /rld$/i;
re = /^Hello$/i; //Must start & end with
re = /^h.llo$/i; //Matches any one character in place of .
re = /h*llo/i; //0 or more times
re = /he?llo/i;
re = /he?a?llo/i; //Optional (here e is optional)
re = /hello\?/i; //escaping (if needs to match ?)

//Character Set using Brackets []
re = /h[ea]llo/; //Must be one of them inside brackets
re = /[HA]ello/i;
re = /[^ha]ello/;//anything except those inside brackets
re = /^[ha]ello/;//Must start with H or A
re = /[a-z]ello/; //Start with (a-z) range
re = /^[A-Z]/; //First letter must be uppercase
re = /^[a-z]/;
re = /[A-Za-z]/; //Any character upper or lower
re = /[0-9]ello/;//Number at start
re = /^[0-9]ello/;// Must start with number
re = /[^0-9]ello/;//Not digit
re = /[0-9][0-9][0-9]ello/;//2 characters at starting

str = "hllo";
// str="heallo";
str = "Rello";
str = "hello";
str = "111ello";

//Quanrifier- Braces{}
re = /el{2}o/; //2 L needed must {n times}
// re=/el{3}o/;
re = /hel{2,5}o/; //Range
re = /hel{2,}o/;

str = "hello";

//Parentheses () -Grouping
re = /^([0-9]){5}/; //Checks upto 5 positions for number minimum 5 ta digit number hoite hobe
re = /^01[0-9]{9}$/; //Bangladeshi number checking
re = /^\+8801[0-9]{9}$/;//with country code & \ for using signs
re = /^([0-9]x){3}/

str = "32344354353elllo";
str = "+8801714049024";
str = "2x3x7x";

//Shorthand Character Classes -CHecks in full string
re = /\w/; //Word Character- alpha numeric or _
re = /\w+/;//One or more
re = /\W/; //Non Word Character
re = /\W+/; //One or more non word character
re = /\d/; //checks digit
re = /\d+/; //one or more checks digit
re = /\D/; //checks non digit
re = /\s/; //checks white space
re = /\S/; //checks non white space
re = /Hello\b/; //Word boundary
re = /\bHello\b/; //Word boundary

str = "+8801714049024";
str = "(*&^j4";
str = "jkdbsdjvkbsdvkjsd";
str = "008 08 0";
str = " ";
str = "Hello 78 World";

//assertions
re = /x(?=y)/; // Matches x only if x is before y
re = /x(?!y)/;

str = "dsgsdgyxdsgdsggdsg";

console.log(re.exec(str));

reTest(re, str);
function reTest(re, str) {
    if (re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' does not matches '${re.source}'`);
    }
}