import renderView from "./render";

const views = document.querySelector("footer");
views.addEventListener("click", renderView);

const homeView = document.getElementById("home");
homeView.click();

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownList = document.querySelector(".dropdown-list");

function toggle() {
  // const { maxHeight } = window.getComputedStyle(dropdownList);
  // if (maxHeight === "0px") {
  //   dropdownList.style.height = "100%";
  // } else {
  //   dropdownList.style.maxHeight = null;
  // }
  dropdownList.classList.remove("hidden");
}

dropdownToggle.addEventListener("click", toggle);
