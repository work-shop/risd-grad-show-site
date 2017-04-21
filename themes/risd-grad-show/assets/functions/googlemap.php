<?php
function my_acf_init() {
	
	acf_update_setting('google_api_key', 'AIzaSyAXBy3O4DBl7rrNsvstVJMT7jmThFRMoXM');
}

add_action('acf/init', 'my_acf_init');