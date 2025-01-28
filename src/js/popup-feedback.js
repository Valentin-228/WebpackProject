
const popupFeedBack = document.querySelector('.popup-feedback');


document.querySelector('.social__chat-btn').addEventListener('click', function () {
  popupFeedBack.classList.add('popup-feedback-hidden');

})

document.querySelector('.popup-feedback-title__btn-close').addEventListener('click', function () {
  popupFeedBack.classList.remove('popup-feedback-hidden');

})
