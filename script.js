debugger;

//when start button is clicked
let startquizbtn = document.querySelector("#startquiz");

startquizbtn.addEventListener("click", function(){
    console.log("start button");
    setInterval(timer, 1000);
})

// timer counts down
let quiztimerEl = document.getElementById('quiztimer');

seconds = 60
function timer(){
    if (seconds > 0) {
        seconds--;
        quiztimerEl.textContent = "Remaining time: " + seconds;
    }
    else {
        clearInterval();
    }
}

// timer is updated 


// quiz starts
