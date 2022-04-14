const humberg = document.querySelector('.navigation');
const navList = document.querySelector('.nav-list');
const times = document.querySelector('.times');
const navLink = document.querySelectorAll('.nav-link');

function closeNavItems() {
  navList.classList.replace('open', 'nav-list');
  navList.style.display = '';
}
humberg.addEventListener('click', () => {
  navList.classList.replace('nav-list', 'open');
  times.classList.add('fa-times');
  navList.style.display = 'block';
});

times.addEventListener('click', () => {
  closeNavItems();
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth > 768) {
      closeNavItems();
    }
  });
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
