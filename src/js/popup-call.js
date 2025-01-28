

const popupCall = document.querySelector('.popup-call');




document.querySelector('.social__tell-btn').addEventListener('click', function () {
  popupCall.classList.add('popup-call-hidden');

})

document.querySelector('.popup-call-title__btn-close').addEventListener('click', function () {
  popupCall.classList.remove('popup-call-hidden');

})





