document.addEventListener('DOMContentLoaded', function () {
  const swiperTech = new Swiper(
    '.swiper-technic',
    {
      slidesPerView: 'auto',
      loop: true,

      pagination: {
        el: '.swiper__pagination',

      },
    });




})







document
  .querySelector('.next-show-technic__btn')
  .addEventListener('click', function () {
    let hiddenElements = document.querySelectorAll('.hidden-technic')
    let imgShow = document.querySelector('.next-show-technic__img')
    let imgHide = document.querySelector('.next-hide-technic__img')

    if (hiddenElements.length > 0) {
      hiddenElements.forEach(function (element) {
        element.classList.remove('hidden-technic') // Показываем скрытые элементы
      })
      this.innerText = 'Скрыть'
      // Меняем текст кнопки на "Скрыть"
    } else {
      document
        .querySelectorAll('.swiper-slide-technic')
        .forEach(function (element) {
          element.classList.add('hidden-technic') // Скрываем все элементы
        })
      this.innerText = 'Показать все' // Меняем текст кнопки на "Показать все"
    }
  })

let currentImgIndex = 1 // Индекс текущего изображения

document
  .querySelector('.next-show-technic__btn')
  .addEventListener('click', function () {
    const currentImg = document.querySelector('.next-show-technic__img')

    // Меняем изображение в зависимости от текущего индекса
    if (currentImgIndex === 1) {
      currentImg.src = '../img/hide.svg' // Переключаем на второе изображение
      currentImgIndex = 2 // Обновляем индекс
    } else {
      currentImg.src = '../img/show.svg' // Переключаем на первое изображение
      currentImgIndex = 1 // Обновляем индекс
    }
  })
