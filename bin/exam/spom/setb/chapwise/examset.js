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
// CHAPTER NORMALIZATION & MATCHING
// ==========================
function normalizeChapterKey(chap) {
    if (!chap) return '';
    let c = chap.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
    if (c === '1' || c === 'ch1' || c === 'chapter1' || c === 'scm' || c.includes('introductiontostrategiccost')) return 'chapter1';
    if (c === '2' || c === 'ch2' || c === 'chapter2' || c === 'mbe' || c.includes('modernbusinessenvironment')) return 'chapter2';
    if (c === '3' || c === 'ch3' || c === 'chapter3' || c === 'lean' || c.includes('leansystem') || c.includes('innovation')) return 'chapter3';
    if (c === '4' || c === 'ch4' || c === 'chapter4' || c === 'specialist' || c.includes('specialistcost')) return 'chapter4';
    if (c === '5' || c === 'ch5' || c === 'chapter5' || c === 'ebm' || c.includes('emerging') || c.includes('businessmodel')) return 'chapter5';
    if (c === '6' || c === 'ch6' || c === 'chapter6' || c === 'srm' || c.includes('revenue') || c.includes('revenuemanagement')) return 'chapter6';
    if (c === '7' || c === 'ch7' || c === 'chapter7' || c === 'profit' || c.includes('profitmanagement')) return 'chapter7';
    if (c === '8' || c === 'ch8' || c === 'chapter8' || c === 'spm' || c.includes('strategicperformance') || c.includes('spmintro')) return 'chapter8';
    if (c === '9' || c === 'ch9' || c === 'chapter9' || c === 'private' || c.includes('privatesector') || c.includes('balancedscorecard')) return 'chapter9';
    if (c === '10' || c === 'ch10' || c === 'chapter10' || c === 'npo' || c.includes('notforprofit') || c.includes('nonprofit')) return 'chapter10';
    if (c === '11' || c === 'ch11' || c === 'chapter11' || c === 'report' || c.includes('performancereport')) return 'chapter11';
    if (c === '12' || c === 'ch12' || c === 'chapter12' || c === 'tp' || c.includes('transferprice') || c.includes('transferpricing') || c.includes('divisional')) return 'chapter12';
    if (c === '13' || c === 'ch13' || c === 'chapter13' || c === 'standardcosting' || c.includes('variance')) return 'chapter13';
    if (c === '14' || c === 'ch14' || c === 'chapter14' || c.includes('casestudy') || c.includes('integrated')) return 'chapter14';
    return c;
}

// Fallback topic classifier for cases in caseStudies if case_chapter is missing
function inferCaseChapter(cs) {
    if (cs.case_chapter) return normalizeChapterKey(cs.case_chapter);
    const text = ((cs.caseText || '') + ' ' + (cs.questions ? cs.questions.map(q => q.question || '').join(' ') : '')).toLowerCase();
    
    if (text.includes('transfer price') || text.includes('transfer pricing') || text.includes('divisions of the shenzhen')) return 'chapter12';
    if (text.includes('sales volume contribution') || text.includes('planning variance') || text.includes('sales mix variance') || text.includes('standard and marginal costing')) return 'chapter13';
    if (text.includes('akanksha foundation') || text.includes('caregiver hospital') || text.includes('not-for-profit') || text.includes('non-profit')) return 'chapter10';
    if (text.includes('fitzgerald') || text.includes('building block') || text.includes('balanced scorecard') || text.includes('residual income') || text.includes('bhatia & sharma') || text.includes('power gym')) return 'chapter9';
    if (text.includes('customer profit') || text.includes('oxford medical') || text.includes('xyz electronics') || text.includes('pareto') || text.includes('revenue management')) return 'chapter6';
    if (text.includes('readers diary') || text.includes('business canvas') || text.includes('kuber') || text.includes('yoyo') || text.includes('vserveu') || text.includes('be informed') || text.includes('buymore') || text.includes('business model canvas') || text.includes('freemium')) return 'chapter5';
    if (text.includes('mckinsey') || text.includes('7-s') || text.includes('speed auto-mobile') || text.includes('luxemart')) return 'chapter8';
    if (text.includes('kaizen') || text.includes('5s') || text.includes('jit') || text.includes('nimbus') || text.includes('tpm') || text.includes('oee') || text.includes('single-minute exchange') || text.includes('dubai uni') || text.includes('made to order')) return 'chapter3';
    if (text.includes('target price') || text.includes('target cost') || text.includes('lifecycle') || text.includes('life cycle') || text.includes('cellwell') || text.includes('environmental') || text.includes('flow cost') || text.includes('ema') || text.includes('learning curve') || text.includes('activity based') || text.includes('durable limited') || text.includes('volt hydro') || text.includes('b-parts') || text.includes('boeing')) return 'chapter4';
    if (text.includes('cost of quality') || text.includes('conformance cost') || text.includes('7 star sports') || text.includes('prevention costs') || text.includes('hindustan bikes') || text.includes('total quality')) return 'chapter2';
    if (text.includes('value chain') || text.includes('royal tea') || text.includes('critical success factor') || text.includes('traditional cost') || text.includes('fresh milk enterprises')) return 'chapter1';
    
    return 'chapter14';
}

