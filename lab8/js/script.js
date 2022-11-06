document
  .querySelector('.navbar__menu-icon')
  .addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    document.querySelector('.navbar__menu').classList.toggle('active');
    document.body.classList.toggle('lock');
  });
