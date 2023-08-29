// aos js 
AOS.init();
// Slider js
$(document).ready(function(){

   $('.warpperSlide').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
    
   }); 

   $(".warpperSlide .slick-prev").html("");
   $(".warpperSlide .slick-next").html("");
});
