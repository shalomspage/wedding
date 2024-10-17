let navCard = document.querySelector(".nav-card");

document.addEventListener("click", (e) => {
  let matchHamMenuBtn = e.target.matches(".ham-menu-btn");
  let navCardMatch = e.target.closest(".nav-card");

  if (matchHamMenuBtn) {
    navCard.classList.toggle("display");
  }

  if (!matchHamMenuBtn && navCardMatch == null) {
    navCard.classList.remove("display");
  }
});

// let slider = document.querySelector(".slider .list");
// let items = document.querySelectorAll(".slider .list .item");
// let next = document.getElementById("next");
// let prev = document.getElementById("prev");
// let dots = document.querySelectorAll(".slider .dots li");

// let lengthItems = items.length - 1;
// let active = 0;
// next.onclick = function () {
//   active = active + 1 <= lengthItems ? active + 1 : 0;
//   reloadSlider();
// };
// prev.onclick = function () {
//   active = active - 1 >= 0 ? active - 1 : lengthItems;
//   reloadSlider();
// };
// let refreshInterval = setInterval(() => {
//   next.click();
// }, 3000);
// function reloadSlider() {
//   slider.style.left = -items[active].offsetLeft + "px";
//   //
//   let last_active_dot = document.querySelector(".slider .dots li.active");
//   last_active_dot.classList.remove("active");
//   dots[active].classList.add("active");

//   clearInterval(refreshInterval);
//   refreshInterval = setInterval(() => {
//     next.click();
//   }, 3000);
// }

// dots.forEach((li, key) => {
//   li.addEventListener("click", () => {
//     active = key;
//     reloadSlider();
//   });
// });
// window.onresize = function (event) {
//   reloadSlider();
// };

var countDownDate = new Date("Nov 16, 2024 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
