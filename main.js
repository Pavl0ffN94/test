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
console.log(arrow);

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
