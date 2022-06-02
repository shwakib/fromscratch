let searchbtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui=new UI();

searchbtn.addEventListener("click", (e) => {
    let userText = searchUser.value;
    console.log('abcd');
    console.log(userText);
    if (userText != '') {
        fetch('https://api.github.com/users/'+userText)
        .then(result =>result.json())
        .then(data =>{
            console.log(data);
            if(data.message=='Not Found')
            {
                //Show alert
                ui.showAlert("User Not Found!","alert alert-danger");
            }
            else
            {
                //Show Profile
                console.log("data recieved");
                ui.showProfile(data);
            }
        })
    }
    else{
        //clear Profile
        ui.clearProfile();
    }
});