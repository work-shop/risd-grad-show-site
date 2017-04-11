<?php $loop = new WP_Query( array( 'post_type' => 'department' ) ); ?>
		<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
		
		<?php
			//remove spaces from the department name ex. Graphic Design -> graphicdesign
			$department = strtolower(str_replace(' ', '', get_the_title()));
				
			$data_open = 'data-open="' . $department . '"';
		
			?>
		
		<li><a <?php echo $data_open; ?>><?php the_title(); ?></a></li>
												
		<?php endwhile; wp_reset_query(); ?>
