<div class="grid-item loading all-departments" data-equalizer-watch>
	
	<ul>
		
		<?php $loop = new WP_Query( array( 'post_type' => 'department', 'posts_per_page' => 16 ) ); ?>
		<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
		
		<?php
			//remove spaces from the department name ex. Graphic Design -> graphicdesign
			$department = strtolower(str_replace(' ', '', get_the_title()));
			
			//further remove the plus signs from the department name ex. teaching+learninginart+design -> teachinglearninginartdesign
			$clean_department = str_replace('+','',$department);
				
			$data_open = 'data-open="' . $clean_department . '"';
		
		?>
		
		<li><a <?php echo $data_open; ?>><?php the_title(); ?></a></li>
												
		<?php endwhile; wp_reset_query(); ?>

		</ul>

	</div>
	