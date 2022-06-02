document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {
    // console.log("Button Clicked");
    var xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open("GET", "/full-stack-journey/es6_basicJs/js/datafiles/data.txt", true);

    // xhr.onprogress=function() -> Uses for show progression
    // {
    //     console.log(this.readyState);
    // }

    //1st method
    xhr.onload = function () {
        //HTP Status -> 200: OK, 403: Forbidden , 404: Not found
        if (this.status == 200) {
            console.log(this.responseText);
            document.getElementById('set_data').innerHTML = `<h2>${this.responseText}</h2>`;
        }
    }

    //2nd method -> On StatereadyChange
    // xhr.onreadystatechange = function () {
    //     // readyState Values
    //     // 0: request not initialized
    //     // 1: server connection established
    //     // 2: request received
    //     // 3: processing request
    //     // 4: request finished and response is ready
    //     if (this.status == 200 && this.readyState == 4) {
    //         console.log(this.responseText);
    //         document.getElementById('set_data').innerHTML = `<h2>${this.responseText}</h2>`;
    //     }
    // }

    xhr.send();
}