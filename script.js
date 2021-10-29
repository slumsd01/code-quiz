document.getElementById('finish').hidden = true;
document.getElementById('highscores').hidden = true;


let quiztimerEl = document.getElementById('quiztimer');
let timerinterval;

//when start button is clicked
let startquizbtn = document.querySelector("#startquiz");

startquizbtn.addEventListener("click", function(){
    timerinterval = setInterval(timer,1000);
    quizmain();
})

// timer counts down
seconds = 60
function timer(){
    if (seconds > 0) {
        seconds--;
        quiztimerEl.textContent = "Time: " + seconds;
    }
    if (seconds <=0) {
        endgame();
    }
}

// question information
currentquestionindex = 0
let questionarray = [
    question1 = {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript>" , "<js>" , "<script>" , "<scripting>"],
        correctanswer: "<script>"
    },
    question2 = {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["The <head> section" , "Both the <head> section and the <body> section are correct" , "The <body> section" , "None of the above"],
        correctanswer: "Both the <head> section and the <body> section are correct"
    },
    question3 = {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ["<script name = 'xxx.js'>" , "<script href='xxx.js'> ", "<script src='xxx.js'>" , "<script a='xxx.js'>"],
        correctanswer: "<script src='xxx.js'>"
    },
    question4 = {
        question: "How do you write 'Hello World!' in an alert box?",
        choices: ["msgBox('Hello World!')" , "msg('Hello World!')", "alertBox('Hello World!')" , "alert('Hello World!')"],
        correctanswer: "alert('Hello World');"
    },
    question5 = {
        question: "How do you create a function in JavaScript?",
        choices: ["function:myFunction()" , "function = myFunction()", "function myFunction()" , "let myFunction = ()"],
        correctanswer: "function myFunction()" 
    },
    question6 = {
        question: "How do you call a function named 'myFunction'?",
        choices: ["call myFunction()" , "myFunction()", "call function myFunction()" , "call(myFunction)"],
        correctanswer: "myFunction()"
    },
    question7 = {
        question: "How to write an IF statement in JavaScript?'?",
        choices: ["if i = 5 then" , "if i = 5", "if (i == 5)" , "if i == 5 then"],
        correctanswer: "if (i == 5)"
    },
    question8 = {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: ["if (i != 5)" , "if i <> 5", "if (i <> 5)" , "if i =! 5 then"],
        correctanswer: "if (i != 5)"
    },
    question9 = {
        question: "How does a WHILE loop start?",
        choices: ["while (i <= 10)" , "while (i <=10; 10++)", "while i = 1 to 10" , "while i++ = 10"],
        correctanswer: "while (i <= 10)"
    },
    question10 = {
        question: "How does a FOR loop start?",
        choices: ["for i = 1 to 5" , "for (i < = 5; i++", "for (i = 0; i <= 5; i++)" , "for (i = 0; i <= 5)"],
        correctanswer: "for (i = 0; i <= 5; i++)"
    },
    question11 = {
        question: "How can you add a comment in a JavaScript?",
        choices: ["<!--This is a comment-->" , "'This is a comment", "//This is a comment" , "[[This is a comment]]"],
        correctanswer: "//This is a comment"
    },
    question12 = {
        question: "What is the correct way to write a JavaScript array?",
        choices: ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')" , "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'" , "var colors = (1:'red', 2:'green', 3:'blue'"],
        correctanswer: "var colors = ['red', 'green', 'blue']"
    },
    question13 = {
        question: "How do you round the number 7.25, to the nearest integer?",
        choices: ["rnd(7.25)" , "Math.round(7.25)", "round(7.25)" , "Math.rnd(7.25)"],
        correctanswer: "Math.round(7.25)"
    },
    question14 = {
        question: "How do you find the number with the highest value of x and y?",
        choices: ["top(x,y)" , "Math.max(x,y)", "ceil(x,y)" , "Math.ceil(x,y)"],
        correctanswer: "Math.max(x,y)"
    },
    question15 = {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onclick" , "onchange", "onmouseover" , "onmouseclick"],
        correctanswer: "onclick"
    },
    question16 = {
        question: "How do you declare a JavaScript variable?",
        choices: ["v carName;" , "variable carName;", "var carName;" , "variant carName;"],
        correctanswer: "var carName;"
    },
    question17 = {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["=" , "x", "*" , "-"],
        correctanswer: "="
    },
    question18 = {
        question: "What will the code return? Boolean(3 < 7)",
        choices: ["true" , "false", "NaN" , "SyntaxError"],
        correctanswer: "true"
    },
    question19 = {
        question: "A JavaScript file has an extension of:",
        choices: [".Java" , ".js", ".javascript" , ".xml"],
        correctanswer: ".js"
    },
    question20 = {
        question: "Which dialog box type displays a message and a data entry field?",
        choices: ["alert()" , "prompt()", "confirm()" , "msg()"],
        correctanswer: "prompt()"
    },
]

let quizquestionsEl = document.querySelector(".question");
let answerchoicesEl = document.querySelector(".choices");

// quiz starts
function quizmain(){
    document.getElementById('instructions').hidden = true;
    displayquestion();
}

//display question
function displayquestion(){
    if (currentquestionindex < questionarray.length) {
        let questionEl = document.createElement("h3");
        questionEl.textContent = questionarray[currentquestionindex].question
        quizquestionsEl.appendChild(questionEl);

        
        for (let i = 0; i < questionarray[currentquestionindex].choices.length; i++) {
            let answerbuttonEl = document.createElement("button");
            answerbuttonEl.setAttribute("onclick", "checkanswer('"+ questionarray[currentquestionindex].choices[i] +"')");
            answerbuttonEl.textContent = questionarray[currentquestionindex].choices[i];
            answerchoicesEl.appendChild(answerbuttonEl);
        }        
    }

    if (currentquestionindex >= questionarray.length) {
        endgame();
    }
    
}

//correct or incorrect
function checkanswer(answer){
    if (answer != questionarray[currentquestionindex].correctanswer){
        seconds = seconds-10;
    }
    displaynextquestion();
}

// display next question
function displaynextquestion() {
    currentquestionindex++;
    quizquestionsEl.innerHTML="";
    answerchoicesEl.innerHTML="";
    displayquestion();
}

// quiz ends
let highscoresarray = []

let finalscoreEl = document.getElementById('finalscore');
let initialinput;

function endgame() {
    clearInterval(timerinterval);
    document.getElementById('finish').hidden = false;
    finalscoreEl.textContent = seconds;
}

// save results
let resultsubmitbtn = document.querySelector("#finish > div > button");
resultsubmitbtn.addEventListener("click", function(){
    newresults();
});

//view results
let highscorecontainer = document.querySelector("#highscorelist");

function newresults (){
    document.getElementById('finish').hidden = true;
    document.getElementById('highscores').hidden = false;

    let initialinput = document.querySelector("#finish > div > form > input[type=text]").value;
    let resultsobj = {
        name: initialinput ,
        points: seconds,
    }
    highscoresarray.push(resultsobj);
    
    let highscoreentry = document.createElement("li");
    highscoreentry.innerHTML = resultsobj.name + " - " + resultsobj.points;
    highscorecontainer.appendChild(highscoreentry);
    saveresults();
}

function saveresults() {
    localStorage.setItem("high-scores",JSON.stringify(highscoresarray));
}

function loadresults() {
    let highscoresarray = localStorage.getItem("high-scores")
    if (!highscoresarray) {
        alert("No scores saved yet!");
    }
    
    highscoresarray = JSON.parse(highscoresarray);

    for (let i = 0; i < highscoresarray.length; i++) {
        newresults(highscoresarray[i]);
    }
}

document.querySelector("body > header > a").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById('finish').hidden = true;
    document.getElementById('instructions').hidden = true;
    document.getElementById('highscores').hidden = false;
    loadresults();
});

document.querySelector("#backbtn").addEventListener("click", function() {
    location.reload();
});

document.querySelector("#clearscoresbtn").addEventListener("click", function() {
    localStorage.clear();
    highscorecontainer.innerHTML = "" ;
});