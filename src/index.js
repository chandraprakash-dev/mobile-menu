import renderView from "./render";
import "./hamburger-menu";

const views = document.querySelectorAll(".view");
views.forEach((view) =>
  view.addEventListener("click", renderView.bind(view, view.id))
);
