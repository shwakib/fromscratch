setTimeout(function(){
    console.log("Hello WOrld");
},10000); //-> Used to call function on a time delay

//getPerson will work but due to high waiting time in create person it will not show
var persons=[
    {firstName:"Sifat Hasan",lastName:"Wakib"},
    {firstName:"Maruf",lastName:"Ahmed"}
]

function createPerson(person)
{
    setTimeout(function()
    {
        persons.push(person);
    },4000);
}

function getPerson()
{
    setTimeout(function()
    {
        let output='';
        persons.forEach(function(item)
        {output+=`<li>${item.firstName} ${item.lastName}</li>`})
        document.getElementById("callbackOutput").innerHTML=output;
    },1000);
}

createPerson({firstName:"Rony",lastName:"Chy"});
getPerson();

//Asynchronous Way ->Callback
var persons=[ //->Declaring array
    {firstName:"Sifat Hasan",lastName:"Wakib"},
    {firstName:"Maruf",lastName:"Ahmed"}
]

function createPerson(person,callback)
{
    setTimeout(function()
    {
        persons.push(person);
        callback();
    },2000);
}

function getPerson()
{
    setTimeout(function()
    {
        let output='';
        persons.forEach(function(item)
        {output+=`<li>${item.firstName} ${item.lastName}</li>`})
        document.getElementById("callbackOutput").innerHTML=output;
    },1000);
}
createPerson({firstName:"Rony",lastName:"Chy"},getPerson);

//Promises
var persons=[ //->Declaring array
    {firstName:"Sifat Hasan",lastName:"Wakib"},
    {firstName:"Maruf",lastName:"Ahmed"}
]

function createPerson(person)
{
    let prom=new Promise(function(resolve,reject)
    {
        persons.push(person);
        let error =false;
        if(!error)
        {
            resolve(); 
        }
        else{
            reject('Error! Something got wrong');
        }
    });
    return prom;
}

function getPerson()
{
    setTimeout(function()
    {
        let output='';
        persons.forEach(function(item)
        {output+=`<li>${item.firstName} ${item.lastName}</li>`})
        document.getElementById("callbackOutput").innerHTML=output;
    },1000);
}
createPerson({firstName:"Rony",lastName:"Chy"}).then(getPerson).catch(function(err){
    console.log(err)
});