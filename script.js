const buttons = Array.from(document.querySelectorAll("[data-buttons]"));
const audios = Array.from(document.querySelectorAll("[data-audio]"));
const audio = document.getElementById("buttonAudio");
let currentAudio;
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = audios[i];

    audios[i].play();
  });
});
