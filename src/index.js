import './sass/main.scss';
import cardTemplate from './templates/card.hbs';
import menu from './menu.json';


const menuList = document.querySelector('.js-menu');
const cardItem = cardTemplate(menu);
const switchButton = document.querySelector('.theme-switch__toggle');
const bodyColor = document.querySelector('body');
const savedTheme = localStorage.getItem('website-theme');

menuList.insertAdjacentHTML('beforeend', cardItem);
bodyColor.classList.add('light-theme');
switchButton.addEventListener('change', changeTheme);

function changeTheme() {
  if(switchButton.checked) {
    bodyColor.classList.replace('light-theme','dark-theme');
    localStorage.setItem('website-theme', bodyColor.classList);
    
  } 
  else {
    bodyColor.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('website-theme', bodyColor.classList);
  }
  
}

function storedTheme() {
  if(savedTheme === 'dark-theme') {
    bodyColor.classList.replace('light-theme','dark-theme');
    switchButton.checked = true;

  } else {
    bodyColor.classList.replace('dark-theme', 'light-theme');
  }
}
storedTheme();