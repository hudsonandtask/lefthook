<?php

function theme_scripts() {

    wp_register_style(
        'defaultStyles',
        get_stylesheet_directory_uri() . '/style.css'
    );

    wp_enqueue_style(
        'my-style',
        get_stylesheet_directory_uri() .  '/style.css',
        array('defaultStyles')
    );

    // Register any nessesary scripts
	wp_register_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/node_modules/angular/angular.min.js'
	);

	wp_register_script(
		'angularjs-route',
		get_stylesheet_directory_uri() . '/node_modules/angular-route/angular-route.min.js'
	);

    wp_register_script(
		'angularjs-inview',
		get_stylesheet_directory_uri() . '/node_modules/angular-inview/angular-inview.js'
	);

    wp_enqueue_script(
        'my-scripts',
        get_stylesheet_directory_uri() . '/app/scripts.js',
        array('angularjs', 'angularjs-route', 'angularjs-inview')
    );
    wp_localize_script(
        'my-scripts',
        'myLocalized',
        array('app' => trailingslashit( get_template_directory_uri() ) . 'app/', 'api_url' => esc_url_raw( rest_url() ), 'api_nonce' => wp_create_nonce( 'wp_rest' ))
    );
}

add_theme_support( 'admin-bar', array( 'callback' => '__return_false' ) );


add_theme_support( 'post-thumbnails' );

add_action( 'wp_enqueue_scripts', 'theme_scripts' );