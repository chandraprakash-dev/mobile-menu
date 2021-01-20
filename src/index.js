import renderView from "./render";

const views = document.querySelector("footer");
views.addEventListener("click", renderView);

const homeView = document.getElementById("home");
homeView.click();

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownList = document.querySelector(".dropdown-list");

function toggle() {
  const { maxHeight } = window.getComputedStyle(dropdownList);
  if (maxHeight === "0px") {
    dropdownList.style.maxHeight = `${dropdownList.scrollHeight}px`;
  } else {
    dropdownList.style.maxHeight = null;
  }
}

dropdownToggle.addEventListener("click", toggle);
