import renderView from "./render";

const views = document.querySelector("footer");
views.addEventListener("click", renderView);

const homeView = document.getElementById("home");
homeView.click();
