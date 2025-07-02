let charactersMoved = false;

// reset button logic
function resetCharacters() {

  //doesnt work yet
  //position still hardcoded
  alignCharactersToStartMarkers();

  const char1 = document.getElementById("char1");
  const char2 = document.getElementById("char2");

  if (char1 && char2) {
    // char1.style.left = "318px";
    //char1.style.top = "102px";
    //char2.style.left = "1170px";
    //  char2.style.top = "102px";
    char1.style.display = "block";
    char2.style.display = "block";

    hasTriggered = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {

  setTimeout(() => {
    alignCharactersToStartMarkers();
  }, 150); //TODO: optimize needed time!


  window.addEventListener('resize', () => {
    if (!charactersMoved) {
      alignCharactersToStartMarkers();
    }
  });

  const keysPressed = {};


  document.addEventListener('keydown', e => {
    keysPressed[e.key] = true;
    handleMovement();
  });

  document.addEventListener('keyup', e => {
    keysPressed[e.key] = false;
  });

  // for continous and smoother movement
  setInterval(() => {
    handleMovement();
  }, 40); // ms unit

  function handleMovement() {

    // Don't move the characters if the user is typing
    const active = document.activeElement;
    const isTyping = active.tagName === 'INPUT' || active.tagName === 'TEXTAREA';

    if (isTyping) return;

    // Character 1 (WASD)
    if (keysPressed['w']) move('char1', 0, -10);
    if (keysPressed['a']) move('char1', -10, 0);
    if (keysPressed['s']) move('char1', 0, 10);
    if (keysPressed['d']) move('char1', 10, 0);

    // Character 2 (Arrow keys)
    if (keysPressed['ArrowUp']) move('char2', 0, -10);
    if (keysPressed['ArrowLeft']) move('char2', -10, 0);
    if (keysPressed['ArrowDown']) move('char2', 0, 10);
    if (keysPressed['ArrowRight']) move('char2', 10, 0);



  }


  function move(id, dx, dy) {

    checkCharactersTouching();


    const el = document.getElementById(id);
    if (!el) return;

    const elRect = el.getBoundingClientRect();
    const containerRect = document.body.getBoundingClientRect();

    // current position
    let left = (parseInt(el.style.left) || 0) + dx;
    let top = (parseInt(el.style.top) || 0) + dy;

    // character size
    const width = el.offsetWidth;
    const height = el.getBoundingClientRect().height + 1;
    //used this height so that the scale of 0.8 is accounted for

    // Clamp to viewport
    const maxLeft = window.innerWidth - width;
    const maxTop = window.innerHeight - height;

    left = Math.max(0, Math.min(left, maxLeft));
    top = Math.max(0, Math.min(top, maxTop));

    // apply movement
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


// checks for overlap
function isOverlapping(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

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

    const overlap1 = isOverlapping(char1, rect);
    const overlap2 = isOverlapping(char2, rect);

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

  const isTouching = isOverlapping(rect1, rect2);

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


// check overlap of characters and elements
function checkCharacterOverlapForElements(selector, onOverlap, onNoOverlap) {
  const char1 = document.getElementById('char1').getBoundingClientRect();
  const char2 = document.getElementById('char2').getBoundingClientRect();

  let anyOverlap = false;

  document.querySelectorAll(selector).forEach(el => {
    const rect = el.getBoundingClientRect();
    const isOverlap = isOverlapping(char1, rect) || isOverlapping(char2, rect);

    if (isOverlap) {
      anyOverlap = true;
      onOverlap(el);
    } else {
      onNoOverlap?.(el);
    }
  });

  return anyOverlap;
}

function alignCharactersToStartMarkers() {
  const char1 = document.getElementById("char1");
  const char2 = document.getElementById("char2");

  const pair1 = document.querySelectorAll(".character-pair")[0];
  const pair2 = document.querySelectorAll(".character-pair")[1];

  if (char1 && pair1) {
    const markerRect = pair1.getBoundingClientRect();
    const charRect = char1.getBoundingClientRect();

    //const charWidth = char1.offsetWidth * 0.8;  // scale was applied in CSS
    //const charHeight = char1.offsetHeight * 0.8;


    const left = markerRect.left + markerRect.width / 2 - charRect.width / 2;
    const top = markerRect.top - charRect.height + 4; // 4 = half of start marker height

    //const top = markerRect.top + markerRect.height / 2 - charRect.height + 50; // simulate top: -50px
    char1.style.left = `${left}px`;
    char1.style.top = `${top}px`;
  }

  if (char2 && pair2) {
    const markerRect = pair2.getBoundingClientRect();

    const charRect = char2.getBoundingClientRect();

    //const charWidth = char2.offsetWidth * 0.8;
    //const charHeight = char2.offsetHeight * 0.8;

    const left = markerRect.left + markerRect.width / 2 - charRect.width / 2;
    const top = markerRect.top - charRect.height + 4;


    //const top = markerRect.top + markerRect.height / 2 - charRect.height + 20;
    char2.style.left = `${left}px`;
    char2.style.top = `${top}px`;
  }
}
