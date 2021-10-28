// debugger;

document.getElementById('finish').hidden = true;
document.getElementById('highscores').hidden = true;

//when start button is clicked
let startquizbtn = document.querySelector("#startquiz");

startquizbtn.addEventListener("click", function(){
    setInterval(timer, 1000);
    quizmain();
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

// quiz starts
function quizmain(){
    console.log("start quiz");
    document.getElementById('instructions').hidden = true;



}
