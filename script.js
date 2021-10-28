debugger;

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

seconds = 30
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
currentquestionindex = 0
let questionarray = [
    question1 = {
        question: "What type of animal is a seahorse?",
        choices: ["Crustacean" , "Arachnid" , "Fish" , "Shell"],
        correctanswer: "Fish"
    },
    question2 = {
        question: "Which of the following dog breeds is the smallest?",
        choices: ["Dachshund" , "Poodle" , "Pomeranian" , "Chihuahua"],
        correctanswer: "Chihuahua"
    },
    question3 = {
        question: "What existing bird has the largest wingspan?",
        choices: ["Stork" , "Swan" , "Condor" , "Albatross"],
        correctanswer: "Albatross"
    },
]

let quizquestionsEl = document.querySelector(".question");
let answerchoicesEl = document.querySelector(".choices");

//end game

function quizmain(){
    console.log("start quiz");
    document.getElementById('instructions').hidden = true;


    function displayquestion(){
        if (currentquestionindex < questionarray.length) {
            let questionEl = document.createElement("h3");
            questionEl.textContent = questionarray[currentquestionindex].question
            quizquestionsEl.appendChild(questionEl);

            let answerchoicecontainerEl = document.createElement("div");
            answerchoicesEl.appendChild(answerchoicecontainerEl);
            
            for (let i = 0; i < questionarray[currentquestionindex].choices.length; i++) {
                let answerbuttonEl = document.createElement("button");
                answerbuttonEl.textContent = questionarray[currentquestionindex].choices[i];
                answerchoicecontainerEl.appendChild(answerbuttonEl);
            }

            document.querySelector(".choices").addEventListener("click", function(){
                console.log("answer");
                
                //correct or incorrect



                //display next question
                currentquestionindex++
                questionEl.remove();
                answerchoicecontainerEl.remove();
                displayquestion();
            });  
        }
    }
    
    displayquestion();
}