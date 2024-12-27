/* eslint-disable */
import '@babel/polyfill';
import { displayMap } from './maptiler';
import { login } from './login';

// DOM ELEMENTS
const mapTiler = document.getElementById('map');
const loginForm = document.querySelector('.form');

//DELEGATION
if (mapTiler) {
  const locations = JSON.parse(mapTiler.dataset.locations);
  displayMap(locations);
}

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
