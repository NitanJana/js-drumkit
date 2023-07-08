function playSound(e) {
  //audio with the same data attribute as the code property of key pressed
  const audio = document.querySelector(`audio[data-key=${e.code}]`);
  const key = document.querySelector(`.key[data-key=${e.code}]`);

  //to ignore other keypress than intended
  if (!audio) return;

  // to play sound in rapid succession
  audio.currentTime = 0;

  audio.play();
  // to add visual transition to the key playing
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');

// remove transition after playing is done
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playSound);