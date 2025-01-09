document.querySelector('.menu-open').addEventListener('click', function () {
  const nav = document.querySelector('.nav');
  if (nav.classList.contains('nav-close')) {
      nav.classList.remove('nav-close');
      nav.classList.add('nav-open');
  }
});

document.querySelector('.menu-close').addEventListener('click', function () {
  const nav = document.querySelector('.nav');
  if (nav.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      nav.classList.add('nav-close');
  }
});
