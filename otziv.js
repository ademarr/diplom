const kOtziv = {
  1: {
    name: "Стас",
    text: "А всё здесь хорошо. Уникальность Калининградской области заключается в его удивительной природе, мягком климате, комфортных условиях для жизни и отдыха. ",
    image: "images/1-img.jpg",
  },
  2: {
    name: "Сережа",
    text: "Несмотря на небольшие размеры, Калининградская область имеет очень богатый природно-территориальный комплекс. Здесь я встретил равнинную и холмистую местность, дубовые и сосновые леса, болота и песчаные барханы. Разве это не чудо?",
    image: "images/2-img.jpg",
  },
  3: {
    name: "Люда",
    text: "Сколько бы времени я не провела в Калининградской области, каждый день могла посещать новые природные зоны. Отдых доступен круглогодично. Все, что нужно сделать – просто приехать",
    image: "images/3-img.jpg",
  },
  4: {
    name: "Катя",
    text: "Зеленоградск меня очаровал, милый город. НЕ любителям котиков, тогда не советую!))). Почему? А вы поезжайте и сами все поймете.",
    image: "images/4-img.jpg",
  },
  5: {
    name: "Ярослав",
    text: "Светлогорск, это самый чистый воздух, шикарная  природа, тишина и спокойствие. Ну, это кому как нравится. Лично мне это безумно понравилось.",
    image: "images/5-img.jpg",
  },
  6: {
    name: "Ольга",
    text: "Великолепная природа и архитектура Восточной Пруссии. Вроде в России, а вроде и Европа. Такой контраст, это обязательно стоит увидеть.",
    image: "images/6-img.jpg",
  },
  7: {
    name: "Иван",
    text: "В свои времена Кенигсберг, ныне Калининград, был одним из самых красивых европейских городов. Любите историю – вам сюда.",
    image: "images/7-img.jpg",
  },
  8: {
    name: "Федя",
    text: "Интересно было посмотреть наши православные храмы, которые ранее были лютеранскими Кирхами.",
    image: "images/8-img.jpg",
  },
  9: {
    name: "Леонид",
    text: "Интересно было посмотреть наши православные храмы, которые ранее были лютеранскими Кирхами.",
    image: "images/9-img.jpg",
  },
  10: {
    name: "Прохор",
    text: "Балтийское море в Калининградской области, может и не самое теплое, но гораздо чище Черного моря и по мне так гораздо приятнее. А какие здесь закаты!!!.",
    image: "images/10-img.jpg",
  },
  11: {
    name: "Вельгельм",
    text: "Янтарный край. Идешь по пляжу и янтарь собираешь. Вот это чудо!",
    image: "images/11-img.jpg",
  },
}


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function setMessage() {
  let otz = kOtziv[getRandom(1, Object.keys(kOtziv).length)];
  console.log(otz)
  return `
  <div class="col-4 msg">
    <div class="row">
      <div class="col-2 pic">
        <img src="${otz["image"]}" style="border-radius: 100%;width: 130%;">
      </div>
      <div class="col-10 name">
        <p class="otz">${otz["name"]}</p><i class="fas fa-times-circle cross" id="closeOtz" style="zindex: 1001;" onclick="clOtz()"></i>

      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="otz">${otz["text"]}</p>
      </div>
    </div>
  </div>
  `;
}
function clOtz() {

  document.querySelector("#appendOtziv").innerHTML ="";
}

let bttn = document.querySelector(".otzButton");
  bttn.addEventListener("click", function(){
    let o = setMessage();
    document.querySelector("#appendOtziv").innerHTML = o;
  });
