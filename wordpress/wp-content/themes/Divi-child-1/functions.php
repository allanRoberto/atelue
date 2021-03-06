<?php
	add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
	function theme_enqueue_styles() {
	    wp_enqueue_style( 'divi', get_template_directory_uri() . '/style.css' );
	      wp_enqueue_style( 'divi-carousel', get_template_directory_uri() . '-child-1/js/assets/owl.carousel.css' );
      wp_enqueue_script( 'divi', get_template_directory_uri() . '-child-1/js/scripts.js', array( 'jquery', 'divi-custom-script' ), '0.1.2', true );
      wp_enqueue_script( 'divi-carousel', get_template_directory_uri() . '-child-1/js/owl.carousel.js', array( 'jquery'), '0.1.2', true );
	}
?>