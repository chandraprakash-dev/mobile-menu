!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";let r,o;n.r(t);var c=function(e){o&&o.classList.remove("highlight"),o=e.target.closest("div"),o&&(o.classList.add("highlight"),function(e){r&&r.classList.remove("show"),r=document.getElementById(e.id+"-content"),r.classList.add("show")}(o))};const i=document.querySelector("main");document.querySelector("footer").addEventListener("click",c);document.getElementById("home").click();const u=document.querySelector(".closebtn");document.querySelector(".nav-toggle").addEventListener("click",(function(){document.querySelector(".sidenav").style.width="250px",i.classList.add("mobile-gray")})),u.addEventListener("click",(function(){document.querySelector(".sidenav").style.width="0",i.classList.remove("mobile-gray")}))}]);