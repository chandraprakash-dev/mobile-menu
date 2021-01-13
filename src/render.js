let content;

function renderView(event) {
  const view = event.target.closest("div");
  if (!view) return;

  if (content) {
    content.classList.remove("show");
  }

  content = document.getElementById(`${view.id}-content`);
  content.classList.add("show");
}

export default renderView;
