import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const mainForm = document.querySelector(".form");
  const modalForm = document.querySelector(".modal-form");
  const modalElement = document.getElementById("modal");
  const notyf = new Notyf({
    position: {
      x: "right",
      y: "top",
    },
  });

  if (mainForm) {
    mainForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phoneInput").value.trim();

      try {
        await axios.post("https://liverpool-ua.com/api/send-email/", { name, phone });
        mainForm.reset();

        if (modalElement) {
          modalElement.style.display = "none";
        }

        document.body.classList.remove("modal-open");
        notyf.success("Заявка успішно відправлена!");
      } catch (error) {
        console.error("Помилка відправки:", error);
        notyf.error("Сталася помилка. Спробуйте ще раз.");
      }
    });
  }

  if (modalForm) {
    modalForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = modalForm.querySelector("[name='modalName']").value.trim();
      const phone = modalForm.querySelector("[name='modalPhone']").value.trim();

      try {
        await axios.post("https://liverpool-ua.com/api/send-email/", { name, phone });
        modalForm.reset();
        notyf.success("Заявка успішно відправлена!");

        if (modalElement) {
          modalElement.style.display = "none";
        }
      } catch (error) {
        console.error("Помилка відправки:", error);
        notyf.error("Сталася помилка. Спробуйте ще раз.");
      }
    });
  }
});
