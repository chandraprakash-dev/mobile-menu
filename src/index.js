import renderView from "./render";

const mobile = document.querySelector("main");

const views = document.querySelector("footer");
views.addEventListener("click", renderView);

const homeView = document.getElementById("home");
homeView.click();

const close = document.querySelector("#close");

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownContainer = document.querySelector(".dropdown-container");

function toggle() {
  dropdownContainer.classList.toggle("show");
  mobile.classList.toggle("mobile-gray");
}

dropdownToggle.addEventListener("click", toggle);
close.addEventListener("click", toggle);
