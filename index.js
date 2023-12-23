
const Quiz = [
    { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
    { question: 'What is the capital of Japan?', options: ['Tokyo', 'Seoul', 'Beijing', 'Bangkok'], answer: 'Tokyo' },
    { question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'], answer: 'Canberra' },
    { question: 'What is the capital of Brazil?', options: ['Rio de Janeiro', 'Sao Paulo', 'Brasilia', 'Salvador'], answer: 'Brasilia' },
];
let questionElement = document.getElementById("question")
let optionsContainer = document.getElementById("options-container")
let nextBtn = document.getElementById("next-btn")
let QuizContainer = document.getElementById("quiz-container")
let time = document.getElementById("time")
let start = document.getElementsByClassName("start")
let score = 0
let buttons = []
currentQuestion = 0
let timer  
//time.innerHTML = timer

start[0].onclick = function(){
    start[0].style.display = "none"
    function showQuestion (){
        currentQuiz = Quiz[currentQuestion]
        questionElement.textContent = currentQuiz.question
        optionsContainer.innerHTML = "";
    
        let options = currentQuiz.options
        options.forEach(option => {
            let btn = document.createElement("button")
            optionsContainer.appendChild(btn)
            btn.textContent = option
            btn.classList.add("option")
            btn.addEventListener("click", checkAnswer)
            buttons.push(btn)
        }); 
        timer = setTimeout(showNextQuestion, 4000)
        let waqt = 3
        time.innerHTML = waqt
        let x = setInterval(()=>{
        waqt--
        time.innerHTML = waqt
    
        if(waqt <= 0){
            clearInterval(x)
        }
    }, 1000)
    }
    
    
    function checkAnswer(e){
    
        currentQuiz = Quiz[currentQuestion]
        questionElement.textContent = currentQuiz.question
        if(e.target.textContent === currentQuiz.answer){
            e.target.style.backgroundColor = "#4CAF50"
            e.target.style.color = "white"
            score++
        } else {
            e.target.style.backgroundColor = "red"
            e.target.style.color = "white"
            // find the correct answer and change it's background color to green
            let buttons = optionsContainer.querySelectorAll(".option")
            buttons.forEach(button => {
                if (button.textContent === currentQuiz.answer){
                    button.style.backgroundColor = "#4CAF50"
                    button.style.color = "white"
                }
            })
        }
        //Remove the click event from the other buttons
        buttons.forEach(button => {
            button.removeEventListener("click", checkAnswer)
            clearTimeout(timer)
        })
    }
    
    function showScore(){
        questionElement.innerHTML = `Your score is ${score}/${Quiz.length}`
        optionsContainer.style.display = "none"
        nextBtn.style.display = "none"
    }
    
    function showNextQuestion (){
            if(currentQuestion < Quiz.length - 1 ){
                currentQuestion++;
                showQuestion()
            }else {
                time.style.display = "none"
                showScore()
            }
        }
    showQuestion()
    nextBtn.addEventListener("click", showNextQuestion,)
}



/*
function showQuestion (){
    currentQuiz = Quiz[currentQuestion]
    questionElement.textContent = currentQuiz.question
    optionsContainer.innerHTML = "";

    let options = currentQuiz.options
    options.forEach(option => {
        let btn = document.createElement("button")
        optionsContainer.appendChild(btn)
        btn.textContent = option
        btn.classList.add("option")
        btn.addEventListener("click", checkAnswer)
        buttons.push(btn)
    }); 
    timer = setTimeout(showNextQuestion, 4000)
    let waqt = 3
    time.innerHTML = waqt
    let x = setInterval(()=>{
    waqt--
    time.innerHTML = waqt

    if(waqt <= 0){
        clearInterval(x)
    }
}, 1000)
}


function checkAnswer(e){

    currentQuiz = Quiz[currentQuestion]
    questionElement.textContent = currentQuiz.question
    if(e.target.textContent === currentQuiz.answer){
        e.target.style.backgroundColor = "#4CAF50"
        e.target.style.color = "white"
        score++
    } else {
        e.target.style.backgroundColor = "red"
        e.target.style.color = "white"
        // find the correct answer and change it's background color to green
        let buttons = optionsContainer.querySelectorAll(".option")
        buttons.forEach(button => {
            if (button.textContent === currentQuiz.answer){
                button.style.backgroundColor = "#4CAF50"
                button.style.color = "white"
            }
        })
    }
    //Remove the click event from the other buttons
    buttons.forEach(button => {
        button.removeEventListener("click", checkAnswer)
        clearTimeout(timer)
    })
}

function showScore(){
    questionElement.innerHTML = `Your score is ${score}/${Quiz.length}`
    optionsContainer.style.display = "none"
    nextBtn.style.display = "none"
}

function showNextQuestion (){
        if(currentQuestion < Quiz.length - 1 ){
            currentQuestion++;
            showQuestion()
        }else {
            showScore()
        }
    }
showQuestion()
nextBtn.addEventListener("click", showNextQuestion,)
*/




