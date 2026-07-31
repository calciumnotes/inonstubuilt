// ==========================
// CONFIG
// ==========================
const TOTAL_QUESTIONS = 50;
const MARK_PER_QUESTION = 2;
const PASS_MARK = 50;
const TOTAL_TIME = 3 * 60 * 60;

// ==========================
// GLOBAL VARIABLES
// ==========================
let selectedQuestions = [];
let currentQuestion = 0;
let userAnswers = [];
let markedForReview = [];
let visitedQuestions = [];
let timeLeft = TOTAL_TIME;
let timerInterval;

// 🔥 NEW (fix for case switching)
let lastCase = null;

// ==========================
// SHUFFLE FUNCTION
// ==========================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ==========================
// INIT EXAM (UPDATED)
// ==========================
function initExam() {
    selectedQuestions = [];

    // 1. Process structured case studies and standalone questions
    if (typeof caseStudies !== 'undefined') {
        let shuffledCases = [...caseStudies];
        shuffleArray(shuffledCases);

        for (let cs of shuffledCases) {
            if (selectedQuestions.length >= TOTAL_QUESTIONS) break;

            // Handle standalone questions placed at root level in the array
            if (!cs.questions && cs.question && cs.options && cs.answer !== undefined) {
                selectedQuestions.push({
                    caseContent: "", 
                    question: cs.question,
                    options: cs.options,
                    correct: cs.answer,
                    solution: cs.reason || cs.solution || "No reason provided"
                });
                continue;
            }

            if (!cs.questions) continue;

            for (let q of cs.questions) {
                if (selectedQuestions.length >= TOTAL_QUESTIONS) break;
                if (!q.question || !q.options || q.answer === undefined) continue;

                selectedQuestions.push({
                    caseContent: cs.caseText || "",
                    question: q.question,
                    options: q.options,
                    correct: q.answer,
                    solution: q.reason || q.solution || "No reason provided"
                });
            }
        }
    }

    // Shuffle the final compiled list so standalone and case questions mix up nicely
    shuffleArray(selectedQuestions);

    // Trim down if it exceeds TOTAL_QUESTIONS
    if (selectedQuestions.length > TOTAL_QUESTIONS) {
        selectedQuestions = selectedQuestions.slice(0, TOTAL_QUESTIONS);
    }

    const total = selectedQuestions.length;

    userAnswers = new Array(total).fill(null);
    markedForReview = new Array(total).fill(false);
    visitedQuestions = new Array(total).fill(false);

    loadQuestion();
    startTimer();
    updateGrid();
}

// ==========================
// LOAD QUESTION (FIXED)
// ==========================
function loadQuestion() {

    if (!selectedQuestions[currentQuestion]) return;

    visitedQuestions[currentQuestion] = true;

    const q = selectedQuestions[currentQuestion];

    // ✅ FIXED: Always update case correctly (clears box if standalone)
    if (lastCase !== q.caseContent) {
        const caseBoxElement = document.getElementById("caseBox");
        if (caseBoxElement) {
            caseBoxElement.innerHTML = q.caseContent;
            // Optional: Hide/show case box container if empty
            caseBoxElement.style.display = q.caseContent.trim() === "" ? "none" : "block";
        }
        lastCase = q.caseContent;
    }

    document.getElementById("questionText").innerText = q.question;
    document.getElementById("questionNumber").innerText =
        `Question ${currentQuestion + 1} of ${selectedQuestions.length}`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, index) => {
        const div = document.createElement("div");
        div.classList.add("option");

        if (userAnswers[currentQuestion] === index)
            div.classList.add("selected");

        div.innerHTML = opt;
        div.onclick = () => selectOption(index);
        optionsDiv.appendChild(div);
    });

    updateGrid();
}

// ==========================
// SELECT OPTION
// ==========================
function selectOption(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion();
}

