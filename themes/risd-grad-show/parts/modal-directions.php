<div id="directions" class="reveal" data-reveal aria-labelledby="directions" aria-hidden="true" role="dialog">
            
    <a class="close-button" data-close aria-label="Close">&#215;</a>
    
    <?php 

		$location = get_field( 'map', 'options' );
	
		if( !empty($location) ):
		
	?>
	
		<div class="acf-map">
		
			<div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
		
		</div>
		
	<?php endif; ?>

    <p><?php the_field('directions_content', 'options'); ?></p>
    
 </div>