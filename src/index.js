import _ from 'lodash';
import './load.js';
import './style.css';
import {header, mainbody, maintext, removeLanding} from './landing.js';
import {nav} from './nav.js';
import Cover from './img/cover.png';

const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(nav());
content.appendChild(mainbody());
const main = document.querySelector('.mainbody');
main.appendChild(maintext());

const mainimg = new Image();
mainimg.src = Cover;
main.appendChild(mainimg);

const menu = document.querySelector('.li');
menu.addEventListener('click', function(event) {
  removeLanding();
});

