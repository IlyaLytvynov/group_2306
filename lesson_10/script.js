function openLogInWindow() {
  const name = prompt('Enter name');

  if (name === 'Vasya') {
    const password = prompt('Enter password');
    if (password === '123') {
      alert('Hello ADMIN!');
    } else {
      alert("I don't know you");
    }
  } else {
    alert("I don't know you");
  }
}

// openLogInWindow();

// ESNext
// DOM Document Object Model <= HTML
// BOM Browser Object Model
