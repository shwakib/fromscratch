document.getElementById("get_data_fetch").addEventListener("click",getData);

// function getData()
// {
//     fetch('http://api.icndb.com/jokes/random/')
//     .then(function(res){
//         //console.log(res.text());
//         return res.json();
//     })
//     .then(function(data)
//     {
//         console.log(data);
//     })
//     .catch(function(err)
//     {
//         console.log(err);
//     })
// }

//Arrow Function
function getData()
{
    fetch('http://api.icndb.com/jokes/random/')
    .then(res=>/*console.log(res.text())*/res.json())
    .then(data=>console.log(data.value.joke))
    .catch(err=>console.log(err));
}