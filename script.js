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
      sual: `44 ədədi bizim üçün sadəcə bir rəqəm deyil, şanlı tariximizin, birliyimizin və sarsılmaz iradəmizin simvoludur. 2020-ci ildə cəmi 44 gün davam edən Vətən Müharibəsi nəticəsində qazanılan tarixi Zəfər, bu ədədi hər bir azərbaycanlının qəlbinə fəxarət rəmzi kimi həkk etdi. Bu, ədalətin bərpası, torpaqlarımızın azadlığı və milli qürurumuzun intibahı olan "44 günlük dastan"ın rəqəmsal ifadəsidir.
Altı ədəd 4 rəqəminin yan-yana yazılmasından yaranan 444444 ədədini bizim Zəfər rəmzimiz olan 44 ədədinə böldükdə alınan qismət neçədir?
`,
      cavab: "10101",
    },
    "4 bal": {
      sual: `""Qarabağ" futbol klubu Çempionlar Liqasının Liqa mərhələsində Almaniyanın "Frankfurt" komandası ilə qarşılaşır. Tofiq Bəhramov adına Respublika Stadionunda keçirilən möhtəşəm oyunda təmsilçimiz 3-2 hesabı ilə tarixi qələbə qazanır.
Yalnız yekun hesabın 3-2 olduğunu bilən bir azarkeş üçün qolların vurulma ardıcıllığı cəmi neçə fərqli ssenaridə baş verə bilər?
(Məsələn: Q-Q-Q-F-F)
`,
      cavab: "10",
    },
    "5 bal": {
      sual: `Eyni iş gücünə malik iki işçi, ölçüləri 8 metr və 6 metr olan düzbucaqlı formalı reklam 
lövhəsinin bir üzünü 24 dəqiqəyə təmizləyir. 
Buna əsasən, eyni iş gücünə malik 6 işçi həmin lövhənin hər iki üzünü neçə dəqiqəyə 
təmizləyər? 
`,
      cavab: "16 dəqiqə",
    },
    "6 bal": {
      sual: `Nasaz bir zaman maşınının olduğu filmdə, bir şəxs maşının düyməsinə basdığı anda olduğu  tarixdən ya düz 3 il əvvələ, ya da düz x il sonraya gedir. Filmdə bir nəfər 2025-ci ildə bu  düyməyə ardıcıl olaraq 20 dəfə basdıqdan sonra 2030-cu ildə olduğunu fərq edir. 
Buna əsasən, düymənin irəli apardığı illərin sayını bildirən x-in ala biləcəyi ən böyük tam  ədəd qiyməti neçədir?`,
      cavab: "62",
    },
    "7 bal": {
      sual: `Bir dərzi emalatxanasındakı divar saatı nasaz olduğu üçün hər 3 saatda düz 4 dəqiqə geri qalır. Dərzi bazar ertəsi günü saat tam 09:00-da saatı düzgün vaxta uyğun qurur. Düzgün  işləyən başqa bir saat növbəti gün (çərşənbə axşamı) tam saat 15:00-ı göstərdikdə, dərzinin  geri qalan divar saatı neçəni göstərəcək? `,
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
      sual: 'Məhəmməd Füzulinin  "Həft cam” əsərində şair cam içərkən növbə ilə musiqi alətləri ilə “söhbət” edir: Əsərdə neçə müsiqi aləti ilə söhbətləşilir?',
      cavab: "7",
    },
    "4 bal": {
      sual: "7.	Qaraqoyunlular dövrünün yadigarı olan, vaxtilə böyük memarlıq kompleksi kimi inşa edilmiş, mərkəzi günbəzli özünəməxsus planı ilə seçilən bu abidənin eyni adlı nümunəsi həm də İrəvanda mövcuddur. Hansı məsciddən söhbət gedir? Və ya  XVIII əsrdə İrəvanda inşa edilmiş bu məscidin eyni adlı başqa bir nümunəsi orta əsr Azərbaycan dövlətlərinin paytaxt şəhərlərindən birində yerləşir. Mərkəzi günbəzli özünəməxsus planı ilə seçilən bu abidə necə adlanır?",
      cavab: "Göy Məscid",
    },
    "5 bal": {
      sual: "- İ. Stalinin “Şərq gözəli” adlandırdığı, Üzeyir Hacıbəylinin çox dəyər verdiyi, Səməd Vurğunun şeir, Əliağa Vahidin bir neçə qəzəl həsr etdiyi, rəssam Vəcihə Səmədovanın portretini çəkdiyi, “Qəzəlxan” filmindəki aktrisa obrazının prototipi olan xanım (aktrisa) kimdir?",
      cavab: "Azərbaycanın xalq artisti, Stalin və Dövlət  Mükafatı laureatı, İstiqlaliyyət ordenli Leyla xanım Bədirbəyli ( 1920 – 1999 ).",
    },
    "6 bal": {
      sual: "13.	Fransız qadınlar, bəzən sevmədikləri digər qadınlara “XXX sənin rəsmini çəksin” deyirdilər. XX əsr incəsənətinin ən tanınmış şəxslərindən olan bu rəssam, Jorj Brakla birlikdə üçsəthli cismin səthlərini orijinal tərzdə bir yerdə təqdim edən sənət axınına yaratmışdır. Söhbət kimdən gedir və hansı sənət axınını baniləşdirmişdir? ",
      cavab: "Pablo Pikasso, Kubizm ",
    },
    "7 bal": {
      sual: "11.	Son Elxani hökmdarı tərəfindən vəziri Əli şahın inşasına başladığı, ilk tikildiyi dövrdə məscid kimi istifadə olunan bu abidə  sonradan ehtimal ki, Təbrizdə baş verən zəlzələlər səbəbindən divar və zirzəmilər əlavə edilərək qala formasına çevrilmişdir. Bu hansı tikilidir? ",
      cavab: "Ərk qalası əvvəlki adı ilə Əlişah məscidi",
    },
  },
  "HUMANİTAR ELMLƏR": {
    "3 bal": {
      sual: "XVI əsrin əvvəllərində iki yerə parçalanmış bu imperiyanın hər iki qoluna öz qohumları olan Şah İsmayıl Səfəvi tərəfindən son qoyulmuşdur. Söhbət hansı imperiyadan gedir ? ",
      cavab: "Ağqoyunlu imperiyası",
    },
    "4 bal": {
      sual: "Bu şəxs Azərbaycanlıları təşkil edən Oğuz tayfalarından birinə mənsub olmuş və fəaliyyəti dövründə bölgədəki bütün dövlətləri və imperiyaları məğlub etmişdir. Qardaşı oğlu tərəfindən öldürülən və “Asiyanın Sonuncu Böyük Fatehi” adlandırılan sərkərdə kimdir?",
      cavab: "Nadir şah Əfşar",
    },
    "5 bal": {
      sual: "Türkiyənin Qara dəniz bölgəsində yerləşən və eyni zamanda Səfəvi və Osmanlı imperiyaları arasındakı müharibənin birinci mərhələsini bitirən müqavilənin imzalandığı şəhər hansıdır? ",
      cavab: "Amasya",
    },
    "6 bal": {
      sual: "Üç fərqli siyasi rejimin — Osmanlı imperiyası, Azərbaycan Xalq Cümhuriyyəti və Türkiyə Respublikasının — parlamentlərində təmsil olunmuş nadir siyasi xadimlərdən biri olan eyni zamanda ictimai-siyasi, maarifçi və akademik fəaliyyəti ilə seçilən bu şəxs kimdir? ",
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
