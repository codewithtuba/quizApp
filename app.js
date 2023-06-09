var myQuestions = [
    {
        question: " Q1: What does HTML stand for?",
        answer: [
            "Hyper Tag Markup language",
            "Hyper Text Markup language",
            "Hyperlinks Text Mark language",
            "Hyperlinking Text Marking language"
        ],
        correctAnswer: "ans2"
    },
    {
        question: " Q2: The web is based on",
        answer: [
            "Images",
            "Text",
            "Information",
            "HTML"
        ],
        correctAnswer: "ans4"
    },
    {
        question: " Q3: What does HTTP mean?",
        answer: [
            "Hypertext Transit Protocol",
            "Hypertext Transfer Protocol",
            "Hyperlinks Transfer Program",
            "None of these"
        ],
        correctAnswer: "ans2"
    },
    {
        question: " Q4: What does URL mean?",
        answer: [
            "Uniform Resource Locator",
            "Unified Resource Locator",
            "Unitop Resource Locator",
            "None of these"
        ],
        correctAnswer: "ans1"
    },
    {
        question: " Q5: What does CSS stand for?",
        answer: [
            "Creative Style Sheets",
            "Compact Style Sheets",
            "Cascading Style Sheets",
            "Creative Simple Sheet "
        ],
        correctAnswer: "ans3"
    },
]

function showQuestions(e) {
    // Display Question
    var questionElement = document.getElementById('questionElement');
    questionElement.innerHTML = myQuestions[e].question;

    // Display Answer
    var answerElement = document.getElementsByClassName('answerElement');
    for (var i = 0; i < answerElement.length; i++) {
        answerElement[i].innerHTML = myQuestions[e].answer[i];
    }
}

var questionCount = 0;
var score = 0;

function nextQuestion() {
    getCheckAnswer()
    console.log(getCheckAnswer())

    getScore()

    questionCount++;

    deselectAll();

    if (questionCount < myQuestions.length) {
        showQuestions(questionCount);
    }
    else {
        printScore()
    }
}

function getCheckAnswer() {
    var answer;
    var answers = document.getElementsByClassName('answer')
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id;
            //    console.log(answers[i].id)
        }
    }
    return answer;
}

function  deselectAll() {
    var answers = document.getElementsByClassName('answer')
    for (var i = 0; i < answers.length; i++) {
        answers[i].checked = false;
        }
    }


function getScore() {
    if (getCheckAnswer() === myQuestions[questionCount].correctAnswer) {
        // console.log(getCheckAnswer() === myQuestions[0].correctAnswer)
        score++;
        console.log(score)
    }

}
function printScore() {
    var showScore = document.getElementById('showScore');

    var div = document.createElement('div');
    showScore.appendChild(div);
    div.setAttribute("class","btn-h3")

    var h3 = document.createElement('h3');
    var h3Text = document.createTextNode("You Scored "  +  score  + "/5" );
    h3.appendChild(h3Text);
    div.appendChild(h3);

    var div = document.createElement('div');
    showScore.appendChild(div);
    div.setAttribute("class","btn-div")
   
     
    var button = document.createElement('button');
    var  buttonText = document.createTextNode("Play Again !");
    button.appendChild(buttonText);
    div.appendChild(button);

    button.setAttribute("class", "btnn");
    button.setAttribute("onclick", "location.reload()");
    showScore.classList.remove('scoreArea')
}
