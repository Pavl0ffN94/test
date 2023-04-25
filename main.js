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
window.addEventListener('DOMContentLoaded', () => {
  const arrow = document.querySelector('.speed__arow ');
  const button1 = document.querySelector('.btn1');
  const button2 = document.querySelector('button2');
  const button3 = document.querySelector('button3');
  const image = document.querySelector('image');

  button1.addEventListener('click', () => {});
  /* 
  button2.addEventListener('click', function () {
    image.src = 'image2.jpg';
  });

  button3.addEventListener('click', function () {
    image.src = 'image3.jpg';
  }); */
});
