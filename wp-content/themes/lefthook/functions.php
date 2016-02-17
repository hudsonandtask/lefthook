<?php

function theme_scripts() {

	wp_register_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/node_modules/angular/angular.min.js'
	);

	wp_register_script(
		'angularjs-route',
		get_stylesheet_directory_uri() . '/node_modules/angular-route/angular-route.min.js'
	);

    wp_enqueue_script(
        'my-scripts',
        get_stylesheet_directory_uri() . '/app/scripts.js',
        array('angularjs', 'angularjs-route')
    );

    wp_localize_script(
        'my-scripts',
        'myLocalized',
        array('app' => trailingslashit( get_template_directory_uri() ) . 'app/')
    );
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );