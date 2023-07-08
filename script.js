function playSound(keyValue) {
  //audio with the same data attribute as the code property of key pressed
  
  const audio = document.querySelector(`audio[data-key="${keyValue}"]`);
  const key = document.querySelector(`.key[data-key="${keyValue}"]`);

  //to ignore other keypress than intended
  if (!audio || !key) return;

  // to play sound in rapid succession
  audio.currentTime = 0;

  audio.play();
  // to add visual transition to the key playing
  key.classList.add('playing');
}

function playSoundKeyBoard(e) {
  playSound(e.code);
}
function playSoundTouchScreen(e) {
  let target = e.target;
  // Traverse up the DOM tree until a .key element is found
  //it should play sound even when touching child nodes(texts) of the div
  while (target && !target.classList.contains('key')) {
    target = target.parentNode;
  }
  if (!target) return;

  const keyValue = target.getAttribute('data-key');
  playSound(keyValue);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');

// remove transition after playing is done
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// For touch-enabled devices
keys.forEach(key => key.addEventListener('touchstart',playSoundTouchScreen))

// For keyboard enabled devices
window.addEventListener("keydown", playSoundKeyBoard);