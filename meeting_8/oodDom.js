export class ParagraphPreview {
  constructor(parent, title, contant) {
    this.parent = parent;
    this.title = title;
    this.contant = contant;
    this.isExpand = false;
  }
  render() {
    this.root = document.createElement('div');
    this.el1 = document.createElement('h1');
    this.el2 = document.createElement('p');
    this.el1.textContent = this.title;
    this.el2.textContent = this.contant;
    this.el2.classList.add('preview__content');

    this.root.classList.add('preview');
    this.root.append(this.el1);
    this.root.append(this.el2);
    this.parent.append(this.root);
    // ПОТЕРЯ КОНТЕКСТА
    this.el1.addEventListener('click', () => {
      console.log(this);
      this.toggle();
    });
  }

  toggle() {
    console.log(this);
    if (this.isExpand) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  expand() {
    this.isExpand = true;
    this.el2.classList.add('preview__content_expand');
  }

  collapse() {
    this.isExpand = false;
    this.el2.classList.remove('preview__content_expand');
  }
}
