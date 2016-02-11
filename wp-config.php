<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
 
// Include local configuration
if (file_exists(dirname(__FILE__) . '/local-config.php')) {
	include(dirname(__FILE__) . '/local-config.php');
}

// Global DB config
if (!defined('DB_NAME')) {
	define('DB_NAME', 'port');
}
if (!defined('DB_USER')) {
	define('DB_USER', 'root');
}
if (!defined('DB_PASSWORD')) {
	define('DB_PASSWORD', 'mysql628');
}
if (!defined('DB_HOST')) {
	define('DB_HOST', 'localhost');
}

/** Database Charset to use in creating database tables. */
if (!defined('DB_CHARSET')) {
	define('DB_CHARSET', 'utf8');
}

/** The Database Collate type. Don't change this if in doubt. */
if (!defined('DB_COLLATE')) {
	define('DB_COLLATE', '');
}

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'f/4?q(FbA#CY:wxhCo_!;J43Cx48T8E-_*9xRr%e,Jh7hR#LcV#2^?yf#fLnlr;>');
define('SECURE_AUTH_KEY',  '01bXl(.L`AQV{XM#Z#[GFy`R{^Zf7QRahQqT^1hwokPa,+>p=!CMrk/g+e5Ml_I}');
define('LOGGED_IN_KEY',    'r^M@m(l@fg]H6R {-6hSs*Io2K4&Z***~XgPzI--vZ-$orvT.xk}~Z8c,|7S6/oL');
define('NONCE_KEY',        '|[n>9FTD[dN-5Z$$&2(+PZYM;DjDa7;6sz<,{vgOz6VE~OiEBdUt;2`b91ebzBnk');
define('AUTH_SALT',        'g^Hc)~r |Q`d{f;x4iT4+EjHI)gO?-GL:$lf`vmd7985]R-B180_kQs9l]lUG9@9');
define('SECURE_AUTH_SALT', 'fl_TUWJ2(dT3Rdd^V3%?ck1]=a!OuU8*bX9W9[}0[1kVEI7)#}Pkbw%/zpV_-1-7');
define('LOGGED_IN_SALT',   '-M4__j7BY(VzJNG]BxHX96-aJdl/+K|bYL-;nD|3+qGS[io M-s`D&YvMVvkfUz3');
define('NONCE_SALT',       'k:|}13DX)eEY-!bW0jHN..{j}6?7*?ce<kFxS7R>-NNSJXxXJC!4OpO;<N>d4^}R');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'y';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');


/**
 * Set custom paths
 *
 * These are required because wordpress is installed in a subdirectory.
 */
if (!defined('WP_SITEURL')) {
	define('WP_SITEURL', 'http://' . $_SERVER['SERVER_NAME'] . '/wordpress');
}
if (!defined('WP_HOME')) {
	define('WP_HOME',    'http://' . $_SERVER['SERVER_NAME'] . '');
}
if (!defined('WP_CONTENT_DIR')) {
	define('WP_CONTENT_DIR', dirname(__FILE__) . '/content');
}
if (!defined('WP_CONTENT_URL')) {
	define('WP_CONTENT_URL', 'http://' . $_SERVER['SERVER_NAME'] . '/content');
}


/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if (!defined('WP_DEBUG')) {
	define('WP_DEBUG', false);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
