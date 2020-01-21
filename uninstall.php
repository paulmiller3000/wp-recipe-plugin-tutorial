<?php

if( !defined( 'WP_UINSTALL_PLUGIN') ) {
  exit;
}

global $wpdb;
$wpdb->query("DROP TABLE IF EXISTS `" . $wpdb->prefix . "recipe_ratings`");