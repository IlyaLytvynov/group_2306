import { Light } from './light.js';
import { Button } from './button.js';
const body = document.querySelector('body');
const myLight = new Light(body, 'red');
const btnOff = new Button(body, 'Off', 'red', function () {
  myLight.toggleOff();
});
const btnOn = new Button(body, 'On', 'green', function () {
  myLight.toggleOn();
});
btnOn.render();
btnOff.render();
myLight.render();
