let content;
let view;

function show(view) {
  if (content) {
    content.classList.remove("show");
  }

  content = document.getElementById(`${view.id}-content`);
  content.classList.add("show");
}

function renderView(event) {
  if (view) {
    view.classList.remove("highlight");
  }

  view = event.target.closest("div");

  if (!view) return;

  view.classList.add("highlight");
  show(view);
}

export default renderView;
