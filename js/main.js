document.addEventListener('DOMContentLoaded', function() {
  // Create audio element
  const bgMusic = document.createElement("audio");
  bgMusic.src = "audio/fallinlove.mp3";// Corrected file path
  bgMusic.loop = true;
  bgMusic.volume = 0.2;

  // Attempt to autoplay the music
  bgMusic.play().catch((error) => {
      console.log("Autoplay blocked by browser: ", error);
  });

  // Create a small music control
  const musicControl = document.createElement("div");
  musicControl.style.position = "fixed";
  musicControl.style.bottom = "10px";
  musicControl.style.right = "10px";
  musicControl.style.zIndex = "1000";
  musicControl.style.background = "rgba(0,0,0,0.5)";
  musicControl.style.padding = "5px";
  musicControl.style.borderRadius = "5px";
  musicControl.style.cursor = "pointer";
  musicControl.innerHTML = "🔊";
  musicControl.style.color = "white";

  // Toggle music on click
  musicControl.addEventListener('click', function() {
      if (bgMusic.paused) {
          bgMusic.play();
          musicControl.innerHTML = "🔊";
      } else {
          bgMusic.pause();
          musicControl.innerHTML = "🔇";
      }
  });

  // Fallback: Play on first user interaction if autoplay is blocked
  document.body.addEventListener('click', function() {
      if (bgMusic.paused) {
          bgMusic.play().catch(e => console.log("Couldn't autoplay audio: ", e));
      }
  }, {once: true});

  document.body.appendChild(bgMusic);
  document.body.appendChild(musicControl);
});

onload = () => {
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");

      const titles = ('Happy Birthday my love!').split('')
      const titleElement = document.getElementById('title');
      let index = 0;

      function appendTitle() {
          if (index < titles.length) {
              titleElement.innerHTML += titles[index];
              index++;
              setTimeout(appendTitle, 200); // 1000ms delay
          }
      }

      appendTitle();

      clearTimeout(c);
  }, 1000);
};
