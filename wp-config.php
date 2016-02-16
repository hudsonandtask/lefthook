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
	define('DB_HOST', '127.0.0.1');
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
define('AUTH_KEY',         'ZQmc|)@NLQ)2N#S3 5!k,g-D](T_`$0wI}1;ut9.EEpZbtOGvI2&p-xa?NP ~t2t');
define('SECURE_AUTH_KEY',  'K0_ {oK2l@Y{,}wLRd9LaeyQfcYgN|8U);Kzs@y:dFgj#YxUX=0XC;n]p6z-I+?+');
define('LOGGED_IN_KEY',    'DcavLyV,vYXjKBs_CVm]1w[2/}BL>pI{D Z1m}sH!S=:5[f$(g$<4{:1Z=Q)%^W,');
define('NONCE_KEY',        'GDf6e]6z$jJx_O&4f|S,NHk,12h8&o{2V&4>Kb7v@9k_o14g$w%Re3mHCIHkN09+');
define('AUTH_SALT',        'N-|#%YX0_Z#|sfyo09fd. :j+-G^Jb@Nv1H&zFht&Y6,eIT]ZhiW$a5*aM]NyV.6');
define('SECURE_AUTH_SALT', 'G+D:-9HJ2,`uW|2UVvQZZ CGr|a%`;we+Mh)R$2&:xK((=v~i51LI9>rO?FO23/&');
define('LOGGED_IN_SALT',   '#M~DR-ib3.mgm*nhFP~6{$}4>GUk%[)vI:#]Zf!r+[b[OF>{|zJgr%Jcw`O0#}Pc');
define('NONCE_SALT',       'nPf:}ubRO$cD+H?AOQZyOpz2jgoZ4Mv4/W<>Cj~cR7U2zHXSs<=Inj,p 73Y/Is3');

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
