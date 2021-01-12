const home = document.querySelector('#home');

function renderView(view) {
  const preViewIcon = document.querySelector('.active');
  const preView = document.querySelector('.show');

  if (preViewIcon) {
    if (preViewIcon === this) return;
    preViewIcon.classList.remove('active');
    preView.classList.remove('show');
  }

  this.classList.add('active');

  const viewContent = document.querySelector(`#${view}-content`);
  viewContent.classList.add('show');
}

renderView.call(home, home.id);

export default renderView;
