var welcomeLabel = document.getElementById("welcome");
var displayEvent = document.getElementById("displayEvent");

var welcomeLabel = document.getElementById("userDisplay");
var displayEvent = document.getElementById("passDisplay");

welcomeLabel.addEventListener("click", function () {
    console.log("Event: click");
    displayEvent.textContent = "Event: clicked"
});

welcomeLabel.addEventListener("mouseover", function () {
    console.log("Event: mouseover");
    displayEvent.textContent = "Event: Mouse Over"
});

welcomeLabel.addEventListener("mouseout", function () {
    console.log("Event: mouseout");
    displayEvent.textContent = "Event: Mouse Out"
});

function validateForm(){
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["password"].value;
    if(x == ""){
        alert("Name must be filled out");
        return false;
    } else{
        console.Log('Username: ${ x } \n Password: ${ y }')
        userDisplay.textContent = x;
        passDIsplay.textContent = y;
        return false;
    }

}