// ==========================
// NAVIGATION
// ==========================
function nextQuestion() {
    if (currentQuestion < selectedQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// 🔥 FIXED jump navigation
function goToQuestion(index) {
    currentQuestion = index;
    lastCase = null; // force case reload
    loadQuestion();
}

// ==========================
// MARK FOR REVIEW
// ==========================
function toggleReview() {
    markedForReview[currentQuestion] =
        !markedForReview[currentQuestion];
    updateGrid();
}

// ==========================
// UPDATE GRID
// ==========================
function updateGrid() {

    const grid = document.getElementById("questionGrid");
    grid.innerHTML = "";

    for (let i = 0; i < selectedQuestions.length; i++) {

        const btn = document.createElement("button");
        btn.innerText = i + 1;

        if (userAnswers[i] !== null) {
            btn.classList.add("answered");
        }
        else if (visitedQuestions[i]) {
            btn.classList.add("not-attempted");
        }

        if (markedForReview[i]) {
            btn.classList.remove("answered");
            btn.classList.remove("not-attempted");
            btn.classList.add("review");
        }

        if (i === currentQuestion)
            btn.classList.add("current");

        btn.onclick = () => goToQuestion(i);
        grid.appendChild(btn);
    }
}

// ==========================
// TIMER
// ==========================
function startTimer() {
    timerInterval = setInterval(() => {

        timeLeft--;

        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;

        document.getElementById("timer").innerText =
            `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }

    }, 1000);
}

// ==========================
// SUBMIT EXAM
// ==========================
function submitExam() {

    clearInterval(timerInterval);

    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let unanswered = 0;

    selectedQuestions.forEach((q, index) => {

        if (userAnswers[index] === null) {
            unanswered++;
        }
        else if (userAnswers[index] === q.correct) {
            score += MARK_PER_QUESTION;
            correctCount++;
        }
        else {
            wrongCount++;
        }
    });

    let percentage = (
        (score / (selectedQuestions.length * MARK_PER_QUESTION)) * 100
    ).toFixed(2);

    let grade = "";
    if (percentage >= 75) grade = "A+";
    else if (percentage >= 60) grade = "A";
    else if (percentage >= 50) grade = "B";
    else grade = "Fail";

    showResult(score, percentage, grade, correctCount, wrongCount, unanswered);
}

// ==========================
// RESULT
// ==========================
function showResult(score, percentage, grade, correctCount, wrongCount, unanswered) {

    document.getElementById("examArea").style.display = "none";
    const resultDiv = document.getElementById("resultArea");
    resultDiv.style.display = "block";

    let html = `
        <div class="social-updates-box">
            <p>For more updates, follow us on:</p>
            <div class="social-btn-group">
                <a href="https://www.instagram.com/calciumnotes" class="social-btn instagram-btn" target="_blank">
                    Instagram
                </a>
                <a href="https://x.com/Calciumnotes" class="social-btn twitter-btn" target="_blank">
                    Twitter
                </a>
            </div>
        </div>

        <h2>Exam Result</h2>
        <p><strong>Total Marks:</strong> ${score} / ${selectedQuestions.length * MARK_PER_QUESTION}</p>
        <p><strong>Percentage:</strong> ${percentage}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Status:</strong> ${score >= PASS_MARK ? "PASS ✅" : "FAIL ❌"}</p>
        <hr>
        <h3>Performance Analytics</h3>
        <p>Correct: ${correctCount}</p>
        <p>Wrong: ${wrongCount}</p>
        <p>Unanswered: ${unanswered}</p>
        <hr>
        <h3>Detailed Solution Review</h3>
    `;

    selectedQuestions.forEach((q, index) => {
        html += `
            <div class="reviewBox">
                <p><strong>Q${index + 1}:</strong> ${q.question}</p>
                <p>Your Answer: ${
                    userAnswers[index] !== null
                        ? q.options[userAnswers[index]]
                        : "Not Answered"
                }</p>
                <p>Correct Answer: ${q.options[q.correct]}</p>
                <p><strong>Reason:</strong> ${q.solution}</p>
                <hr>
            </div>
        `;
    });

    resultDiv.innerHTML = html;
}

// ==========================
initExam();
