<?php $loop = new WP_Query( array( 'post_type' => 'department' ) ); ?>
<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

<?php
	
	//remove spaces from the department name ex. Graphic Design -> graphicdesign
	$department = strtolower(str_replace(' ', '', get_the_title()));
	
	//further remove the plus signs from the department name ex. teaching+learninginart+design -> teachinglearninginartdesign
	$clean_department = str_replace('+','',$department);
		
	$id = 'id="' . $clean_department . '"';
	
	$aria_label = 'aria-labelledby="' . $department . '"';

	?>

<div <?php echo $id; ?> class="reveal students-list" data-reveal <?php echo $aria_label; ?> aria-hidden="true" role="dialog">
	
	<a class="close-button" data-close aria-label="Close">&#215;</a>
	
	<h2><?php the_title();?></h2>
	
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
										
<?php endwhile; wp_reset_query(); ?>