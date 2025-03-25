import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phoneInput").value.trim();

    try {
      const response = await axios.post("http://127.0.0.1:8000/send-email/", { name, phone }, { headers: { "Content-Type": "application/json" } });

      alert("Заявка успішно відправлена!");
      form.reset();
    } catch (error) {
      console.error("Помилка відправки:", error.response ? error.response.data : error.message);
      alert("Не вдалося відправити заявку. Спробуйте ще раз.");
    }
  });
});
