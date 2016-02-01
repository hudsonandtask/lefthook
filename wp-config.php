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
	define('DB_NAME', 'hudsonandtask');
}
if (!defined('DB_USER')) {
	define('DB_USER', 'admin');
}
if (!defined('DB_PASSWORD')) {
	define('DB_PASSWORD', 'admin');
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
define('AUTH_KEY',         '{M2|yP7$V2;@04)&;V(T/ss+HD(Z:5SjTb28W5uwKTe`Z]0s;{IRN@bkNndVgLa!');
define('SECURE_AUTH_KEY',  'V0;V&.{!w.Uy[eP@B6h)^|HMG+l9GuCGFWY?2-q;U%R(CYp5^!0,(q,Y5I6=I5c#');
define('LOGGED_IN_KEY',    'j@$T 8Hp|6lps(3N2d{jH_#c|?.|2.TXJSRvVvd7NG- K+B`0iQ1$XpkH*UKKGK@');
define('NONCE_KEY',        ',J)5t9!6b;3)n20El}Ds)%V62KJ`O)|>OZ4yXkYq@ f|cA1z&tR]:|A7A&0{/4YY');
define('AUTH_SALT',        'ZBTm|5=bOg{X+_*7((?B$G$K+~=Mg=|=h(Xm+@n{U+zvUY)<iZ^t<%gzsbT=,<0}');
define('SECURE_AUTH_SALT', 'CQ%3bvs=!dw@8P|9 x&pvt/r[yB|c(CtZ?14V=@[; qg=z0-CYa<RDjaJ9h|c|9K');
define('LOGGED_IN_SALT',   '?^sWUU#*oSmOP;Ti?8{d]|McDbmGf`T1|H=H=m$_}y:X:eMN-E`!]?J_lP&:kW=@');
define('NONCE_SALT',       ' `}Ic}%,S/T_0=?ntigs;X+DYbp,ox04IV:`U@f?+R%Vx &4o0n-|x%W!8%-B~E&');

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
