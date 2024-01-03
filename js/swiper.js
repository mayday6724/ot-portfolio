// JavaScript Document

$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    speed: 2000, //2sec
    spaceBetween: 0, //space between pictures
    centeredSlides: true,
    autoplay: {
      delay: 2500, //duration of a picutre display
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
