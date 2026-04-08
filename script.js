const categories = {
  RİYAZİYYAT: {
    questions: {
      "3 bal": 90,
      "4 bal": 90,
      "5 bal": 90,
      "6 bal": 90,
      "7 bal": 90,
    },
  },
  "TƏBİƏT ELMLƏRİ": {
    questions: {
      "3 bal": 90,
      "4 bal": 90,
      "5 bal": 90,
      "6 bal": 90,
      "7 bal": 90,
    },
  },
  "HUMANİTAR ELMLƏR": {
    questions: {
      "3 bal": 90,
      "4 bal": 90,
      "5 bal": 90,
      "6 bal": 90,
      "7 bal": 90,
    },
  },
  "MƏDƏNİYYƏT VƏ İNCƏSƏNƏT": {
    questions: {
      "3 bal": 90,
      "4 bal": 90,
      "5 bal": 90,
      "6 bal": 90,
      "7 bal": 90,
    },
  },
  "RƏQƏMSAL TEXNOLOGİYALAR": {
    questions: {
      "3 bal": 120,
      "4 bal": 120,
      "5 bal": 120,
      "6 bal": 120,
      "7 bal": 120,
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
      sual: `"Qarabağ" futbol klubu Çempionlar Liqasının Liqa mərhələsində Almaniyanın "Frankfurt" komandası ilə qarşılaşır. Tofiq Bəhramov adına Respublika Stadionunda keçirilən möhtəşəm oyunda təmsilçimiz 3-2 hesabı ilə tarixi qələbə qazanır.
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
      sual: "Qapalı şüşə qabın içinə bir neçə damcı ətir tökün. Bir müddət sonra qabın hər yerində ətirin qoxusu hiss olunacaq. Halbuki qabın içində hava hərəkəti yoxdur. Bu hadisəni molekulların istilik hərəkəti baxımından izah edin.",
      cavab:
        "Maye və qaz halında olan maddələrin molekulları daim nizamsız istilik hərəkəti edir. Ətirin molekulları da bu hərəkət nəticəsində havanın molekulları ilə toqquşaraq hər istiqamətdə yayılır. Bu proses diffuziya adlanır və molekulların istilik hərəkəti nəticəsində baş verir.",
    },
    "6 bal": {
      sual: "Kosmik gəmini Yerətrafı orbitə çıxaran raketin kütləsi 2500–3000 ton ola bilər. Belə böyük kütləyə baxmayaraq, raket Yer səthindən qalxaraq kosmosa doğru hərəkət edir. Raket mühərrikinin iş prinsipini izah edin və onun Yer üzündə necə hərəkət edə bildiyini əsaslandırın. ",
      cavab:
        "Raket mühərriki Nyutonun üçüncü qanununa əsasən işləyir. Yanacaq yandıqda yüksək sürətli qazlar aşağı istiqamətdə xaric edilir. Qazlara göstərilən təsir qüvvəsinə qarşılıq olaraq raket əks istiqamətdə yuxarıya doğru hərəkət edir. Raketin qalxması üçün mühərrikin yaratdığı itələmə qüvvəsi onun ağırlıq qüvvəsindən böyük olmalıdır.",
    },
    "7 bal": {
      sual: "Laboratoriyada şagird çayı iki eyni stəkana çay tökür. Bir stəkana aktiv kömür əlavə edir, digərinə isə heç nə əlavə etmir. Çayları bir müddət qarışdırdıqdan sonra hər iki stəkandan süzür. Aktiv kömür əlavə olunan stəkanda suyun rəngi açılır, digərində isə çayın rəngi olduğu kimi qara qalır. Buna səbəb nədir?",
      cavab:
        "Aktiv kömür adsorbsiya qabiliyyətinə malikdir. O, suyun içindəki çay boyası və rəng verən molekulları öz səthinə çəkir və saxlayır. Buna görə də aktiv kömürün əlavə olunduğu stəkanda çayın rəngi açılır.",
    },
  },
  "MƏDƏNİYYƏT VƏ İNCƏSƏNƏT": {
    "3 bal": {
      sual: 'Məhəmməd Füzulinin  "Həft cam” əsərində şair cam içərkən növbə ilə musiqi alətləri ilə “söhbət” edir: Əsərdə neçə müsiqi aləti ilə söhbətləşilir?',
      cavab: "7",
    },
    "4 bal": {
      sual: "Qaraqoyunlular dövrünün yadigarı olan, vaxtilə böyük memarlıq kompleksi kimi inşa edilmiş, mərkəzi günbəzli özünəməxsus planı ilə seçilən bu abidənin eyni adlı nümunəsi həm də İrəvanda mövcuddur. Hansı məsciddən söhbət gedir? Və ya  XVIII əsrdə İrəvanda inşa edilmiş bu məscidin eyni adlı başqa bir nümunəsi orta əsr Azərbaycan dövlətlərinin paytaxt şəhərlərindən birində yerləşir. Mərkəzi günbəzli özünəməxsus planı ilə seçilən bu abidə necə adlanır?",
      cavab: "Göy Məscid",
    },
    "5 bal": {
      sual: "İ. Stalinin “Şərq gözəli” adlandırdığı, Üzeyir Hacıbəylinin çox dəyər verdiyi, Səməd Vurğunun şeir, Əliağa Vahidin bir neçə qəzəl həsr etdiyi, rəssam Vəcihə Səmədovanın portretini çəkdiyi, “Qəzəlxan” filmindəki aktrisa obrazının prototipi olan xanım (aktrisa) kimdir?",
      cavab:
        "Azərbaycanın xalq artisti, Stalin və Dövlət  Mükafatı laureatı, İstiqlaliyyət ordenli Leyla xanım Bədirbəyli  (1920–1999).",
    },
    "6 bal": {
      sual: "Fransız qadınlar, bəzən sevmədikləri digər qadınlara “XXX sənin rəsmini çəksin” deyirdilər. XX əsr incəsənətinin ən tanınmış şəxslərindən olan bu rəssam, Jorj Brakla birlikdə üçsəthli cismin səthlərini orijinal tərzdə bir yerdə təqdim edən sənət axınına yaratmışdır. Söhbət kimdən gedir və hansı sənət axınını baniləşdirmişdir? ",
      cavab: "Pablo Pikasso, Kubizm ",
    },
    "7 bal": {
      sual: "Son Elxani hökmdarı tərəfindən vəziri Əli şahın inşasına başladığı, ilk tikildiyi dövrdə məscid kimi istifadə olunan bu abidə  sonradan ehtimal ki, Təbrizdə baş verən zəlzələlər səbəbindən divar və zirzəmilər əlavə edilərək qala formasına çevrilmişdir. Bu hansı tikilidir? ",
      cavab: "Ərk qalası əvvəlki adı ilə Əlişah məscidi",
    },
  },
  "HUMANİTAR ELMLƏR": {
    "3 bal": {
      sual: "Təbrizdəki İngiltərə konsulunun “artıq Təbriz Bakıya Tehrandan daha yaxındır” ifadəsi ilə Cənubi və Şimali Azərbaycanın mümkün birləşməsinə eyham vurduğu Cənubi Azərbaycanın milli azadlıq hərəkatı tarixdə əsasən hansı adla tanınır?  ",
      cavab: "21 Azər hərəkatı (və ya 21 Azər inqilabı).",
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
      sual: "Osmanlı imperiyası, Azərbaycan Xalq Cümhuriyyəti və Türkiyə Respublikasının — parlamentlərində təmsil olunmuş nadir siyasi xadimlərdən biri olan eyni zamanda ictimai-siyasi, maarifçi və akademik fəaliyyəti ilə seçilən bu şəxs kimdir? ",
      cavab: "Əhməd bəy Ağaoğlu",
    },
    // "6 bal": {
    //   sual: "Yaxşılığa yaxşılıq hər kişinin işidir yamanlığa yaxşılıq ər kişinin işidir. Atalar məsəlini xatırladan, xanlıqlar dövründə baş vermiş hadisə hansıdır? ",
    //   cavab: "Qızılqaya Xəyatəti",
    // },
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
      sual: "9-cu sinif şagirdi Elvinə Instagram-da “pulsuz onlayn kurs” təklif edən naməlum hesabdan mesaj gəlir. Mesajdakı linki açdıqdan sonra onun telefonunda tez-tez reklam pəncərələri çıxmağa başlayır, brauzeri öz-özünə başqa saytlara yönlənir. Tapşırıq: a) Elvinin bu vəziyyətdə buraxdığı 2 təhlükəsizlik səhvini qeyd edin. b) Hadisədən sonra atmalı olduğu 2 düzgün addımı yazın. ",
      cavab: "",
    },
    "4 bal": {
      sual: "Ramil yeni oyun quraşdırarkən tətbiqin kamera və kontaktlara giriş istəməsini oxumadan “icazə ver” düyməsini basır.  Tapşırıq: a) Bu qərarın 2 mümkün riskini yazın. b) Gələcəkdə belə hallardan qorunmaq üçün 1 düzgün davranış göstərin.",
      cavab: "",
    },
    "5 bal": {
      sual: "Tətbiqdə hər məhsulun üzərinə 18% ƏDV əlavə olunmalıdır. Verilən qiymətlər: [10, 25, 40] Tapşırıq: a) price_with_tax(p) funksiyasının pseudo-kodunu yazın.  b) Verilən 3 qiymət üçün ƏDV-li nəticələri hesablayın. Marker qeydi:	Texniki bacarıq olması etik problemi aradan qaldırmır. Şagird həm texniki üstünlüyü, həm etik problemi ayrı yazmalıdır.",
      cavab: "",
    },
    "6 bal": {
      sual: "Universitetlər abituriyentlərin qəbulunu süni intellekt sistemi ilə həyata keçirir. Bir neçə il sonra statistik olaraq bəzi regionlardan gələn şagirdlərin qəbul ehtimalının xeyli aşağı olduğu ortaya çıxır.  Tapşırıq: a) Bu vəziyyətin 2 mümkün səbəbini yazın. b) Sistemin daha ədalətli olması üçün 2 texniki/idarəetmə həlli təklif edin.",
      cavab: "",
    },
    "7 bal": {
      sual: "Cəmiyyətdə süni intellektin verdiyi qərarlar insan qərarlarından “daha obyektiv və doğru” kimi qəbul olunmağa başlayır. Mübahisəli hallarda insanların fikri deyil, alqoritmin nəticəsi əsas götürülür. Tapşırıq:  a) Bu tendensiyanın 2 ciddi sosial riskini yazın. b) 1 prinsip təklif edin ki, insan məsuliyyəti qorunsun. ",
      cavab: "",
    },
  },
};

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

function startQuestion(cat, label, time) {
  const data = questionsData[cat]?.[label];
  if (!data) return alert("Sual tapılmadı: " + cat + " " + label);

  questionTextDiv.innerText = data.sual;
  answerTextDiv.innerText = `CAVAB: ${data.cavab}`;

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

// ✅ əlavə etdik (səndə yox idi)
function revealAnswer() {
  answerTextDiv.classList.remove("hidden");
  showAnswerBtn.classList.add("hidden");
  closeBoxBtn.classList.remove("hidden");
}

showAnswerBtn.onclick = revealAnswer;

closeBoxBtn.onclick = () => {
  questionBox.classList.add("hidden");
  if (selectedButton) {
    selectedButton.style.visibility = "hidden";
    selectedButton.classList.add("done");
  }
};

function startTimer(duration) {
  clearInterval(timerInterval);
  let time = duration;

  audioTicker1.currentTime = 0;
  audioTicker1.loop = true;
  audioTicker1.play().catch(() => {});

  timerInterval = setInterval(() => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    timerDisplay.innerText = `${min}:${sec < 10 ? "0" : ""}${sec}`;

    if (time === 10) {
      audioTicker1.pause();
      audioTicker2.currentTime = 0;
      audioTicker2.play().catch(() => {});
    }

    if (time <= 0) {
      clearInterval(timerInterval);

      audioTicker1.pause();
      audioTicker2.pause();

      timerDisplay.innerText = "0:00";

      showAnswerBtn.classList.add("highlight-btn");
      return;
    }

    time--;
  }, 1000);
}

function runConfetti() {
  new Audio("Files/music3.mp3").play().catch(() => {});
  if (typeof confetti === "function") {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }
}
