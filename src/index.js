import menuCardTpl from './templates/menu-card.hbs';
import menu from './menu.json'
import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuCards = document.querySelector('.js-menu');
const themeSwitchControl = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

themeSwitchControl.addEventListener('change', changeSwitchControl);

setLocalStorage();

const markup = menuCardTpl(menu);
menuCards.insertAdjacentHTML('beforeend', markup);


function changeSwitchControl() {

  const check = themeSwitchControl.checked;

  if (check) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem("theme", "dark-theme");
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem("theme", "light-theme");

  }
}

function setLocalStorage() {

  const getTheme = localStorage.getItem("theme");

  if (getTheme === 'dark-theme') {
    body.classList.add(Theme.DARK);
    themeSwitchControl.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
  }
}