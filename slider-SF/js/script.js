let images = [
  {
    img: "./asset/slide-1.png",
    city: "Rostov-on-Don LCD admiral",
    tab: "Rostov-on-Don, admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request"
  }, {
    img: "./asset/slide-2.png",
    city: "Sochi Thieves",
    tab: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
  }, {
    img: "./asset/slide-3.png",
    city: "Rostov-on-Don Patriotic",
    tab: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request"
  }
];

function initSlider() {
  let sliderBox = document.querySelector(".projects__slider");
  let sliderArrows = document.querySelectorAll(".projects__slider-arrow");
  let sliderDots = document.querySelector(".slider-pagination__list");
  let sliderTabs = document.querySelector(".projects__tabs-list");
  let infoCity = document.querySelector(".projects__info-city");
  let infoArea = document.querySelector(".projects__info-area");
  let infoTime = document.querySelector(".projects__info-time");
  let infoCost = document.querySelector(".projects__info-cost");

  initImages();
  initArrows();
  initDots();
  initTabs();
  initCity();
  initArea();
  initTime();
  initCost();

  function initImages() {
    images.forEach((image, index) => {
      let slideImage = `<div class="projects__slider-item n${index} ${index === 0 ? "projects__slider-item_active" : ""}" data-index="${index}">
      <img src="${images[index].img}" alt="${images[index].city}" loading="lazy"></img>
      </div>`;
      sliderBox.innerHTML += slideImage;
    });
  }

  function initArrows() {
    sliderArrows.forEach(arrow => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderBox.querySelector(".projects__slider-item_active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("projects__slider-btn_prev")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<li class="slider-pagination__item n${index} ${index === 0 ? "active" : ""}" data-index="${index}">
      <span></span>
      </li>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider-pagination__item").forEach(dot => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initTabs() {
    images.forEach((image, index) => {
      let tab = `<li class="projects__tabs-item n${index} ${index === 0 ? "projects__tabs-item_active" : ""}" data-index="${index}">
      ${images[index].tab}
      </li>`;
      sliderTabs.innerHTML += tab;
    });
    sliderTabs.querySelectorAll(".projects__tabs-item").forEach(tab => {
      tab.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function moveSlider(num) {
    sliderBox.querySelector(".projects__slider-item_active").classList.remove("projects__slider-item_active");
    sliderBox.querySelector(".n" + num).classList.add("projects__slider-item_active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderTabs.querySelector(".projects__tabs-item_active").classList.remove("projects__tabs-item_active");
    sliderTabs.querySelector(".n" + num).classList.add("projects__tabs-item_active");
    changeCity(num);
    changeArea(num);
    changeTime(num);
    changeCost(num);
  }

  function initCity() {
    let citySpan = `<span class="city">${images[0].city}</span>`;
    infoCity.innerHTML += citySpan;
  }

  function changeCity(num) {
    if (!images[num].city) return;
    let textCity = infoCity.querySelector(".city");
    textCity.innerText = images[num].city;
  }

  function initArea() {
    let areaSpan = `<span class="area">${images[0].area}</span>`;
    infoArea.innerHTML += areaSpan;
  }

  function changeArea(num) {
    if (!images[num].area) return;
    let textArea = infoArea.querySelector(".area");
    textArea.innerText = images[num].area;
  }

  function initTime() {
    let timeSpan = `<span class="repair-time">${images[0].time}</span>`;
    infoTime.innerHTML += timeSpan;
  }

  function changeTime(num) {
    if (!images[num].time) return;
    let textTime = infoTime.querySelector(".repair-time");
    textTime.innerText = images[num].time;
  }

  function initCost() {
    let costSpan = `<span class="repair-cost">${images[0].cost}</span>`;
    infoCost.innerHTML += costSpan;
  }

  function changeCost(num) {
    if (!images[num].cost) return;
    let textCost = infoCost.querySelector(".repair-cost");
    textCost.innerText = images[num].cost;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});