debugger;

//when start button is clicked
let startquizbtn = document.querySelector("#startquiz");

startquizbtn.addEventListener("click", function(){
    console.log("start button");
    setInterval(timer, 1000);
})

// timer counts down
timeremaining = 60
function timer(){
    if (timeremaining > 0) {
        timeremaining--;
        console.log(timeremaining);
    }
}

// timer is updated 


// quiz starts
