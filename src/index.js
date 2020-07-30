import renderView from './render';
const dropdown = require('dropdown-odin');

const views = document.querySelectorAll('.view');
views.forEach(view => view.addEventListener('click', renderView.bind(view, view.id)));

const more = document.querySelector('#more');
const div = dropdown('...', ['one', 'two', 'three']);
more.appendChild(div);


