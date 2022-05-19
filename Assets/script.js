//const variabls
const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next")
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");

//custom variables
let currentQuestion = 0;
var score = 0;
let questions = [
    {
        question: "Is moringa the best bootcamp in Africa?",
        answers:[
           {option:"Of course!",answer:true},
           {option:"No,not at all.", answer:false},
            
        ]
    },
    {
        question:"Is HTML a programming language?",
        answers:[
            {option:"yes", answer: false},
            {option:"No", answer : true},
        ]
    },

    {
     question:"what is CSS?",
     answers:[
         {option:"A styling language.", answer:true},
         {option:"A scripting language.", answer:false},
     ]
    }

]


//onclick Events
restartBtn.addEventListener("click" , restart);
prevBtn.addEventListener("click" , prev);
nextBtn.addEventListener("click" , next);
submitBtn.addEventListener("click" , submit);

//beginQuiz()
function beginQuiz(){
    currentQuestion = 0;
   
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () =>{
        if (questions[currentQuestion].answers[0].answer){
            if(score < 3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2){
            next();
        }
    }

    prevBtn.classList.add("hide")

}

beginQuiz();


//next()
function next(){
    currentQuestion++;
    if (currentQuestion <= 2){
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () =>{
        if (questions[currentQuestion].answers[0].answer){
            if (score < 3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2){
            next();
    }
   
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer){
            if(score < 3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2){
            next();
        }
    }
    nextBtn.classList.remove("hide");
}

// submit()
function submit(){
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");
    questionText.innerHTML = "Congratulations on finishing your quiz"

}

//restart()
function restart(){
    currentQuestion = 0;
    prevBtn.classList.remove("hide")
    nextBtn.classList.remove("hide")
    submitBtn.classList.remove("hide")
    trueBtn.classList.remove("hide")
    falseBtn.classList.remove("hide")
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();

}


