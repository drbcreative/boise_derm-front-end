// Navigation

// get elements
const menuToggle = document.querySelector('.menu-toggle'),
  mainMenu = document.querySelector('.main-menu'),
  dropLink = document.querySelectorAll('.drop-link');

// functions
const menuDropMobile = () => {
  const winWidth = window.innerWidth;
  console.log(winWidth);
  if (winWidth < 992) {
    dropLink.forEach(navLink => {
      navLink.addEventListener('click', e => {
        const thisLink = e.target.closest('.drop-link');
        const dropMenu = thisLink.querySelector('.drop-menu');
        dropMenu.classList.toggle('menu-open');
      });
    });
  } else {
    return;
  }
}

// allow click on dropdowns only on mobile
window.addEventListener('DOMContentLoaded', () => {
  menuDropMobile();
});
window.addEventListener('onresize', () => {
  menuDropMobile();
});