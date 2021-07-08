import menuCardTpl from '../templates/menu-card.hbs';
import menu from '../menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuCards = document.querySelector('.js-menu');
const themeSwitchControl = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');


body.classList.add(Theme.LIGHT);

setLocalStorage();

themeSwitchControl.addEventListener('change', changeSwitchControl);

const markup = menuCardTpl(menu);
menuCards.insertAdjacentHTML('beforeend', markup);



function changeSwitchControl() {

  const check = themeSwitchControl.checked;

  if (check) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem("theme", "dark-theme");
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem("theme", "light-theme");

  }
}

function setLocalStorage() {

  const getTheme = localStorage.getItem("theme");

  if (getTheme === 'dark-theme') {
    body.classList.add(Theme.DARK);
    themeSwitchControl.checked = true;
    localStorage.setItem("theme", "dark-theme");

  } else {
    localStorage.setItem("theme", "light-theme");
  }
}