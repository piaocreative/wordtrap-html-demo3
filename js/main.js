$(document).ready(function(){
  $('.logos').slick({
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  infinite: false,
                  slidesToShow: 3,
                  slidesToScroll: 3,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  infinite: false,
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
          }
      ]
  });
});