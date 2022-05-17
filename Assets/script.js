//const variabls
const restartBtn = document.getElementById("restart")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const submitBtn = document.getElementById("submit")
const trueBtn = document.getElementById("True")
const falseBtn = document.getElementById("False")
const userScore = document.getElementById("user-score")
const totalScore = document.getElementById("total-score")
const questionText = document.getElementById("question-text")

//custom variables
let currentQuestion = 0;
let score = 0;
let question = [
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