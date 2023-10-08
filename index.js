const menu = document.querySelector('.menu');
const button = document.querySelectorAll('button.hamburger-btn');
const hamburgers = document.querySelectorAll('.hamburger-menu');
const mainMenu = document.querySelectorAll('main-menu');

button.onClick = menuClick;

function menuClick() {
  if (hamburgers.getAttribute(aria-expanded === 'true')) {
    hamburgers.classList.add('show-menu');
    button.setAttribute (aria-expanded === 'true');
    mainMenu.style.display = 'block';
  } else {
    hamburgers.classList.remove('show-menu');
    button.setAttribute (aria-expanded === 'false');
    button.focus();
    mainMenu.style.display = 'none';
  }
}

mainMenu.addEventListener.onClick (function(e) {
  e.stopPropagation();
});

document.addEventListener('click', function(e) {
  if (menu.contains(e.target)) {
    hamburgers.classList.remove('show-menu');
    button.setAttribute (aria-expanded === 'false');
    mainMenu.style.display = 'none';
  }
});

document.onkeyup = function(e) {
  if (e.key === 'escape') {
    hamburgers.classList.remove('show-menu');
    button.setAttribute (aria-expanded === 'false');
    button.focus();
  }
};

