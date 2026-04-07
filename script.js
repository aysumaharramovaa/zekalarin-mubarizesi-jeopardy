// 🔹 CATEGORIES - Başlıqlar questionsData ilə eyni olmalıdır
const categories = {
  RİYAZİYYAT: {
    questions: {
      "3 bal": 60,
      "4 bal": 90,
      "5 bal": 120,
      "6 bal": 120,
      "7 bal": 180,
    },
  },
  "TƏBİƏT ELMLƏRİ": {
    questions: {
      "3 bal": 60,
      "4 bal": 60,
      "5 bal": 60,
      "6 bal": 60,
      "7 bal": 60,
    },
  },
  "HUMANİTAR ELMLƏR": {
    questions: {
      "3 bal": 60,
      "4 bal": 60,
      "5 bal": 60,
      "6 bal": 60,
      "7 bal": 60,
    },
  },
  "MƏDƏNİYYƏT VƏ İNCƏSƏNƏT": {
    questions: {
      "3 bal": 60,
      "4 bal": 60,
      "5 bal": 60,
      "6 bal": 60,
      "7 bal": 60,
    },
  },
  "RƏQƏMSAL TEXNOLOGİYALAR": {
    questions: {
      "3 bal": 60,
      "4 bal": 60,
      "5 bal": 60,
      "6 bal": 60,
      "7 bal": 60,
    },
  },
};

