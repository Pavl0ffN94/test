//Burger menu
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav-menu');
  const burger = document.querySelector('.wrapper');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
    menu.classList.toggle('nav-menu__active');
  });
});

//Speedometer

const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = {circumference};

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const arrow = document.querySelector('.speed-arrow ');

const color1 = '#7A0BC0';
const color2 = '#0B8AC0';
const color3 = '#fa58b6';

btn1.addEventListener('click', () => {
  arrow.classList.add('lvl-1');
  arrow.classList.remove('lvl-2', 'lvl-3');
  circle.style.stroke = color1;
  setProgress(33);
});

btn2.addEventListener('click', () => {
  arrow.classList.add('lvl-2');
  arrow.classList.remove('lvl-1', 'lvl-3');
  circle.style.stroke = color2;
  setProgress(66);
});

btn3.addEventListener('click', () => {
  arrow.classList.add('lvl-3');
  arrow.classList.remove('lvl-2', 'lvl-1');
  circle.style.stroke = color3;
  setProgress(98);
});
setProgress(33);

/* Prize*/

const prize = document.querySelector('.prize');
const prizeImg = document.querySelectorAll('.prize img');
const right = document.querySelector('.right-btn');
const left = document.querySelector('.left-btn');

let curentSlide = 0;

let slideWidth = prizeImg[0].clientWidth;

prize.style.transform = `translateX(${-slideWidth * curentSlide}px)`;

function slide() {
  if (curentSlide >= prizeImg.length - 1) {
    curentSlide = 0;
  } else {
    curentSlide++;
  }
  prize.style.transition = 'transform 0.3s ease-in-out';
  prize.style.transform = `translateX(${-slideWidth * curentSlide}px)`;
}
left.addEventListener('click', () => {
  slide();
});

right.addEventListener('click', () => {
  if (curentSlide <= 0) {
    curentSlide = prizeImg.length - 1;
  } else {
    curentSlide--;
  }
  prize.style.transition = 'transform 0.3s ease-in-out';
  prize.style.transform = `translateX(${-slideWidth * curentSlide}px)`;
});

/* horizontal change of blocks */

const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const sec1 = document.querySelector('.section1');
const sec2 = document.querySelector('.section2');

btnNext.addEventListener('click', () => {
  sec1.style.transition = '0.9s all  ease-in-out';
  sec2.style.transition = ' 0.3s all  ease-in-out';
  sec1.classList.add('nonision');
  sec2.classList.add('show');
});

btnPrev.addEventListener('click', () => {
  sec1.style.transition = '0.9s all  ease-in-out';
  sec2.style.transition = ' 0.3s all ease-in-out';

  sec1.classList.remove('nonision');
  sec2.classList.remove('show');
});
