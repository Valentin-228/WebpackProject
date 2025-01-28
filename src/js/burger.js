
const burgerBtn = document.querySelector('.wrapper-burger');


document.querySelector('.navigation__burger-btn').addEventListener('click', function () {
  burgerBtn.classList.remove('wrapper-burger-hidden');
})




document.querySelector('.content-wrapper').addEventListener('click', function () {
  burgerBtn.classList.toggle('wrapper-burger-hidden');
})
























