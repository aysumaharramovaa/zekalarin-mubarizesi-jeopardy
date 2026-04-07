// 🔹 DATA STRUKTURU
const categories = {
    "RİYAZİYYAT": { questions: { "3 bal": 60, "4 bal": 90, "5 bal": 120, "6 bal": 120, "7 bal": 180 } },
    "TƏBİƏT ELMLƏRİ": { questions: { "3 bal": 60, "4 bal": 60, "5 bal": 60, "6 bal": 60, "7 bal": 60 } },
    "HUMANİTAR ELMLƏR": { questions: { "3 bal": 60, "4 bal": 60, "5 bal": 60, "6 bal": 60, "7 bal": 60 } },
    "MƏDƏNİYYƏT VƏ İNCƏSƏNƏT": { questions: { "3 bal": 60, "4 bal": 60, "5 bal": 60, "6 bal": 60, "7 bal": 60 } },
    "RƏQƏMSAL TEXNOLOGİYALAR": { questions: { "3 bal": 60, "4 bal": 60, "5 bal": 60, "6 bal": 60, "7 bal": 60 } }
};

const questionsData = {
    "RİYAZİYYAT": {
        "3 bal": {
            "sual": `Altı ədəd 4 rəqəminin yan-yana yazılmasından yaranan 444444 ədədini bizim Zəfər rəmzimiz olan 44 ədədinə böldükdə alınan qismət neçədir?`,
            "cavab": "10101"
        },
        "4 bal": {
            "sual": `"Qarabağ" futbol klubunun "Frankfurt" ilə oyununda yekun hesab 3-2 bitmişdir. Qolların vurulma ardıcıllığı cəmi neçə fərqli ssenaridə baş verə bilər?`,
            "cavab": "10"
        },
        "5 bal": {
            "sual": `Eyni iş gücünə malik iki işçi, ölçüləri 8m x 6m olan reklam lövhəsinin bir üzünü 24 dəqiqəyə təmizləyir. 6 işçi həmin lövhənin hər iki üzünü neçə dəqiqəyə təmizləyər?`,
            "cavab": "16 dəqiqə"
        },
        "6 bal": {
            "sual": `Zaman maşını düyməsinə basdıqda ya 3 il əvvələ, ya da x il sonraya gedir. 2025-ci ildə 20 dəfə basdıqdan sonra 2030-cu ilə çatan şəxs üçün x-in ən böyük tam qiyməti?`,
            "cavab": "62"
        },
        "7 bal": {
            "sual": `Hər 3 saatda 4 dəqiqə geri qalan saat bazar ertəsi 09:00-da qurulub. Növbəti gün (çərşənbə akşamı) 15:00 olduqda bu saat neçəni göstərər?`,
            "cavab": "14:20"
        }
    }
};

// 🔹 ELEMENTLƏR
const categoryContainer = document.getElementById("categoryContainer");
const questionBox = document.getElementById("questionBox");
const questionTextDiv = document.getElementById("questionText");
const answerTextDiv = document.getElementById("answerText");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const closeBoxBtn = document.getElementById("closeBoxBtn");
const timerDisplay = document.getElementById("timer");

let selectedButton = null;
let timerInterval = null;
const audioTicker1 = new Audio("Files/ticker1.mp3");
const audioTicker2 = new Audio("Files/ticker2.mp3");

// 🔹 UI YARATMAQ
Object.entries(categories).forEach(([title, { questions }]) => {
    const div = document.createElement("div");
    div.className = "category-column";
    div.innerHTML = `<h2 class="category-title">${title}</h2>`;

    Object.entries(questions).forEach(([label, time]) => {
        const btn = document.createElement("button");
        btn.className = "q-button";
        btn.innerText = label;
        btn.onclick = () => {
            if (btn.classList.contains("done")) return;
            selectedButton = btn;
            startQuestion(title, label, time);
        };
        div.appendChild(btn);
    });
    categoryContainer.appendChild(div);
});

// 🔹 SUALI BAŞLAT
function startQuestion(cat, label, time) {
    const data = questionsData[cat]?.[label];
    if (!data) return alert("Sual tapılmadı!");

    questionTextDiv.innerText = data.sual;
    answerTextDiv.innerText = `CAVAB: ${data.cavab}`;
    
    // Reset UI
    answerTextDiv.classList.add("hidden");
    showAnswerBtn.classList.remove("hidden");
    closeBoxBtn.classList.add("hidden");
    questionBox.classList.remove("hidden");
    timerDisplay.classList.remove("hidden");

    selectedButton.classList.add("active-q");
    runConfetti();
    startTimer(time);
}

// 🔹 CAVABI AÇ
function revealAnswer() {
    clearInterval(timerInterval);
    audioTicker1.pause();
    audioTicker2.pause();
    
    answerTextDiv.classList.remove("hidden");
    showAnswerBtn.classList.add("hidden");
    closeBoxBtn.classList.remove("hidden");
    timerDisplay.classList.add("hidden");
}

showAnswerBtn.onclick = revealAnswer;
closeBoxBtn.onclick = () => {
    questionBox.classList.add("hidden");
    selectedButton.style.visibility = "hidden";
    selectedButton.classList.add("done");
};

// 🔹 TAYMER
function startTimer(duration) {
    let time = duration;
    audioTicker1.loop = true;
    audioTicker1.play();

    timerInterval = setInterval(() => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        timerDisplay.innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;

        if (time === 10) {
            audioTicker1.pause();
            audioTicker2.play();
        }

        if (time <= 0) {
            revealAnswer();
        }
        time--;
    }, 1000);
}

function runConfetti() {
    new Audio("Files/music3.mp3").play();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}