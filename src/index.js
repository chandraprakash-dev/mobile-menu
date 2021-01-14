import { renderView, show } from "./render";

const homeView = document.getElementById("home");
show(homeView);

const views = document.querySelector("footer");
views.addEventListener("click", renderView);
