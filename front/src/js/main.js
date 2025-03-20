const phoneInput = document.getElementById("phoneInput");

phoneInput.addEventListener("focus", function () {
  if (!phoneInput.value.trim()) {
    phoneInput.value = "+380";
  }
});

phoneInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (!value.startsWith("380")) {
    value = "380";
  }
  e.target.value = "+" + value;
});

phoneInput.addEventListener("blur", function () {
  if (phoneInput.value === "+380") {
    phoneInput.value = "";
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const burgerMenu = document.getElementById("burgerMenu");
  const hamIcon = document.querySelector(".ham");
  const body = document.body;
  const menuLinks = document.querySelectorAll("#burgerMenu a");

  function closeMenu() {
    burgerMenu.classList.remove("open");
    hamIcon.classList.remove("active");
    body.classList.remove("no-scroll");
  }

  menuToggle.addEventListener("click", function () {
    burgerMenu.classList.toggle("open");
    hamIcon.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });
  document.addEventListener("click", function (event) {
    if (!burgerMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
