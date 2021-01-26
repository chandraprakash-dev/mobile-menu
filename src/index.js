import renderView from "./render";

const views = document.querySelector("footer");
views.addEventListener("click", renderView);

const homeView = document.getElementById("home");
homeView.click();

const close = document.querySelector("#close");

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownContainer = document.querySelector(".dropdown-container");

function toggle() {
  dropdownContainer.classList.toggle("show");
}

dropdownToggle.addEventListener("click", toggle);
close.addEventListener("click", toggle);
