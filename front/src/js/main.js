function setupPhoneInputBehavior(inputElement) {
  inputElement.addEventListener("focus", function () {
    if (!inputElement.value.trim()) {
      inputElement.value = "+380";
    }
  });

  inputElement.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (!value.startsWith("380")) {
      value = "380";
    }
    e.target.value = "+" + value;
  });

  inputElement.addEventListener("blur", function () {
    if (inputElement.value === "+380") {
      inputElement.value = "";
    }
  });
}

const phoneInput = document.getElementById("phoneInput");
if (phoneInput) setupPhoneInputBehavior(phoneInput);

const modalPhoneInput = document.getElementById("modalPhoneInput");
if (modalPhoneInput) setupPhoneInputBehavior(modalPhoneInput);

const openBtn = document.querySelector(".hero-button");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
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
