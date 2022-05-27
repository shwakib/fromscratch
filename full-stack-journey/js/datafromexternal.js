document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes(e) {
    // alert(jokesnumber);
    let jokesnumber = document.getElementById('number_jokes').value;
    console.log(jokesnumber);
    let xhr = new XMLHttpRequest();
    // xhr.open("GET","http://api.icndb.com/jokes/random/",true); ->Single jokes
    // xhr.open("GET", "http://api.icndb.com/jokes/random/"+jokesnumber+", true"); //->Multiple Jokes
    xhr.open("GET", `http://api.icndb.com/jokes/random/${jokesnumber}`,"true");

    // xhr.onload=function() //-> Single Jokes
    // {
    //     if(this.status==200)
    //     {
    //         let data=JSON.parse(this.responseText);
    //         let joke=data.value.joke;
    //         console.log(joke);
    //         // console.log(data);
    //     }
    // }

    xhr.onprogress=function()
    {
        document.getElementById("set_data").innerHTML="<h3>Loading.........</h3>";
    }

    xhr.onload=function() //-> Multiple Jokes
    {
        if(this.status==200)
        {
            let data=JSON.parse(this.responseText);
            let jokes=data.value;
            console.log(jokes);
            let unorderedlist="<ol>";
            jokes.forEach(function(item){
                console.log(item.joke);
                unorderedlist += `<li>${item.joke}</li>`;
            })
            unorderedlist+="</ol>";
            //console.log(data);
            document.getElementById("set_data").innerHTML=unorderedlist;
        }
    }

    xhr.send();
}