// ==========================
// CONFIG
// ==========================
let TOTAL_QUESTIONS = 0; 
const MARK_PER_QUESTION = 2;
const MAX_CASES = 6; // Limits the test to 6 random case studies

// ==========================
// GLOBAL VARIABLES
// ==========================
let selectedQuestions = [];
let currentQuestion = 0;
let userAnswers = [];
let markedForReview = [];
let visitedQuestions = [];
let lastCase = null;

// ==========================
// SHUFFLE UTILITY
// ==========================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ==========================
// INIT EXAM & CENTRIFUGE
// ==========================
function initExam() {
    // 1. Read Chapter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedChapter = urlParams.get('chapter');

    // 2. Identify the master array
    let rawCases = [];
    if (typeof caseStudies !== 'undefined' && Array.isArray(caseStudies)) {
        rawCases = caseStudies;
    } else if (typeof AICaseStudies !== 'undefined' && Array.isArray(AICaseStudies)) {
        rawCases = AICaseStudies;
    }

    // 3. Strict Chapter Filtering
    let filteredCases = rawCases;
    if (selectedChapter) {
        filteredCases = rawCases.filter(cs => {
            if (cs.case_chapter && cs.case_chapter.toLowerCase() === selectedChapter.toLowerCase()) {
                return true;
            }
            return false;
        });
    }

    // 4. Shuffle and Select EXACTLY 6 Cases
    shuffleArray(filteredCases);
    let finalCases = filteredCases.slice(0, MAX_CASES); // Takes up to 6 cases max

    // 5. Extract Questions from the selected cases
    let extractedQuestions = [];
    for (let cs of finalCases) {
        if (!cs || !cs.questions) continue;
        for (let q of cs.questions) {
            if (!q.question || !q.options || q.answer === undefined) continue;
            extractedQuestions.push({
                caseContent: cs.caseText || "",
                question: q.question,
                options: q.options,
                correct: q.answer,
                solution: q.reason || q.solution || "No reason provided"
            });
        }
    }

    selectedQuestions = extractedQuestions;
    TOTAL_QUESTIONS = selectedQuestions.length; 

    // Failsafe: Stop rendering if no questions match
    if (TOTAL_QUESTIONS === 0) {
        document.getElementById("examArea").innerHTML = `
            <div style="padding: 50px; text-align: center; width: 100%; background: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #ef4444; margin-bottom: 15px;">No Data Found</h2>
                <p style="font-size: 16px; color: #4b5563;">No case scenarios were found for <strong>${selectedChapter || "this selection"}</strong>.</p>
                <button class="primary" style="margin-top: 25px;" onclick="window.history.back()">Return to Chapter List</button>
            </div>`;
        return;
    }

    // Initialize arrays dynamically based on final question count
    userAnswers = new Array(TOTAL_QUESTIONS).fill(null);
    markedForReview = new Array(TOTAL_QUESTIONS).fill(false);
    visitedQuestions = new Array(TOTAL_QUESTIONS).fill(false);

    loadQuestion();
    updateGrid();
}

// ==========================
// LOAD QUESTION
// ==========================
function loadQuestion() {
    if (!selectedQuestions[currentQuestion]) return;
    visitedQuestions[currentQuestion] = true;
    const q = selectedQuestions[currentQuestion];

    if (lastCase !== q.caseContent) {
        document.getElementById("caseBox").innerHTML = q.caseContent;
        lastCase = q.caseContent;
    }

    document.getElementById("questionText").innerText = q.question;
    document.getElementById("questionNumber").innerText = `Question ${currentQuestion + 1} of ${TOTAL_QUESTIONS}`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, index) => {
        const div = document.createElement("div");
        div.classList.add("option");
        if (userAnswers[currentQuestion] === index) div.classList.add("selected");
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
    if (currentQuestion < TOTAL_QUESTIONS - 1) {
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
function goToQuestion(index) {
    currentQuestion = index;
    lastCase = null; 
    loadQuestion();
}
function toggleReview() {
    markedForReview[currentQuestion] = !markedForReview[currentQuestion];
    updateGrid();
}

// ==========================
// UPDATE GRID
// ==========================
function updateGrid() {
    const grid = document.getElementById("questionGrid");
    grid.innerHTML = "";

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const btn = document.createElement("button");
        btn.innerText = i + 1;

        if (userAnswers[i] !== null) btn.classList.add("answered");
        else if (visitedQuestions[i]) btn.classList.add("not-attempted");

        if (markedForReview[i]) {
            btn.classList.remove("answered", "not-attempted");
            btn.classList.add("review");
        }
        if (i === currentQuestion) btn.classList.add("current");

        btn.onclick = () => goToQuestion(i);
        grid.appendChild(btn);
    }
}

// ==========================
// SUBMIT & RESULT
// ==========================
function submitExam() {
    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let unanswered = 0;

    selectedQuestions.forEach((q, index) => {
        if (userAnswers[index] === null) unanswered++;
        else if (userAnswers[index] === q.correct) {
            score += MARK_PER_QUESTION;
            correctCount++;
        }
        else wrongCount++;
    });

    let totalPossibleMarks = TOTAL_QUESTIONS * MARK_PER_QUESTION;
    let percentage = ((score / totalPossibleMarks) * 100).toFixed(2);

    let grade = "";
    if (percentage >= 75) grade = "A+";
    else if (percentage >= 60) grade = "A";
    else if (percentage >= 50) grade = "B";
    else grade = "Fail";

    showResult(score, totalPossibleMarks, percentage, grade, correctCount, wrongCount, unanswered);
}

function showResult(score, totalPossibleMarks, percentage, grade, correctCount, wrongCount, unanswered) {
    document.getElementById("examArea").style.display = "none";
    const resultDiv = document.getElementById("resultArea");
    resultDiv.style.display = "block";

    let html = `
        <div class="social-updates-box">
            <p>For more updates, follow us on:</p>
            <div class="social-btn-group">
                <a href="https://www.instagram.com/calciumnotes" class="social-btn instagram-btn" target="_blank">Instagram</a>
                <a href="https://x.com/Calciumnotes" class="social-btn twitter-btn" target="_blank">Twitter</a>
            </div>
        </div>

        <h2>Chapter Practice Result</h2>
        <p style="margin-top: 10px;"><strong>Total Marks:</strong> ${score} / ${totalPossibleMarks}</p>
        <p><strong>Percentage:</strong> ${percentage}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <hr style="margin: 20px 0;">
        <h3>Performance Analytics</h3>
        <p style="margin-top: 10px;">Correct: <strong>${correctCount}</strong> | Wrong: <strong>${wrongCount}</strong> | Unanswered: <strong>${unanswered}</strong></p>
        <hr style="margin: 20px 0;">
        <button class="primary" style="margin-bottom: 25px;" onclick="window.history.back()">Return to Chapter Selection</button>
        <h3>Detailed Solution Review</h3>
    `;

    selectedQuestions.forEach((q, index) => {
        html += `
            <div class="reviewBox">
                <p><strong>Q${index + 1}:</strong> ${q.question}</p>
                <p style="margin-top:10px; color:#ef4444;">Your Answer: ${userAnswers[index] !== null ? q.options[userAnswers[index]] : "Not Answered"}</p>
                <p style="color:#16a34a;">Correct Answer: ${q.options[q.correct]}</p>
                <p style="margin-top:10px;"><strong>Reason:</strong> ${q.solution}</p>
            </div>
        `;
    });

    resultDiv.innerHTML = html;
}

// ==========================
initExam();
