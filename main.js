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
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const imgSpeed = document.querySelector('svg');
imgSpeed.style.fill = 'red';

btn1.addEventListener('click', () => {
  console.log('btn1');
  imgSpeed.style.fill = 'red';
  console.dir(imgSpeed);
});

function animateFill(color) {
  const circle = document.getElementById('circle');
  const currentFill = circle.getAttribute('fill');
  let fillPercentage = 0;
  let targetFill = '';

  switch (color) {
    case 'lvl1':
      fillPercentage = 33;
      targetFill = '#7A0BC0';
      break;
    case 'lvl2':
      fillPercentage = 66;
      targetFill = '#0B8AC0';
      break;
    case 'lvl3':
      fillPercentage = 99;
      targetFill = '#E105E5';
      break;
  }

  if (currentFill === 'none') {
    circle.setAttribute('fill', targetFill);
  } else {
    const currentPercentage = parseInt(currentFill);
    const interval = setInterval(function () {
      if (currentPercentage < fillPercentage) {
        currentPercentage++;
        circle.setAttribute('fill', `${targetFill} ${currentPercentage}%`);
      } else {
        clearInterval(interval);
      }
    }, 10);
  }
}
