import "./style.css";
import { addPost } from "./components/timeline";
import parseCoords from "./utils/parseCoords";
import { showModal } from "./components/modal";

// Добавляем определение input!
const input = document.getElementById("input");

let isProcessing = false;

input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (isProcessing) return;
    isProcessing = true;

    const text = input.value.trim();
    if (!text) {
      isProcessing = false;
      return;
    }

    try {
      const position = await getPosition();
      addPost(text, position.coords.latitude, position.coords.longitude);
      input.value = "";
    } catch {
      const userCoords = await showModal();
      if (!userCoords) {
        alert("Координаты не введены");
        isProcessing = false;
        return;
      }
      try {
        const { lat, lng } = parseCoords(userCoords);
        addPost(text, lat, lng);
        input.value = "";
      } catch {
        alert("Неверный формат координат");
        isProcessing = false;
        return;
      }
    }

    isProcessing = false;
  }
});
