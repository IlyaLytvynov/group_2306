export class Button {
  constructor(parent, text, bgColor, callbackFn) {
    this.parent = parent;
    this.text = text;
    this.callbackFn = callbackFn;
    this.bgColor = bgColor;
  }

  render() {
    this.el = document.createElement('button');
    this.el.style.background = this.bgColor || 'transparent';
    this.el.style.padding = '20px';
    this.el.style.border = '2px solid black';
    this.el.style.color = '#000';
    this.el.textContent = this.text;
    this.el.addEventListener('click', this.callbackFn);
    this.parent.append(this.el);
  }
}

export class RoundButton extends Button {
  render() {
    super.render();
    this.el.style.borderRadius = '50%';
  }
}

export class TextButton extends Button {
  render() {
    super.render();
    this.el.style.background = 'transparent';
    this.el.style.border = 'none';
  }
}
