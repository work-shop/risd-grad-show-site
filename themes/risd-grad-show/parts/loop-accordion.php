<ul class="accordion" data-accordion data-allow-all-closed="true">

<?php $loop = new WP_Query( array( 'post_type' => 'department', 'posts_per_page' => 16 ) ); ?>
<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

  <li class="accordion-item" data-accordion-item>
  
    <!-- Accordion tab title -->
    
    <a href="#" class="accordion-title"><?php the_title();?></a>
    
    <div class="accordion-content" data-tab-content>
	    
		<?php if( have_rows( 'students' ) ) : ?>
	
		<ul>
			
			<?php while ( have_rows( 'students' ) ) : the_row(); ?>
			
				<li>
				
					<?php
						
						$website = get_sub_field( 'portfolio_link' );
						
						if( ! empty( $website ) ) : ?>
					
						<a href="<?php the_sub_field( 'portfolio_link' ); ?>" target="_blank"><?php the_sub_field( 'student_name' ); ?></a>
						
					<?php else : ?>
						
						<?php the_sub_field( 'student_name' ); ?>
						
					<?php endif; ?>
						
				</li>
				
			<?php endwhile; ?>
				
		</ul>
			
		<?php else : ?>
		
			<h3>No Students Found</h3>
			
		<?php endif; ?>

    </div>
    
  </li>
										
<?php endwhile; wp_reset_query(); ?>

</ul>