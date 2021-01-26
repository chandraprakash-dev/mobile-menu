import renderView from "./render";

const content = document.querySelector("main");

const views = document.querySelector("footer");
views.addEventListener("click", renderView);

const homeView = document.getElementById("home");
homeView.click();

const close = document.querySelector(".closebtn");
const navToggle = document.querySelector(".nav-toggle");

function openNav() {
  document.querySelector(".sidenav").style.width = "250px";
  content.classList.add("mobile-gray");
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  content.classList.remove("mobile-gray");
}

navToggle.addEventListener("click", openNav);
close.addEventListener("click", closeNav);
