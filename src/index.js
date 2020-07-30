const dropdown = require('dropdown-odin');

const more = document.querySelector('#more');

const div = dropdown('...', ['one', 'two', 'three']);
more.appendChild(div);
console.log(more);
