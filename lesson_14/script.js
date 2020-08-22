import { selectCreator } from './select.js';
import { createSelect } from './selectDinamic.js';

const select1 = document.querySelector('#select1');
selectCreator(select1);

createSelect(document.querySelector('.container'), ['Usa', 'Canada', 'China']);
createSelect(document.querySelector('.container'), [
  'New York',
  'Montreal',
  'Pekin',
  'Paris',
  'London',
]);

function createCircles(count) {}

createCircles(100);
createCircles(20);

// const newElement = document.createElement('h1');

// newElement.textContent = "HELLO I'm new one!!";

// newElement.classList.add('new-element');
// newElement.style.backgroundColor = 'red';

// const body = document.querySelector('body');
// const container = body.querySelector('.container');
// body.append(newElement, container);
