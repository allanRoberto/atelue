jQuery(document).ready(function ($) {
  $('.img-estrutura a').click(function(e){
     id_galeria = $(this).attr('href');
     $('.gallery-estrutura').addClass('hide-gallery');
     $(id_galeria).addClass('show-gallery');
     $(id_galeria).removeClass('hide-gallery');
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})
});