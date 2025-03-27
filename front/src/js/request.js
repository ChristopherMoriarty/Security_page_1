import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const mainForm = document.querySelector(".form");
  const modalForm = document.querySelector(".modal-form");
  const modalElement = document.getElementById("modal");

  mainForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phoneInput").value.trim();

    try {
      await axios.post("http://127.0.0.1:8080/send-email/", { name, phone });
      alert("Заявка успішно відправлена!");
      mainForm.reset();
      modalElement.style.display = "none";
      document.body.classList.remove("modal-open");
    } catch (error) {
      console.error("Помилка відправки:", error);
      alert("Не вдалося відправити заявку. Спробуйте ще раз.");
    }
  });

  modalForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = modalForm.querySelector("[name='modalName']").value.trim();
    const phone = modalForm.querySelector("[name='modalPhone']").value.trim();

    try {
      await axios.post("http://127.0.0.1:8080/send-email/", { name, phone });
      alert("Заявка успішно відправлена!");
      modalForm.reset();

      if (modalElement) {
        modalElement.style.display = "none";
      }
    } catch (error) {
      console.error("Помилка відправки:", error);
      alert("Не вдалося відправити заявку. Спробуйте ще раз.");
    }
  });
});
