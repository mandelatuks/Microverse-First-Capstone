const humbergerBtn = document.querySelector('.hamburger');
const closeButton = document.querySelector('.closeb');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-link');

function menuToglling() {
  if (navMenu.classList.contains('menuShow')) {
    navMenu.classList.remove('menuShow');
    closeButton.style.dislay = 'none';
    humbergerBtn.style.dislay = 'block';
    navMenu.style.dislay = 'none';
  } else {
    navMenu.classList.add('menuShow');
    closeButton.style.dislay = 'block';
    humbergerBtn.style.dislay = 'none';
    navMenu.style.dislay = 'block';
  }
}

humbergerBtn.addEventListener('click', menuToglling);
closeButton.addEventListener('click', menuToglling);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', menuToglling);
});


