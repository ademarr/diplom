let kDost = {
  d1: {
    text: "Верхний пруд, в разговорной речи чаще встречается название Верхнее озеро (до 1949 года - немецкое название Обертайх / Oberteich) - водоем, имеющий искусственное происхождение, расположенный в центре Калининграда и пользующийся особой популярностью для прогулок и отдыха среди горожан и гостей города.",
    img: "images/lake.jpg",
    flag: 0
  },
  d2: {
    text: "Остров Канта, полное название остров Иммануила Канта - историческая нежилая островная часть города Калининграда, расположенная в окружении реки Преголя. Ранее остров Канта носил название Кнайпхоф. Название Кнайпхоф (Kneiphof) происходит от прусского «Knypabe», что означает «Окруженное водой, рекой».",
    img: "images/kant.jpg",
    flag: 0
  },
  d3: {
    text: "Рыбная деревня - этнографический и торгово-ремесленный комплекс, расположенный в самом сердце города Калининград, на Октябрьском острове (бывший Ломзе), берегу реки Преголя. Одно из самых посещаемых мест для прогулок и отдыха в Калининграде.",
    img: "images/village.jpg",
    flag: 0
  }
}
let zDost = {
  d1: {
    text: "Водонапорная башня в Зеленоградске является символом и доминантой города. Здание было построено в 1904 году. На высоте 24-х метров расположена открытая круговая смотровая площадка, имеющая 360-градусный обзор, а на трех этажах, ниже смотровой площадки, разместился музей кошек «Мурариум».",
    img: "images/wt.jpg",
    flag: 0
  },
  d2: {
    text: "Курортный проспект Зеленоградска — это туристическая улица в историческом центре города, на расстоянии 200 метров от набережной.Курортный проспект считается самой облагороженной улицей в Зеленоградске. ",
    img: "images/kurortPr.jpg",
    flag: 0
  },
  d3: {
    text: "Городской парк Зеленоградска. Тортилин пруд. Отличное место для неспешных прогулок и отдыха. В жаркий летний день данный парк может стать глотком свежего воздуха, где в тени крон деревьев легко укрыться от солнечных лучей.",
    img: "images/tortilin.jpg",
    flag: 0
  }
}
let sDost = {
  d1: {
    text: "Водонапорная башня постройки начала 20 века. Возведена по проекту известного прусского архитектора Отто Куккука из железобетонных конструкций. 25-метровая башня на тот момент была самым высоким сооружением города Раушен.",
    img: "images/WaterTower.jpg",
    flag: 0
  },
  d2: {
    text: "Лютеранская кирха в Раушене была заложена в 1903 году по проекту по проекту архитекторов Вихмана и Кукука. С 1991 года - православный храм, в 1992 году храм Святого Преподобного Серафима Саровского.",
    img: "images/Kirha.jpg",
    flag: 0
  },
  d3: {
    text: "Набережная Светлогорска — одна из его главных достопримечательностей Светлогорска. По праву входит в первую десятку самых популярных набережных городов России.",
    img: "images/scale.jpg",
    flag: 0
  }
}



let form = document.querySelector("#testing");
let btns = document.querySelectorAll(".dst");
let dost;
document.onload = popUpHide();

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    setDost(btns[i]);
  });
}

function popUpHide() {
  form.style.display = "none";
}

function setDost(item) {
  if (item.getAttribute('class').includes("kdost")) {
    dost = kDost;
  } else if (item.getAttribute('class').includes("zdost")) {
    dost = zDost;
  } else if (item.getAttribute('class').includes("sdost")) {
    dost = sDost;
  }
  dost["d1"]["flag"] = 1;
  form.innerHTML = setWin(dost["d1"]);
  form.style.display = "block";
}

function prevDost() {
  if (dost["d1"]["flag"] == 1) {
    dost["d1"]["flag"] = 0;
    form.innerHTML = '';
    popUpHide();
  } else if (dost["d2"]["flag"] == 1) {
    dost["d1"]["flag"] = 1;
    dost["d2"]["flag"] = 0;
    form.innerHTML = setWin(dost["d1"]);
  } else if (dost["d3"]["flag"] == 1) {
    dost["d2"]["flag"] = 1;
    dost["d3"]["flag"] = 0;
    form.innerHTML = setWin(dost["d2"]);
  }
}

function nextDost() {
  if (dost["d1"]["flag"] == 1) {
    dost["d2"]["flag"] = 1;
    dost["d1"]["flag"] = 0;
    form.innerHTML = setWin(dost["d2"]);
  } else if (dost["d3"]["flag"] == 1) {
    dost["d3"]["flag"] = 0;
    form.innerHTML = '';
    popUpHide();
  } else if (dost["d2"]["flag"] == 1) {
    dost["d3"]["flag"] = 1;
    dost["d2"]["flag"] = 0;
    form.innerHTML = setWin(dost["d3"]);
  }
}

function clDost() {
  form.innerHTML ="";
  popUpHide();
}

function setWin(obj) {
  return `
<div class="col testing">
  <p style="text-align: right;"><i class="fas fa-times-circle" onclick="clDost()"></i>
</p>
  <div class="row">
    <div class="col">
      <p>
        ${obj["text"]}
      </p>
    </div>
    <div class="col img-block">
      <img src="${obj["img"]}" class="image" width="100%">
    </div>
  </div>
  <div class="row">
    <div class="col-6" style="text-align: right;">
      <button class="btn btn-dark tbtn" onclick="prevDost()">Предыдущий</button>

    </div>
    <div class="col-6">
      <button class="btn btn-dark tbtn" onclick="nextDost()">Следующий</button>
    </div>
  </div>
</div>
`;
}
