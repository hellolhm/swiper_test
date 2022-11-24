window.onload = function(){
    const swiper_mbanner  = new Swiper('#banner.swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerGroup: 3,
        
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction:false,
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
}