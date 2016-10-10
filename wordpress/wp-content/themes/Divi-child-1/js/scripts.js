jQuery(document).ready(function ($) {
  $('.img-estrutura a').click(function(e){
     id_galeria = $(this).attr('href');
     $('.gallery-estrutura').addClass('hide-gallery');
     $(id_galeria).addClass('show-gallery');
     $(id_galeria).removeClass('hide-gallery');
  });
});