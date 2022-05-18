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
// let list=document.getElementsByClassName('sample-class');
// list[0].style.background='red';
// list[0].style.color='white';
// list[0].style.padding='10px';
// list[0].textContent='Hello World';

// // console.log(list[0]);

// //getElementsByTagName
// listTag=document.getElementsByTagName('li');
// listTag=document.querySelector('ol').getElementsByTagName('li');//individual selection
// let listArray=Array.from(listTag);
// listArray.forEach(function(item)
// {
//     console.log(item);
// })

// console.log(listTag);

// //document.querySelectorAll()
// //id-> #
// //class-> .
// //tag -> nothing

// let listList=document.querySelectorAll('ul li');
// let listListArray=Array.from(listList);
// listListArray.forEach(function(item)
// {
//     console.log(item);
// })

// console.log(listList);

// //Odd
// let liOdd=document.querySelectorAll('li:nth-child(odd');
// let liEven=document.querySelectorAll('li:nth-child(even');
// liOdd.forEach(function(item)
// {
//     item.style.background='grey';
//     item.style.color='white';
//     // console.log(item);
// })
// liEven.forEach(function(item)
// {
//     item.style.background='red';
//     item.style.color='white';
//     // console.log(item);
// })

// console.log(liOdd);
// console.log(liEven);

//Traversing

// let val;
// let list = document.querySelector('ul');
// let listItem = document.querySelector('ul li:first-child');

// val = list;
// val = listItem;

// //Child Nodes
// val = list;
// val = list.childNodes;
// val = list.childNodes[3];
// val = list.childNodes[3];
// val = list.childNodes[3].nodeName;
// val = list.childNodes[3].nodeType;

//Node Types
// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype

// val = list.children;
// val = list.children[0];
// val = list.children[1];
// // val=list.children[1].textContent='Hello';
// val = list.children[1].children[0];
// val = list.children[1].children[0].href;

// val = list.firstChild;
// val = list.firstElementChild; //Without text node
// val = list.lastChild;
// val = list.lastElementChild;
// val = list.childElementCount;

// val = listItem;
// val = listItem.children;
// val = listItem.parentElement;
// val = listItem.parentNode;
// val = listItem.parentElement.parentNode;

// val = listItem.nextSibling.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;
// val = val.previousElementSibling;

// console.log(val);

// //Adding,creating or replacing elements
// let olItem=document.createElement('li');
// olItem.className="a new another-class";
// olItem.id="new-element";
// olItem.setAttribute('title','A new item');
// olItem.appendChild(document.createTextNode('Javascript'));
// document.querySelector('ol').appendChild(olItem);

// // console.log(olItem);

// let ulItem=document.createElement('li');
// let aItem=document.createElement('a');
// ulItem.className="a new another-class";
// ulItem.id="again new-element";
// // olItem.setAttribute('title','A new item');
// aItem.appendChild(document.createTextNode('SpaceX'));
// aItem.setAttribute('href','https://www.github.com');
// ulItem.appendChild(aItem);
// document.querySelector('ul').appendChild(ulItem);

// console.log(aItem);
// console.log(ulItem);

// //Replace Element
// let newHeading = document.createElement('h1');
// newHeading.appendChild(document.createTextNode('Hi, This is new Heading'));
// newHeading.className='sample-class';

// let oldHeading=document.querySelector('h3');
// let parent=document.querySelector('.container');
// // parent=oldHeading.parentElement;
// parent.replaceChild(newHeading,oldHeading);

// console.log(newHeading);

// //Remove Element
// let listItems = document.querySelectorAll('li');
// let list = document.querySelector('ul');
// // listItems[0].remove();
// // listItems[5].remove();
// listItems = document.querySelectorAll('li');

// // list.removeChild(listItems[5]);

// list.classList.add("test");
// list.classList.add("test-new");
// // list.classList.remove("test-new");
// let val = list.hasAttribute('title');
// list.setAttribute('title', 'New titile');
// val = list.hasAttribute('title');
// list.removeAttribute('title');
// val = list.hasAttribute('title');

// console.log(val);
// console.log(listItems);
// console.log(list);

//Events
// https://www.w3schools.com/JS/js_events_examples.asp
// document.getElementById('clickbtn').addEventListener('click',message);
// document.getElementById('clickbtn').addEventListener('dblclick',message);
// document.getElementById('clickbtn').addEventListener('click', message);
// document.querySelector('.container').addEventListener('click', message);
// document.querySelector('.container').addEventListener('mouseover', message);
// document.querySelector('.container').addEventListener('mousemove', message);
// document.querySelector('.container').style.background = 'grey';

// function message(e)
// {
//     let val=e;
//     val = e.target; // this
//     val = e.target.id;

//     val = e.timeStamp; //milisecond after loading page
//     val = e.type;

//     val = e.clientY; //in which pixel I clicked
//     val = e.clientX;

//     val = e.offsetY;
//     val = e.offsetX;
//     val = this;

//     this.style.background=`#${e.offsetX}`;
//     console.log(val);
// }

document.querySelector('#name').addEventListener('focus',test);
document.querySelector('#name').addEventListener('keyup',test2)

function test(e)
{
    console.log("Focused!");
    this.style.background='grey';
}
function test2(e)
{
    document.getElementById("demo").innerText=this.value;
    //console.log(this.value);
}