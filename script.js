const categories = {
    "RİYAZİYYAT": { prefix: "R", questions: { "3 bal": 15, "4 bal": 15, "5 bal": 15, "6 bal": 15, "7 bal": 15 } },
    "TƏBİƏT ELMLƏRİ": { prefix: "TE", questions: { "3 bal": 15, "4 bal": 15, "5 bal": 15, "6 bal": 15, "7 bal": 15 } },
    "HUMANİTAR ELMLƏR": { prefix: "HE", questions: { "3 bal": 15, "4 bal": 15, "5 bal": 15, "6 bal": 15, "7 bal": 15 } },
    "MƏDƏNİYYƏT VƏ İNCƏSƏNƏT": { prefix: "MvəI", questions: { "3 bal": 15, "4 bal": 15, "5 bal": 15, "6 bal": 15, "7 bal": 15 } },
    "RƏQƏMSAL TEXNOLOGİYALAR": { prefix: "RT", questions: { "3 bal": 15, "4 bal": 15, "5 bal": 15, "6 bal": 15, "7 bal": 15 } }
};

const categoryContainer = document.getElementById("categoryContainer");
let selectedImage = "", selectedButton = null, timerInterval = null;
const audioTicker1 = new Audio("Files/ticker1.mp3");
const audioTicker2 = new Audio("Files/ticker2.mp3");

Object.entries(categories).forEach(([title, { prefix, questions }]) => {
    const div = document.createElement("div");
    div.classList.add("category");

    const span = document.createElement("span");
    span.className = "category-title";
    span.innerText = title;
    div.appendChild(span);

    Object.entries(questions).forEach(([label, time]) => {
        const btn = document.createElement("button");
        btn.className = "button";
        btn.innerText = label;
        btn.dataset.time = time;
        btn.dataset.status = "new";
        btn.dataset.image = `Files/Suallar/${title}/${prefix}-${label}.jpg`;
        btn.onclick = () => handleButtonClick(btn);
        div.appendChild(btn);
    });

    categoryContainer.appendChild(div);
});

function runSelectionEffect(button) {
    const rect = button.getBoundingClientRect();
    const X = (rect.left + rect.right) / 2 / window.innerWidth;
    const Y = (rect.top + rect.bottom) / 2 / window.innerHeight;

    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 1,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
        origin: { x: X, y: Y },
    };
    const confettiSound = new Audio("Files/music3.mp3");
        confettiSound.play();
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            confetti({ ...defaults, particleCount: 150, scalar: 1.2 });
            confetti({ ...defaults, particleCount: 10, scalar: 0.75, shapes: ["circle"] });
        }, i * 100);
    }
}

function handleButtonClick(button) {
    if (button.dataset.status !== "new") return;

    selectedImage = button.dataset.image;
    selectedButton = button;
    button.dataset.status = "waiting";
    button.classList.add("selected-button");
    button.classList.remove("hidden-button");

    runSelectionEffect(button);
    setTimeout(() => showImage(selectedImage), 1000);
    // startTimer(parseInt(button.dataset.time)); // Taymer yalnız "s" düyməsi ilə başlasın
}

function showImage(src) {
    const img = document.getElementById("fullscreen-img");
    img.style.objectFit = "contain";
    img.style.height = "100vh";
    img.src = src;
    img.classList.add("show");

    // Cavab şəkli açılırsa taymeri göstərmə
    if (src.includes(" - Copy")) {
        document.getElementById("timer").style.display = "none";
    } else {
        document.getElementById("timer").style.display = "block";
    }
}

function hideImage() {
    document.getElementById("fullscreen-img").classList.remove("show");
    document.getElementById("timer").style.display = "none";
    clearInterval(timerInterval);
    audioTicker1.pause();
    audioTicker2.pause();
}

function startTimer(duration) {
    let time = duration;
    const timerDisplay = document.getElementById("timer");

    audioTicker1.loop = true;
    audioTicker1.play();

    function updateTimer() {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        timerDisplay.innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;

        if (time === 10) {
            audioTicker1.pause();
            audioTicker1.currentTime = 0;
            audioTicker2.loop = true;
            audioTicker2.play();
        }

        if (time <= 0) {
            clearInterval(timerInterval);
            audioTicker1.pause();
            audioTicker2.pause();
            hideImage();

            if (selectedButton && selectedButton.dataset.status === "waiting") {
                selectedButton.dataset.status = "waiting-ended";
            }
        } else {
            time--;
        }
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

const keysPressed = {};

document.addEventListener("keydown", function (event) {
    keysPressed[event.key.toLowerCase()] = true;
    const key = event.key.toLowerCase();

    if (keysPressed["c"] && keysPressed["v"] && selectedButton && 
        (selectedButton.dataset.status === "waiting" || selectedButton.dataset.status === "waiting-ended")) {
        
        const answerSrc = selectedImage.replace(".jpg", " - Copy.jpg");
        const sSound = new Audio("Files/music4.mp3");
        sSound.play();
        showImage(answerSrc);
        selectedButton.dataset.status = "answer";
    }

    if (key === "s" && selectedButton && selectedButton.dataset.status === "waiting") {
        clearInterval(timerInterval);
        startTimer(parseInt(selectedButton.dataset.time));
    }

    if (key === "b" && selectedButton && selectedButton.dataset.status === "answer") {
        hideImage();
        selectedButton.dataset.status = "done";
        selectedButton.classList.remove("selected-button");
        selectedButton.classList.add("hidden-button");
        selectedButton.disabled = true;
        selectedButton = null;
        selectedImage = "";
    }
});

document.addEventListener("keyup", function (event) {
    keysPressed[event.key.toLowerCase()] = false;
});
