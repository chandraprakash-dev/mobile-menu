let content;

function show(view) {
  if (content) {
    content.classList.remove("show");
  }

  content = document.getElementById(`${view.id}-content`);
  content.classList.add("show");
}

function renderView(event) {
  const view = event.target.closest("div");
  if (!view) return;

  show(view);
}

export { renderView, show };
