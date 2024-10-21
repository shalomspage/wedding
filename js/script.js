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

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  document.getElementById("message").textContent = "Submitting..";
  document.getElementById("message").style.display = "block";
  document.getElementById("submit-button").disabled = true;

  // Collect the form data
  var formData = new FormData(this);
  var keyValuePairs = [];
  for (var pair of formData.entries()) {
    keyValuePairs.push(pair[0] + "=" + pair[1]);
  }

  var formDataString = keyValuePairs.join("&");

  // Send a POST request to your Google Apps Script
  fetch(
    "https://script.google.com/macros/s/AKfycbzJR5_dvhmDz4rQPagc_xllJgm4i7r2FvgTHTiGmppRlH7IERbs7sx2e_9m2R29hFAHXw/exec",
    {
      redirect: "follow",
      method: "POST",
      body: formDataString,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  )
    .then(function (response) {
      // Check if the request was successful
      if (response) {
        return response; // Assuming your script returns JSON response
      } else {
        throw new Error("Failed to submit the form.");
      }
    })
    .then(function (data) {
      // Display a success message
      document.getElementById("message").textContent =
        "Data submitted successfully!";
      document.getElementById("message").style.display = "block";
      document.getElementById("message").style.backgroundColor = "green";
      document.getElementById("message").style.color = "beige";
      document.getElementById("submit-button").disabled = false;
      document.getElementById("form").reset();

      setTimeout(function () {
        document.getElementById("message").textContent = "";
        document.getElementById("message").style.display = "none";
      }, 2600);
    })
    .catch(function (error) {
      // Handle errors, you can display an error message here
      console.error(error);
      document.getElementById("message").textContent =
        "An error occurred while submitting the form.";
      document.getElementById("message").style.display = "block";
    });
});
