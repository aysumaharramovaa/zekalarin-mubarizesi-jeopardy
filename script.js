// 🔹 CATEGORIES
const categories = {
    "RİYAZİYYAT": { questions: { "3 bal": 60, "4 bal": 90, "5 bal": 120, "6 bal": 120, "7 bal": 180 } },
    "TƏBİƏT ELMLƏRİ": { questions: { "3 bal": 60, "4 bal": 60, "5 bal": 60, "6 bal": 60, "7 bal": 60 } },
    "HUMANİTAR ELMLƏR": { questions: { "3 bal": 60, "4 bal": 60, "5 bal": 60, "6 bal": 60, "7 bal": 60 } },
    "MƏDƏNİYYƏT VƏ İNCƏSƏNƏT": { questions: { "3 bal": 60, "4 bal": 60, "5 bal": 60, "6 bal": 60, "7 bal": 60 } },
    "RƏQƏMSAL TEXNOLOGİYALAR": { questions: { "3 bal": 60, "4 bal": 60, "5 bal": 60, "6 bal": 60, "7 bal": 60 } }
};

// 🔹 QUESTIONS DATA
const questionsData = {
    "RİYAZİYYAT": {
        "3 bal": `44 ədədi bizim üçün sadəcə bir rəqəm deyil, şanlı tariximizin, birliyimizin və sarsılmaz iradəmizin simvoludur. 2020-ci ildə cəmi 44 gün davam edən Vətən Müharibəsi nəticəsində qazanılan tarixi Zəfər, bu ədədi hər bir azərbaycanlının qəlbinə fəxarət rəmzi kimi həkk etdi.

Altı ədəd 4 rəqəminin yan-yana yazılmasından yaranan 444444 ədədini bizim Zəfər rəmzimiz olan 44 ədədinə böldükdə alınan qismət neçədir?`,

        "4 bal": `"Qarabağ" futbol klubu Çempionlar Liqasının Liqa mərhələsində Almaniyanın "Frankfurt" komandası ilə qarşılaşır. Tofiq Bəhramov adına Respublika Stadionunda keçirilən möhtəşəm oyunda təmsilçimiz 3-2 hesabı ilə tarixi qələbə qazanır.

Yalnız yekun hesabın 3-2 olduğunu bilən bir azarkeş üçün qolların vurulma ardıcıllığı cəmi neçə fərqli ssenaridə baş verə bilər?
(Məsələn: Q-Q-Q-F-F)`,

        "5 bal": `Nasaz bir zaman maşınının olduğu filmdə, bir şəxs maşının düyməsinə basdığı anda olduğu tarixdən ya düz 3 il əvvələ, ya da düz x il sonraya gedir. 

Filmdə bir nəfər 2025-ci ildə bu düyməyə ardıcıl olaraq 20 dəfə basdıqdan sonra 2030-cu ildə olduğunu fərq edir. Buna əsasən, x-in ala biləcəyi ən böyük tam ədəd qiyməti neçədir?`,

        "6 bal": `Eyni iş gücünə malik iki işçi, ölçüləri 8 metr və 6 metr olan düzbucaqlı formalı reklam lövhəsinin bir üzünü 24 dəqiqəyə təmizləyir.

Buna əsasən, eyni iş gücünə malik 6 işçi həmin lövhənin hər iki üzünü neçə dəqiqəyə təmizləyər?`,

        "7 bal": `Bir dərzi emalatxanasındakı divar saatı nasaz olduğu üçün hər 3 saatda düz 4 dəqiqə geri qalır. Dərzi bazar ertəsi günü saat tam 09:00-da saatı düzgün vaxta uyğun qurur. 

Düzgün işləyən başqa bir saat növbəti gün (çərşənbə axşamı) tam saat 15:00-ı göstərdikdə, dərzinin geri qalan divar saatı neçəni göstərəcək?`
    }
};

// 🔹 GLOBALS
const categoryContainer = document.getElementById("categoryContainer");
const questionBox = document.getElementById("questionBox");
const timerDisplay = document.getElementById("timer");
let selectedButton = null;
let timerInterval = null;

const audioTicker1 = new Audio("Files/ticker1.mp3");
const audioTicker2 = new Audio("Files/ticker2.mp3");

// 🔹 CREATE UI
Object.entries(categories).forEach(([title, { questions }]) => {
    const div = document.createElement("div");
    div.classList.add("category-column");

    const span = document.createElement("h2");
    span.className = "category-title";
    span.innerText = title;
    div.appendChild(span);

    Object.entries(questions).forEach(([label, time]) => {
        const btn = document.createElement("button");
        btn.className = "q-button";
        btn.innerText = label;
        btn.dataset.time = time;
        btn.dataset.status = "new";
        btn.dataset.category = title;

        btn.onclick = () => handleButtonClick(btn);
        div.appendChild(btn);
    });

    categoryContainer.appendChild(div);
});

// 🔹 CONFETTI
function runSelectionEffect(button) {
    const rect = button.getBoundingClientRect();
    const X = (rect.left + rect.right) / 2 / window.innerWidth;
    const Y = (rect.top + rect.bottom) / 2 / window.innerHeight;

    new Audio("Files/music3.mp3").play();

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { x: X, y: Y }
    });
}

// 🔹 BUTTON CLICK
function handleButtonClick(button) {
    if (button.dataset.status !== "new") return;

    selectedButton = button;
    button.dataset.status = "waiting";
    button.classList.add("active-q");

    const category = button.dataset.category;
    const label = button.innerText;
    const questionText = questionsData[category]?.[label] || "Sual tezliklə əlavə olunacaq...";

    runSelectionEffect(button);

    setTimeout(() => {
        showQuestion(questionText);
        startTimer(parseInt(button.dataset.time));
    }, 600);
}

// 🔹 SHOW QUESTION
function showQuestion(text) {
    questionBox.innerText = text;
    questionBox.classList.remove("hidden");
    timerDisplay.classList.remove("hidden");
}

// 🔹 HIDE QUESTION (Sualın üzərinə basanda bağlanır)
questionBox.onclick = hideQuestion;

function hideQuestion() {
    questionBox.classList.add("hidden");
    timerDisplay.classList.add("hidden");

    clearInterval(timerInterval);
    audioTicker1.pause();
    audioTicker2.pause();

    if (selectedButton) {
        selectedButton.dataset.status = "done";
        selectedButton.style.visibility = "hidden"; // Düyməni yox edir ki, bir də basılmasın
    }
    selectedButton = null;
}

// 🔹 TIMER
function startTimer(duration) {
    clearInterval(timerInterval);
    let time = duration;

    audioTicker1.loop = true;
    audioTicker1.play();

    function updateTimer() {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        timerDisplay.innerText = `${min}:${sec < 10 ? "0" : ""}${sec}`;

        if (time === 10) {
            audioTicker1.pause();
            audioTicker2.loop = true;
            audioTicker2.play();
        }

        if (time <= 0) {
            clearInterval(timerInterval);
        } else {
            time--;
        }
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}