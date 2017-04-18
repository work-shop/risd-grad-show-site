<?php get_header(); ?>

<div class="direction-left"></div>
<div class="direction-right"></div>
<div class="direction-up"></div>
<div class="direction-down"></div>

<?php get_template_part( 'parts/modal', 'about' ); ?>
<?php get_template_part( 'parts/modal', 'allstudents' ); ?>
<?php get_template_part( 'parts/modal', 'students' ); ?>
<?php get_template_part( 'parts/modal', 'directions' ); ?>
<?php get_template_part( 'parts/nav', 'box' ); ?>


<?php get_template_part( 'parts/content', 'tiles' ); ?>

        

<?php get_footer(); ?>