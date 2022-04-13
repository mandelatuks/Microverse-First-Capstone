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

const featuredSpeakers = document.querySelector('.speakers-wrapper');

const speakersEvent = [
  {
    names: 'Yochai Benkler',
    image: 'images/image-1.png',
    work: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit.',
    Discription: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet molestiae molestias exercitationem...',

  },
  {
    names: 'Kilnam Chon',
    image: 'images/image-2.png',
    work: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit.',
    Discription: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet molestiae molestias exercitationem...',

  },
  {
    names: 'SohYeong Noh',
    image: 'images/image-3.png',
    work: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit.',
    Discription: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet molestiae molestias exercitationem...',

  },
  {
    names: 'Julia Ledar',
    image: 'images/image-4.png',
    work: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit.',
    Discription: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet molestiae molestias exercitationem...',

  },
  {
    names: 'Lila Tretikov',
    image: 'images/image-5.png',
    work: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit.',
    Discription: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet molestiae molestias exercitationem...',

  },
  {
    names: 'Ryan Merkey',
    image: 'images/image-6.png',
    work: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit.',
    Discription: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet molestiae molestias exercitationem...',

  },
];

speakersEvent.forEach((guest) => {
  if (featuredSpeakers) {
    featuredSpeakers.innerHTML += `<article class="event-speakers">
    <img src="${guest.image}" alt="speaker image">
    <div>
    <h4>${guest.names}</h4>
    <p class="info-speaker">
    ${guest.work}
    </p>
    <hr class="bottom">
    <p class="speaker-work"> 
    ${guest.Discription}
    </p>
    </div>
    </article>`;
  }
});
