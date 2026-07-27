/* ==========================================
   WHO WANTS TO BE A CA
   GAME ENGINE
========================================== */
/* ==========================================
   GAME STATE
========================================== */
const GAME_QUESTIONS = 15;
const QUESTION_TIME = 30;
let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
let timer = QUESTION_TIME;
let timerInterval = null;
/* Questions selected for current game */
let gameQuestions = [];
/* Used question IDs */
let usedQuestionIds = new Set();
/* Lifeline Status */
let changeQuestionUsed = false;
/* ==========================================
   DOM REFERENCES
========================================== */
const startScreen = document.getElementById("startScreen");
const resultScreen = document.getElementById("resultScreen");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const questionNo = document.getElementById("questionNo");
const totalQuestions = document.getElementById("totalQuestions");
const questionBox = document.getElementById("questionBox");
const explanation = document.getElementById("explanation");
const timerBox = document.getElementById("timer");
const optionButtons = document.querySelectorAll(".option");
const lockBtn = document.getElementById("lockBtn");
const nextBtn = document.getElementById("nextBtn");
const life5050 = document.getElementById("life5050");
const lifeExtraTime = document.getElementById("lifeExtraTime");
const lifeChange = document.getElementById("lifeChange");
/* ==========================================
   SOUNDS
========================================== */
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const lockSound = document.getElementById("lockSound");
const tickSound = document.getElementById("tickSound");
const winSound = document.getElementById("winSound");
/* ==========================================
   INITIAL SETUP
========================================== */
totalQuestions.textContent = GAME_QUESTIONS;
lockBtn.disabled = true;
nextBtn.disabled = true;
/* ==========================================
   PLAY SOUND
========================================== */
function play(sound){
    if(!sound) return;
    sound.currentTime = 0;
    sound.play().catch(()=>{});
}
/* ==========================================
   CREATE QUIZ
========================================== */
function createQuiz(){
    gameQuestions = [];
    usedQuestionIds.clear();
    const difficultyPattern = [
        1,1,
        2,2,
        3,3,
        4,4,
        5,5,
        6,6,
        7,7,7
    ];
    for(const level of difficultyPattern){
        const pool = questions.filter(q=>
            q.difficulty === level &&
            !usedQuestionIds.has(q.id)
        );
        if(pool.length === 0){
            console.error(
                `No question found for Difficulty ${level}`
            );
            return false;
        }
        const randomQuestion =
            pool[Math.floor(Math.random()*pool.length)];
        gameQuestions.push(randomQuestion);
        usedQuestionIds.add(randomQuestion.id);
    }
    return true;
}
/* ==========================================
   RESET GAME
========================================== */
function resetGame(){
    stopTimer();
    currentQuestion = 0;
    selectedAnswer = null;
    score = 0;
    timer = QUESTION_TIME;
    gameQuestions = [];
    usedQuestionIds.clear();
    changeQuestionUsed = false;
    explanation.style.display = "none";
    lockBtn.disabled = true;
    nextBtn.disabled = true;
    document.querySelectorAll(".ladder-item").forEach(item=>{
        item.classList.remove("active");
    });
    life5050.disabled = false;
    lifeExtraTime.disabled = false;
    lifeChange.disabled = false;
    delete life5050.dataset.used;
    delete lifeExtraTime.dataset.used;
    optionButtons.forEach(btn=>{
        btn.disabled = false;
        btn.style.visibility = "visible";
        btn.classList.remove(
            "selected",
            "correct",
            "wrong"
        );
    });
}
/* ==========================================
   START GAME
========================================== */
startBtn.addEventListener("click",()=>{
    resetGame();
    if(!createQuiz()){
        alert("Question bank is incomplete.");
        return;
    }
    startScreen.style.display = "none";
    resultScreen.style.display = "none";
    document.querySelector(".container").style.display = "grid";
    loadQuestion();
});
/* ==========================================
   LOAD QUESTION
========================================== */
function loadQuestion(){
    stopTimer();
    selectedAnswer = null;
    lockBtn.disabled = true;
    nextBtn.disabled = true;
    explanation.style.display = "none";
    questionNo.textContent = currentQuestion + 1;
    const q = gameQuestions[currentQuestion];
    if(!q){
        finishGame();
        return;
    }
    optionButtons.forEach((btn,index)=>{
        btn.disabled = false;
        btn.style.visibility = "visible";
        btn.classList.remove(
            "selected",
            "correct",
            "wrong"
        );
        btn.textContent = q.options[index];
    });
    questionBox.innerHTML = q.question;
    startTimer();
}
/* ==========================================
   OPTION SELECTION
========================================== */
optionButtons.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        if(btn.disabled) return;
        optionButtons.forEach(button=>{
            button.classList.remove("selected");
        });
        btn.classList.add("selected");
        selectedAnswer = index;
        lockBtn.disabled = false;
    });
});
/* ==========================================
   LOCK ANSWER
========================================== */
lockBtn.addEventListener("click",()=>{
    if(selectedAnswer===null) return;
    stopTimer();
    play(lockSound);
    const q = gameQuestions[currentQuestion];
    optionButtons.forEach(btn=>{
        btn.disabled = true;
    });
    life5050.disabled = true;
    lifeExtraTime.disabled = true;
    lifeChange.disabled = true;
    if(selectedAnswer === q.answer){
        optionButtons[selectedAnswer].classList.add("correct");
        score++;
        updateJourney();
        play(correctSound);
    }
    else{
        optionButtons[selectedAnswer].classList.add("wrong");
        optionButtons[q.answer].classList.add("correct");
        play(wrongSound);
    }
    explanation.style.display = "block";
    explanation.innerHTML =
        "<strong>Explanation:</strong><br><br>" +
        q.explanation;
    lockBtn.disabled = true;
    nextBtn.disabled = false;
});
/* ==========================================
   NEXT QUESTION
========================================== */
nextBtn.addEventListener("click",()=>{
    stopTimer();
    currentQuestion++;
    if(currentQuestion >= GAME_QUESTIONS){
        finishGame();
        return;
    }
    if(!life5050.dataset.used){
        life5050.disabled = false;
    }
    if(!lifeExtraTime.dataset.used){
        lifeExtraTime.disabled = false;
    }
    if(!changeQuestionUsed){
        lifeChange.disabled = false;
    }
    loadQuestion();
});
/* ==========================================
   FINISH GAME
========================================== */
function finishGame(){
    stopTimer();
    play(winSound);
    document.querySelector(".container").style.display = "none";
    resultScreen.style.display = "flex";
    const percentage =
        Math.round((score / GAME_QUESTIONS) * 100);
    let grade = "";
    let message = "";
    if(percentage >= 90){
        grade = "A+";
        message = "Outstanding! You're CA Final ready.";
    }
    else if(percentage >= 75){
        grade = "A";
        message = "Excellent performance. Keep revising.";
    }
    else if(percentage >= 60){
        grade = "B";
        message = "Good attempt. Practice more case studies.";
    }
    else if(percentage >= 40){
        grade = "C";
        message = "Need more revision. Focus on weak chapters.";
    }
    else{
        grade = "D";
        message = "Don't give up. Every topper started here.";
    }
    document.getElementById("finalScore").innerHTML = `
        <h2>${score} / ${GAME_QUESTIONS}</h2>
        <p><strong>Percentage:</strong> ${percentage}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <br>
        <p>${message}</p>
    `;
}
/* ==========================================
   PLAY AGAIN
========================================== */
restartBtn.addEventListener("click",()=>{
    resetGame();
    resultScreen.style.display = "none";
    startScreen.style.display = "flex";
});
/* ==========================================
   TIMER
========================================== */
function startTimer(){
    stopTimer();
    timer = QUESTION_TIME;
    updateTimer();
    timerInterval = setInterval(()=>{
        timer--;
        if(timer <= 10 && timer > 0){
            play(tickSound);
        }
        updateTimer();
        if(timer <= 0){
            stopTimer();
            timeUp();
        }
    },1000);
}
/* ==========================================
   STOP TIMER
========================================== */
function stopTimer(){
    if(timerInterval){
        clearInterval(timerInterval);
        timerInterval = null;
    }
}
/* ==========================================
   UPDATE TIMER
========================================== */
function updateTimer(){
    timerBox.textContent = timer;
    if(timer <= 10){
        timerBox.style.background = "#d32f2f";
    }
    else if(timer <= 20){
        timerBox.style.background = "#f57c00";
    }
    else{
        timerBox.style.background = "#2e7d32";
    }
}
/* ==========================================
   TIME UP
========================================== */
function timeUp(){
    const q = gameQuestions[currentQuestion];
    optionButtons.forEach(btn=>{
        btn.disabled = true;
    });
    life5050.disabled = true;
    lifeExtraTime.disabled = true;
    lifeChange.disabled = true;
    if(selectedAnswer !== null){
        optionButtons[selectedAnswer].classList.add("wrong");
    }
    optionButtons[q.answer].classList.add("correct");
    explanation.style.display = "block";
    explanation.innerHTML = `
        <strong>⏰ Time's Up!</strong><br><br>
        ${q.explanation}
    `;
    lockBtn.disabled = true;
    nextBtn.disabled = false;
}
/* ==========================================
   50 : 50 LIFELINE
========================================== */
life5050.addEventListener("click",()=>{
    if(life5050.disabled) return;
    const q = gameQuestions[currentQuestion];
    let wrongAnswers = [];
    for(let i=0;i<q.options.length;i++){
        if(i !== q.answer){
            wrongAnswers.push(i);
        }
    }
    wrongAnswers.sort(()=>Math.random()-0.5);
    optionButtons[wrongAnswers[0]].style.visibility = "hidden";
    optionButtons[wrongAnswers[1]].style.visibility = "hidden";
    life5050.disabled = true;
    life5050.dataset.used = "true";
});
/* ==========================================
   +30 SECONDS LIFELINE
========================================== */
lifeExtraTime.addEventListener("click",()=>{
    if(lifeExtraTime.disabled) return;
    timer += 30;
    updateTimer();
    lifeExtraTime.disabled = true;
    lifeExtraTime.dataset.used = "true";
});
/* ==========================================
   CHANGE QUESTION LIFELINE
========================================== */
lifeChange.addEventListener("click",()=>{
    if(changeQuestionUsed) return;
    stopTimer();
    const current = gameQuestions[currentQuestion];
    const pool = questions.filter(q=>
        q.difficulty === current.difficulty &&
        q.id !== current.id &&
        !usedQuestionIds.has(q.id)
    );
    if(pool.length === 0){
        alert("No alternate question available.");
        startTimer();
        return;
    }
    const replacement =
        pool[Math.floor(Math.random()*pool.length)];
    gameQuestions[currentQuestion] = replacement;
    usedQuestionIds.add(replacement.id);
    changeQuestionUsed = true;
    lifeChange.disabled = true;
    explanation.style.display = "none";
    loadQuestion();
});
/* ==========================================
   UPDATE CA JOURNEY
========================================== */
function updateJourney(){
    const items = document.querySelectorAll(".ladder-item");
    items.forEach(item=>{
        item.classList.remove("active");
    });
    if(score > 0){
        const index = Math.min(score - 1, items.length - 1);
        items[index].classList.add("active");
    }
}
/* ==========================================
   OPTIONAL KEYBOARD SHORTCUTS
========================================== */
document.addEventListener("keydown",(e)=>{
    if(
        document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA"
    ){
        return;
    }
    switch(e.key){
        case "1":
            if(!optionButtons[0].disabled){
                optionButtons[0].click();
            }
            break;
        case "2":
            if(!optionButtons[1].disabled){
                optionButtons[1].click();
            }
            break;
        case "3":
            if(!optionButtons[2].disabled){
                optionButtons[2].click();
            }
            break;
        case "4":
            if(!optionButtons[3].disabled){
                optionButtons[3].click();
            }
            break;
        case "Enter":
            if(!lockBtn.disabled){
                lockBtn.click();
            }
            else if(!nextBtn.disabled){
                nextBtn.click();
            }
            break;
        case "ArrowRight":
            if(!nextBtn.disabled){
                nextBtn.click();
            }
            break;
    }
});
/* ==========================================
   SAFETY
========================================== */
document.addEventListener("dragstart",(e)=>{
    e.preventDefault();
});
document.addEventListener("selectstart",(e)=>{
    if(
        e.target.tagName !== "INPUT" &&
        e.target.tagName !== "TEXTAREA"
    ){
        e.preventDefault();
    }
});
/* ==========================================
   GAME ENGINE END
========================================== */
