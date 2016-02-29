<?php
/**
 * Main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: https://codex.wordpress.org/Template_Hierarchy
 *
 */
?>

<!DOCTYPE html>
<html ng-app="lefthook">
<head>
    <base href="/app">
	<title>AngularJS Demo Theme</title>
	<?php wp_head(); ?>
</head>
<body >
    <div class="app-container" scroll-state in-view-container>
        <menu-directive></menu-directive>
        <div ng-view></div>
    </div>
<input type="text" ng-model="name">
        <p>Hello, {{name}}</p>
</body>

</html>