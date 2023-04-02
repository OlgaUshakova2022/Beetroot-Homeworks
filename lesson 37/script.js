const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination1',
        type: 'bullets',
        clickable: true,
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
     
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 15,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //     el: '.swiper-pagination2',
  //     type: 'bullets',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next2',
  //   prevEl: '.swiper-button-prev2',
  // }

});

//!  Все поломалось, я уже не могу это чинить))))))) Как нибудь потом, а то на реакт не успею.