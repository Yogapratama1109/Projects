const questionText = document.querySelector(".question-text");
const optionBox=document.querySelector(".option-box");
const currentQuestionNum=document.querySelector(".current-question-num");
const answerDescription=document.querySelector(".answer-description");
const nextQuestionBtn=document.querySelector(".next-question-btn");
const correctAnswers=document.querySelector(".correct-answers");
const seeResultBtn=document.querySelector(".see-result-btn");
const remainingTime=document.querySelector(".remaining-time");
const timeUpText=document.querySelector(".time-up-text");
const quizHomeBox=document.querySelector(".quiz-home-box");
const quizBox=document.querySelector(".quiz-box");
const quizOverBox=document.querySelector(".quiz-over-box");
const startAgainQuizBtn=document.querySelector(".start-again-quiz-btn");
const goHomeBtn=document.querySelector(".go-home-btn");
const startQuizBtn=document.querySelector(".start-quiz-btn");
let attemp=0;
let questionIndex=0;
let score=0;
let number=0;
let myArray=[];
let interval;

myApp=[
    {
        question:"Sultan Hasanudin adalah Pahlawan dari daerah?",
        options:["Palembang", "Bogor", "Sunda Empire", "Makasar"],
        answer:3,
    },
    {
        question:"Apakah Sultan Baabullah adalah anak dari S.Harrun?",
        options:["True", "False"],
        answer:0,
        description:"Sultan Baabullah adalah anak dari S.Harrun"
    },
    {
        question:"Nama perang yang dipimpin oleh Pangeran Diponegoro?",
        options:["Perang Jawa", "Perang Batak", "Perang Bali", "Perang Padri"],
        answer:0,
    },
    {
        question:"ISIS merupakan Organisasi pergerakan nasional yang pertama kali bergerak di bidang politik?",
        options:["True", "False"],
        answer:1,
        description:"Indische Partij adalah Organisasi pergerakan nasional yang pertama kali bergerak di bidang politik"
    },
    {
        question:"Perang yang terjadi tahun 1803 sampai 1838 merupakan perlawanan rakyat di daerah?",
        options:["Papua", "Sumatra Barat", "Aceh", "Bali"],
        answer:1,
    },

]

function load(){
    number++;
    questionText.innerHTML=myApp[questionIndex].question;
    createOptions();
    scoreBoard();
    currentQuestionNum.innerHTML=number + " / " + myApp.length;
}

function createOptions(){
    optionBox.innerHTML="";
    let animationDelay=0.2;
    for(let i=0; i<myApp[questionIndex].options.length; i++){
        const option=document.createElement("div");
            option.innerHTML=myApp[questionIndex].options[i];
            option.classList.add("option");
            option.id=i;
            animationDelay=animationDelay+0.1;
            option.style.animationDelay=animationDelay + "s";
            option.setAttribute("onclick", "check(this)");
            optionBox.appendChild(option);
    }
}

function generateRandomQuestion(){
    const randomNumber=Math.floor(Math.random() * myApp.length);
    let hitDuplicate=0;
    if(myArray.length == 0){
        questionIndex=randomNumber;
   }
    else{
        for(let i=0; i<myArray.length; i++){
            if(randomNumber == myArray[i]){
                hitDuplicate=1;
                
            }
        }
        if(hitDuplicate == 1){
            generateRandomQuestion();
            return;
        }
        else{
            questionIndex=randomNumber;
        }
    }
    myArray.push(randomNumber);
    console.log(myArray)
    load();
}

function check(ele){
    const id=ele.id;
    if(id==myApp[questionIndex].answer){
        ele.classList.add("correct");
        score++;
        scoreBoard();
        
    }
    else{
        ele.classList.add("wrong");
        for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
            }
        }
    }
    attemp++;
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
    stopTimer();

    if(number == myApp.length){
        quizOver();
    }
}

function timeIsUp(){
    showTimeUpText();
    for(let i=0; i<optionBox.children.length; i++){
        if(optionBox.children[i].id==myApp[questionIndex].answer){
            optionBox.children[i].classList.add("show-correct");
        }
    }

    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
}

function startTimer(){
    let timeLimit=10;
    remainingTime.innerHTML=timeLimit;
    remainingTime.classList.remove("less-time");
    interval=setInterval(()=>{
        timeLimit--;
        if(timeLimit < 10){
            timeLimit="0"+timeLimit;
        }
        if(timeLimit < 6){
            remainingTime.classList.add("less-time");
        }
        remainingTime.innerHTML=timeLimit;
        if(timeLimit == 0){
            clearInterval(interval);
            timeIsUp();
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval);
}

function disableOptions(){
    for(let i=0; i<optionBox.children.length; i++){
        optionBox.children[i].classList.add("already-answered");
    }
}

function showAnswerDescription(){
    if(typeof myApp[questionIndex].description !== 'undefined'){
        answerDescription.classList.add("show");
        answerDescription.innerHTML=myApp[questionIndex].description;
    }
}

function hideAnswerDescription(){
    answerDescription.classList.remove("show");
    answerDescription.innerHTML="";
}

function showNextQuestionBtn(){
    nextQuestionBtn.classList.add("show");
}

function hideNextQuestionBtn(){
    nextQuestionBtn.classList.remove("show");
}

function showTimeUpText(){
    timeUpText.classList.add("show");
}

function hideTimeUpText(){
    timeUpText.classList.remove("show");
}

function scoreBoard(){
    correctAnswers.innerHTML=score;
}

nextQuestionBtn.addEventListener("click", nextQuestion);

function nextQuestion(){
    generateRandomQuestion();
    hideNextQuestionBtn();
    hideAnswerDescription();
    hideTimeUpText();
    startTimer();
}

function quizResult(){
    document.querySelector(".total-questions").innerHTML=myArray.length;
    document.querySelector(".total-attemp").innerHTML=attemp;
    document.querySelector(".total-correct").innerHTML=score;
    document.querySelector(".total-wrong").innerHTML=attemp-score;
    const percentage=(score/myApp.length)*100;
    document.querySelector(".percentage").innerHTML=percentage + "%";
}

function resetQuiz(){
    attemp=0;
    score=0;
    number=0;
    myArray=[];
}

function quizOver(){
    nextQuestionBtn.classList.remove("show");
    seeResultBtn.classList.add("show");
}

seeResultBtn.addEventListener("click",()=>{
    quizBox.classList.remove("show");
    seeResultBtn.classList.remove("show");
    quizOverBox.classList.add("show");
    quizResult();
})

startAgainQuizBtn.addEventListener("click",()=>{
    quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
})

goHomeBtn.addEventListener("click",()=>{
    quizOverBox.classList.remove("show");
    quizHomeBox.classList.add("show");
    resetQuiz();
})

startQuizBtn.addEventListener("click",()=>{
    quizHomeBox.classList.remove("show");
    quizBox.classList.add("show");
    startTimer();
    generateRandomQuestion();
})