const questionsData = {
  RİYAZİYYAT: {
    "3 bal": {
      sual: `Altı ədəd 4 rəqəminin yan-yana yazılmasından yaranan 444444 ədədini bizim Zəfər rəmzimiz olan 44 ədədinə böldükdə alınan qismət neçədir?`,
      cavab: "10101",
    },
    "4 bal": {
      sual: `"Qarabağ" futbol klubunun "Frankfurt" ilə oyununda yekun hesab 3-2 bitmişdir. Qolların vurulma ardıcıllığı cəmi neçə fərqli ssenaridə baş verə bilər?`,
      cavab: "10",
    },
    "5 bal": {
      sual: `Eyni iş gücünə malik iki işçi, ölçüləri 8m x 6m olan reklam lövhəsinin bir üzünü 24 dəqiqəyə təmizləyir. 6 işçi həmin lövhənin hər iki üzünü neçə dəqiqəyə təmizləyər?`,
      cavab: "16 dəqiqə",
    },
    "6 bal": {
      sual: `Zaman maşını düyməsinə basdıqda ya 3 il əvvələ, ya da x il sonraya gedir. 2025-ci ildə 20 dəfə basdıqdan sonra 2030-cu ilə çatan şəxs üçün x-in ən böyük tam qiyməti?`,
      cavab: "62",
    },
    "7 bal": {
      sual: `Hər 3 saatda 4 dəqiqə geri qalan saat bazar ertəsi 09:00-da qurulub. Növbəti gün (çərşənbə akşamı) 15:00 olduqda bu saat neçəni göstərər?`,
      cavab: "14:20",
    },
  },
  "TƏBİƏT ELMLƏRİ": {
    "3 bal": {
      sual: "Bu maddə canlı orqanizmlərin hüceyrələrində enerji alınmasında əsas rol oynayır. O olmasa yanma prosesi baş verməz. Eyni zamanda metallarla reaksiyaya girərək onların korroziyasına səbəb ola bilər. Atmosferdə onun miqdarının artması iqlim dəyişiklikləri ilə nəticələnir. Söhbət hansı qazdan gedir?",
      cavab: "Karbon qazı (CO₂)",
    },
    "4 bal": {
      sual: "Dağlıq ərazilərdə su daha aşağı temperaturda qaynamağa başlayır. Bunun səbəbi suyun kimyəvi tərkibinin dəyişməsi deyil. Qaynama temperaturunun dəyişməsi mühitin fiziki parametri ilə bağlıdır. Söhbət hansı fiziki parametrin dəyişməsindən gedir?",
      cavab: "Atmosfer təzyiqi azalır",
    },
    "5 bal": {
      sual: "Siz yol ilə gedərkən uzaqdan sizə doğru sürətlə yaxınlaşan bir təcili yardım maşınının sirenlərinin səsi gəlir. Maşın sizə yaxınlaşanda səsi daha yüksək, keçib getdikdən sonra isə daha aşağı eşidirsiniz. Bu dopler effketi adlanır. Bu effekti izah edin.",
      cavab:
        "Dopler effekti hərəkət edən səs mənbəyinə qarşı və ya ondan uzaqlaşan müşahidəçi üçün səsin tezliyində baş verən dəyişikliyikdir. Maşın yaxınlaşanda dalğalar sıxlaşır (yüksək səs), uzaqlaşanda seyrəlir (aşağı səs).",
    },
    "6 bal": {
      sual: "Kosmik gəmini Yerətrafı orbitə çıxaran raketin mühərrikinin iş prinsipini Nyutonun üçüncü qanununa əsasən izah edin.",
      cavab:
        "Raket mühərriki Nyutonun üçüncü qanununa əsasən işləyir. Yanacaq yandıqda yüksək sürətli qazlar aşağı xaric edilir, raket isə əks istiqamətdə yuxarıya doğru itələnir.",
    },
    "7 bal": {
      sual: "Aktiv kömür əlavə olunan çayda rəngin açılmasının fiziki-kimyəvi səbəbi nədir?",
      cavab:
        "Aktiv kömür adsorbsiya qabiliyyətinə malikdir. O, suyun içindəki çay boyası və rəng verən molekulları öz səthinə çəkir və saxlayır.",
    },
  },
  "MƏDƏNİYYƏT VƏ İNCƏSƏNƏT": {
    "3 bal": {
      sual: 'Məhəmməd Füzulinin "Həft cam" əsərində şair neçə musiqi aləti ilə söhbətləşir?',
      cavab: "7",
    },
    "4 bal": {
      sual: "Azərbaycanın ilk qadın opera müğənnisi Şövkət Məmmədovaya ithaf edilmiş opera hansıdır?",
      cavab: "“Şahsənəm” operası",
    },
    "5 bal": {
      sual: "XI yüzilliyin 60-cı illərində Bağdaddakı ali mədrəsədə dərs demiş böyük azərbaycanlı alim kimdir?",
      cavab: "Xətib Təbrizi",
    },
    "6 bal": {
      sual: "E.ə 10.000-ci ildə inşa edilmiş və dünyanın ən qədim dini abidəsi sayılan Göbeklitəpə Türkiyənin hansı şəhərindədir?",
      cavab: "Şanlıurfa",
    },
    "7 bal": {
      sual: "Təbrizdə Elxanilər dövründə inşasına başlanılan, sonradan qalaya çevrilmiş abidə hansıdır?",
      cavab: "Ərk qalası (Əlişah məscidi)",
    },
  },
  "HUMANİTAR ELMLƏR": {
    "3 bal": {
      sual: "XVI əsrin əvvəllərində Şah İsmayıl tərəfindən hər iki qoluna son qoyulan Azərbaycan imperiyası hansıdır?",
      cavab: "Ağqoyunlu imperiyası",
    },
    "4 bal": {
      sual: "“Asiyanın Sonuncu Böyük Fatehi” adlandırılan Əfşarlar sülaləsinin banisi sərkərdə kimdir?",
      cavab: "Nadir şah Əfşar",
    },
    "5 bal": {
      sual: "Cənubi Azərbaycanda 1945-ci ildə baş vermiş milli azadlıq hərəkatı tarixdə hansı adla tanınır?",
      cavab: "21 Azər hərəkatı",
    },
    "6 bal": {
      sual: "Osmanlı, AXC və Türkiyə parlamentlərinin hər üçündə təmsil olunmuş nadir siyasi xadimimiz kimdir?",
      cavab: "Əhməd bəy Ağaoğlu",
    },
    //     "7 bal": {
    //      sual: `Azərbaycanın iki və daha artıq ölkə ilə inzibati sərhəd olaraq qonşu olduğu rayonlar hansılardır?
    // Sərhəd ölkələrini də qeyd edin.
    // (tam cavab qeyd olunmalıdır)`,
    //       cavab:
    //         "Balakən, Zaqatala, Qax — Rusiya və Gürcüstanla (şimal-qərbdə); Qazax, Ağstafa, Tovuz — Ermənistan və Gürcüstanla (qərbdə); Zəngilan — Ermənistan və İranla (cənub-qərbdə); Şərur, Kəngərli, Babək, Culfa, Ordubad — Ermənistan və İranla (Naxçıvan Muxtar Respublikasında)",
    //     },
    "7 bal": {
      sual: `Azərbaycanın iki və daha artıq ölkə ilə inzibati sərhəd olaraq qonşu olduğu rayonlar hansılardır? 
(tam cavab qeyd olunmalıdır)`,
      cavab:
        "Balakən, Zaqatala, Qax, Qazax, Ağstafa, Tovuz, Zəngilan, Şərur, Kəngərli, Babək, Culfa, Ordubad",
    },
  },
  "RƏQƏMSAL TEXNOLOGİYALAR": {
    "3 bal": {
      sual: "",
      cavab: "",
    },
    "4 bal": {
      sual: "",
      cavab: "",
    },
    "5 bal": {
      sual: "",
      cavab: "",
    },
    "6 bal": {
      sual: "",
      cavab: "",
    },
    "7 bal": {
      sual: "",
      cavab: "",
    },
  },
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
  if (!data) return alert("Sual tapılmadı: " + cat + " " + label);

  questionTextDiv.innerText = data.sual;
  answerTextDiv.innerText = `CAVAB: ${data.cavab}`;

  // Mətn uzunluğuna görə ilkin ölçü tənzimləməsi
  if (data.sual.length > 200) {
    questionTextDiv.style.fontSize = "1.5rem";
  } else {
    questionTextDiv.style.fontSize = "";
  }

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

  // Uzun cavablar üçün şrifti avtomatik kiçilt
  const answer = answerTextDiv.innerText;
  if (answer.length > 100) {
    answerTextDiv.style.fontSize = "1.4rem";
  } else {
    answerTextDiv.style.fontSize = "2.5rem";
  }

  answerTextDiv.classList.remove("hidden");
  showAnswerBtn.classList.add("hidden");
  closeBoxBtn.classList.remove("hidden");
  timerDisplay.classList.add("hidden");
}

showAnswerBtn.onclick = revealAnswer;
closeBoxBtn.onclick = () => {
  questionBox.classList.add("hidden");
  if (selectedButton) {
    selectedButton.style.visibility = "hidden";
    selectedButton.classList.add("done");
  }
};

// 🔹 TAYMER
function startTimer(duration) {
  clearInterval(timerInterval);
  let time = duration;
  audioTicker1.currentTime = 0;
  audioTicker1.loop = true;
  audioTicker1.play().catch((e) => {});

  timerInterval = setInterval(() => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    timerDisplay.innerText = `${min}:${sec < 10 ? "0" : ""}${sec}`;

    if (time === 10) {
      audioTicker1.pause();
      audioTicker2.currentTime = 0;
      audioTicker2.play().catch((e) => {});
    }

    if (time <= 0) {
      clearInterval(timerInterval);
      revealAnswer();
    }
    time--;
  }, 1000);
}

function runConfetti() {
  new Audio("Files/music3.mp3").play().catch((e) => {});
  if (typeof confetti === "function") {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }
}
