const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
     
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});
// const swiper2 = new Swiper('.swiper2', {
//   // Optional parameters
//   slidesPerView: 5,
//   spaceBetween: 15,
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

   
//   // And if we need scrollbar
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// });