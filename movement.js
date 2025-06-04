let charactersMoved = false;

// reset button logic
function resetCharacters() {
  const char1 = document.getElementById("char1");
  const char2 = document.getElementById("char2");

  if (char1 && char2) {
    char1.style.left = "318px";
    char1.style.top = "102px";
    char2.style.left = "1170px";
    char2.style.top = "102px";
    char1.style.display = "block";
    char2.style.display = "block";

    hasTriggered = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener('keydown', function (e) {

    const active = document.activeElement;
    const isTyping = active.tagName === 'INPUT' || active.tagName === 'TEXTAREA';

    if (isTyping) return; // Don't move if the user is typing

    // character 1 (WASD)
    if (e.key === 'w') move('char1', 0, -10);
    if (e.key === 'a') move('char1', -10, 0);
    if (e.key === 's') move('char1', 0, 10);
    if (e.key === 'd') move('char1', 10, 0);

    // character 2 (Arrow keys)
    if (e.key === 'ArrowUp') move('char2', 0, -10);
    if (e.key === 'ArrowLeft') move('char2', -10, 0);
    if (e.key === 'ArrowDown') move('char2', 0, 10);
    if (e.key === 'ArrowRight') move('char2', 10, 0);
  });

  function move(id, dx, dy) {

    checkCharactersTouching();

    const el = document.getElementById(id);
    if (!el) return;

    const left = (parseInt(el.style.left) || 0) + dx;
    const top = (parseInt(el.style.top) || 0) + dy;
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;

    charactersMoved = true; // important to allow pin overlap detection

    if (typeof checkCharacterOverlap === "function") {
      checkCharacterOverlap();
    }

    if (typeof checkCharacterOverlapWithPins === "function") {
      checkCharacterOverlapWithPins();
    }

    if (typeof checkCookingSkillOverlap === "function") {
      checkCookingSkillOverlap();
    }

  }

});

// add sound to buttons, characters dissapear and user is sent to desired page
const sound = document.getElementById('button-sound');
let hasTriggered = false;

function playSoundAndGo(url) {
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }

  // Hide characters
  document.getElementById('char1').style.display = 'none';
  document.getElementById('char2').style.display = 'none';

  setTimeout(() => {
    window.location.href = url;
  }, 3500);
}

function checkOverlap() {
  const char1 = document.getElementById('char1').getBoundingClientRect();
  const char2 = document.getElementById('char2').getBoundingClientRect();

  document.querySelectorAll('.button-wrapper').forEach(wrapper => {
    const rect = wrapper.getBoundingClientRect();
    const overlap1 =
      char1.left < rect.right &&
      char1.right > rect.left &&
      char1.top < rect.bottom &&
      char1.bottom > rect.top;

    const overlap2 =
      char2.left < rect.right &&
      char2.right > rect.left &&
      char2.top < rect.bottom &&
      char2.bottom > rect.top;

    if (overlap1 && overlap2 && !hasTriggered) {
      hasTriggered = true;
      const url = wrapper.dataset.url;
      playSoundAndGo(url);
    }
  });
}

document.addEventListener('keydown', () => {
  setTimeout(checkOverlap, 20);
});


// heart appears when the two characters overlap
function checkCharactersTouching() {
  const char1 = document.getElementById('char1');
  const char2 = document.getElementById('char2');
  const heart = document.getElementById('love-heart');

  const rect1 = char1.getBoundingClientRect();
  const rect2 = char2.getBoundingClientRect();

  const isTouching = rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top;

  if (isTouching) {
    const centerX = (rect1.left + rect2.left) / 2 + window.scrollX + 20;
    const centerY = (Math.min(rect1.top, rect2.top)) + window.scrollY - 40;

    heart.style.left = `${centerX}px`;
    heart.style.top = `${centerY}px`;
    heart.classList.remove('hidden');
  } else {
    heart.classList.add('hidden');
  }
}
