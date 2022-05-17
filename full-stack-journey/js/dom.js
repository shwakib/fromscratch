// let val;

// val=this;
// val=window;
// val=window.document;
// val=document;
// val=document.all;
// val=document.all[10];
// val=document.all.length;
// val=document.body;
// val=document.doctype;
// val=document.domain;
// val=document.URL;
// val = document.characterSet;
// val = document.contentType;

// val=document.forms;
// val=document.forms[1];
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].href;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].getAttribute('src');

// links = document.links;
// let linkArr = Array.from(links);

// linkArr.forEach(function(link){
//     console.log(link.getAttribute('href'));
// });

// console.log(links);

// console.log(val);

//Single-Selector
// let val;

// //getting element
// val=document.getElementById("doctitle");
// val=document.getElementById("doctitle").className;

// //changing style
// val=document.getElementById("doctitle").style.background='#333';
// val=document.getElementById("doctitle").style.color='#FFF';
// val=document.getElementById("doctitle").style.padding='10px';
// val=document.getElementById("doctitle").style.display=/*'none'*/'block';

// //Changing content
// val=document.getElementById("doctitle").textContent='New Content';
// val=document.getElementById("doctitle").innerText='Again New Content';
// document.getElementById("doctitle").innerHTML="<i>Again New Title in italic</i>"

// val=document.getElementById("doctitle");
// val.innerText='HAHAHAHAHAHAAHAHAHA';

// //document.QuerySelector()
// val=document.querySelector('#doctitle');
// val=document.querySelector('ol');
// val=document.querySelector('li');
// val=document.querySelector('ul li');//parenting specif
// val=document.querySelector('ol li');//parenting specify
// val.style.background='red';
// val.style.color='white';
// val=document.querySelector('li:last-child');
// val=document.querySelector('li:nth-child(even)').innerHTML="Hello Even";
// val=document.querySelector('li:nth-child(odd)').innerHTML="Hello Odd";

// console.log(val);

//Multi Selector
//getElementsByClassName
let list=document.getElementsByClassName('sample-class');
list[0].style.background='red';
list[0].style.color='white';
list[0].style.padding='10px';
list[0].textContent='Hello World';

// console.log(list[0]);

//getElementsByTagName
listTag=document.getElementsByTagName('li');
listTag=document.querySelector('ol').getElementsByTagName('li');//individual selection
let listArray=Array.from(listTag);
listArray.forEach(function(item)
{
    console.log(item);
})

console.log(listTag);

//document.querySelectorAll()
//id-> #
//class-> .
//tag -> nothing

let listList=document.querySelectorAll('ul li');
let listListArray=Array.from(listList);
listListArray.forEach(function(item)
{
    console.log(item);
})

console.log(listList);

//Odd
let liOdd=document.querySelectorAll('li:nth-child(odd');
let liEven=document.querySelectorAll('li:nth-child(even');
liOdd.forEach(function(item)
{
    item.style.background='grey';
    item.style.color='white';
    // console.log(item);
})
liEven.forEach(function(item)
{
    item.style.background='red';
    item.style.color='white';
    // console.log(item);
})

console.log(liOdd);
console.log(liEven);