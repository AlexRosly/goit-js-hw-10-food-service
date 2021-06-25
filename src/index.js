import descriptionCardTpl from './templates/description-card.hbs';
import menu from './menu.json'
import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuCards = document.querySelector('.js-menu');
const themeSwitchControl = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
// console.log(themeSwitchControl);
themeSwitchControl.addEventListener('change', changeSwitchControl);

setLocalStorage();

const markup = descriptionCardTpl(menu);
menuCards.insertAdjacentHTML('beforeend', markup);

function changeSwitchControl(e) {
  console.log(e.target.checked);
  const check = themeSwitchControl.checked;
  console.log(check);
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
  console.log(getTheme);
  if (getTheme === 'dark-theme') {
    body.classList.add(Theme.DARK);
    themeSwitchControl.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
  }
}