// ==========================
// INIT EXAM & CENTRIFUGE
// ==========================
function initExam() {
    // 1. Read Chapter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedChapter = urlParams.get('chapter');
    const targetNorm = normalizeChapterKey(selectedChapter);

    // 2. Prioritized Source Selection:
    // Priority 1: questionsetbAI.js (AICaseStudies) ONLY
    // Priority 2: quessetb.js (caseStudies) fallback ONLY if 0 cases exist in questionsetbAI.js for the selected chapter
    let filteredCases = [];

    // Step 1: Check Priority 1 (questionsetbAI.js)
    if (typeof AICaseStudies !== 'undefined' && Array.isArray(AICaseStudies)) {
        filteredCases = AICaseStudies.filter(cs => inferCaseChapter(cs) === targetNorm);
        if (filteredCases.length === 0 && selectedChapter) {
            const rawLower = selectedChapter.toLowerCase();
            filteredCases = AICaseStudies.filter(cs => cs.case_chapter && cs.case_chapter.toLowerCase().includes(rawLower));
        }
    }

    // Step 2: Fallback to Priority 2 (quessetb.js) ONLY if no questions exist in questionsetbAI.js for this chapter
    if (filteredCases.length === 0 && typeof caseStudies !== 'undefined' && Array.isArray(caseStudies)) {
        filteredCases = caseStudies.filter(cs => inferCaseChapter(cs) === targetNorm);

        // Substring / partial check in BoS
        if (filteredCases.length === 0 && selectedChapter) {
            const rawLower = selectedChapter.toLowerCase();
            filteredCases = caseStudies.filter(cs => cs.case_chapter && cs.case_chapter.toLowerCase().includes(rawLower));
        }

        // Related module fallback for chapters without isolated cases
        if (filteredCases.length === 0) {
            if (targetNorm === 'chapter7') {
                filteredCases = caseStudies.filter(cs => {
                    const c = inferCaseChapter(cs);
                    return c === 'chapter6' || c === 'chapter4';
                });
            } else if (targetNorm === 'chapter11') {
                filteredCases = caseStudies.filter(cs => {
                    const c = inferCaseChapter(cs);
                    return c === 'chapter8' || c === 'chapter9';
                });
            }
        }
    }

    // 4. Shuffle and Select EXACTLY up to MAX_CASES
    shuffleArray(filteredCases);
    let finalCases = filteredCases.slice(0, MAX_CASES);

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
                <button class="primary" style="margin-top: 25px;" onclick="if(window.history.length > 1){window.history.back();}else{window.location.href='./chapgate.html';}">Return to Chapter List</button>
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
        <button class="primary" style="margin-bottom: 25px;" onclick="if(window.history.length > 1){window.history.back();}else{window.location.href='./chapgate.html';}">Return to Chapter Selection</button>
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
