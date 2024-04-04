// Toggle Dark Mode
function toggleDark() {
  let body = document.getElementById('body');
  let html = document.getElementById('html');
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  else {
    body.classList.add('dark');
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Toggle Card Display
var cardsOpen = 0;
function toggleCard(id) {
  let container = document.getElementById('cardContainer');
  let item = document.getElementById(id);
  let btn = document.getElementById(`${id}Btn`);
  if (item.classList.contains('card-open')) {
    item.classList.remove('card-open');
    btn.innerHTML = 'Open';
    cardsOpen -= 1;
    if (cardsOpen < 1) {
      container.classList.remove('card-open');
    }
  }
  else {
    cardsOpen += 1;
    item.classList.add('card-open');
    container.classList.add('card-open');
    btn.innerHTML = 'Close';
  }
}

// Toggle Focus
function giveFocus(id) {
  let item = document.getElementById(id);
  if (item.classList.contains('card-focus')) {
    item.classList.remove('card-focus');
  }
  else {
    item.classList.add('card-focus');
  }
}