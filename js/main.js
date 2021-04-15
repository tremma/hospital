"use strict";

/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
// preloader
document.querySelector('body').onload = function () {
  setTimeout(function () {
    var preloader = document.querySelector('.preloader');

    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
}; //scroll-to-top


var scrollSize = 50;
var scrollUp = document.querySelector('.scroll-to-top');

var getTop = function getTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
};

window.addEventListener('scroll', function () {
  if (getTop() > scrollSize) {
    scrollUp.classList.add('show');
  } else {
    scrollUp.classList.remove('show');
  }
});
scrollUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}); // burger

var burger = document.querySelector('.burger');

if (burger) {
  burger.addEventListener('click', function () {
    this.classList.toggle('burger--active');
  });
} // ==========================================================================================
// popup


var popup = document.querySelector('.popup');
var popupOpenBtn = document.querySelectorAll('.popup-open-btn');
var popupCloseBtn = document.querySelectorAll('.popup-close'); // open

popupOpenBtn.forEach(function (popupBtn) {
  popupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.toggle('popup-open');
  });
}); // close

popupCloseBtn.forEach(function (closeBtn) {
  closeBtn.addEventListener('click', function (e) {
    popup.classList.remove('popup-open');
  });
}); // ===========================================================================
// accordion

var accordionItems = document.querySelectorAll('.accordion__item');

if (accordionItems.length > 0) {
  for (var i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }
} // main-slider


var mainSwiper = new Swiper('.main-slider', {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 8000
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  }
}); // news-slider

var newsSwiper = new Swiper('.news__slider', {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 8000
  },
  navigation: {
    clickable: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); // team-slider

var teamSwiper = new Swiper('.team__slider', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); // faq slider

var faqSwiper = new Swiper('.faq__slider', {
  effect: 'flip',
  grabCursor: true,
  autoplay: {
    delay: 4000
  }
});
//# sourceMappingURL=main.js.map
