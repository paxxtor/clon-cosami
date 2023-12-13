const checkbox = document.getElementById('check');
const icon = document.querySelector('.checkbtn i');


checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    icon.classList.remove('bi-list');
    icon.classList.add('bi-x-lg');
  } else {
    icon.classList.remove('bi-x-lg');
    icon.classList.add('bi-list');
  }
});

var swiper = new Swiper('.swiper', {
  slidesPerView: getSlides(),
  loop:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}
function getSlides() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 1200 ? 2 : 4;

  return direction;
}