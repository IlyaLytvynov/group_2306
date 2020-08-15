const btns = document.querySelectorAll('.btn');
let isActive = false;

function getRandomChannel() {
  return Math.floor(Math.random() * 255);
}

function getRandomColor() {
  return `rgb(${getRandomChannel()}, ${getRandomChannel()}, ${getRandomChannel()})`;
}

function move() {
  isActive = true;
  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.setAttribute('data-my-cool-color', 'aqua');
    btn.style.transform = `translateX(${40 * (i + 1)}px)`;
    btn.style.transitionDelay = `${0.3 * i}s`;
    btn.style.backgroundColor = getRandomColor();
  }
}

function moveBack() {
  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.style.transform = `translateX(0px)`;
    btn.style.transitionDelay = `${0.3 * i}s`;
    btn.style.backgroundColor = btn.getAttribute('data-my-cool-color');
  }
  isActive = false;
}

for (let btn of btns) {
  btn.onclick = function () {
    if (isActive === true) {
      moveBack();
    } else {
      move();
    }
  };
}
