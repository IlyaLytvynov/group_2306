const domEl = document.querySelector('.bulb');
let isActive = false;
const initialBackgroundColor = domEl.style.backgroundColor;
const ACTIVE_CLASS_NAME = 'bulb_active';

function getRandomColor() {
  const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'aqua',
    'magenta',
    'limegreen',
    'brown',
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

function disable() {
  domEl.classList.remove(ACTIVE_CLASS_NAME);
  domEl.style.backgroundColor = initialBackgroundColor;
  isActive = false;
}

function enable() {
  isActive = true;
  domEl.classList.add(ACTIVE_CLASS_NAME);
  domEl.style.backgroundColor = getRandomColor();
}

function clickHandler() {
  if (isActive === true) {
    disable();
  } else {
    enable();
  }
}

domEl.onclick = clickHandler;
