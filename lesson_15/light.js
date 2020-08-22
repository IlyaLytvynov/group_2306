export class Light {
  constructor(parent, color) {
    this.parent = parent;
    this.color = color;
    this.isEnabled = false;
  }

  render() {
    this.el = document.createElement('div');
    this.el.classList.add('light');
    this.el.style.backgroundColor = 'grey';
    this.parent.append(this.el);
  }

  toggleOn() {
    this.isEnabled = true;
    this.el.style.backgroundColor = 'red';
    console.log(this.el);
  }

  toggleOff() {
    this.isEnabled = false;
    this.el.style.backgroundColor = 'grey';
  }
}
