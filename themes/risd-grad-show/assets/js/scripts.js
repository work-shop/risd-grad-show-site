jQuery(document).foundation();
//randomizing the order of tiles loaded
var tiles = document.querySelector('.grid');
for (var i = tiles.children.length; i >= 0; i--) {
    tiles.appendChild(tiles.children[Math.random() * i | 0]);
}
//Using Masonry

/*
jQuery('.grid').masonry({
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  gutter: 0,
  fitWidth: true
});
*/

//Using Mason JS

jQuery(".grid").mason({
	itemSelector: ".grid-item",
	ratio: 4,
	sizes: [
		[1,1],
		//[1,2],
		[1,2],
		[1,3]
		
	],
	columns: [
        [0,480,1],
        [480,780,2],
        [780,1080,3],
        [1080,1320,4],
        [1320,1680,5]
    ],
	promoted: [
        ['.date', 1, 4],
        ['.gradshow', 1, 1],
        ['.location', 1, 1],
        ['.thesis', 1, 1]
    ],
	
    layout: 'fluid'
});
jQuery(window).load(function(){

    jQuery(document).ready(function(){
	    
	    //load in the middle of the field
         scrollTo((jQuery(document).width() - jQuery(window).width()) / 2, 0);
         
    });
});
/*
These functions make sure WordPress
and Foundation play nice together.
*/

jQuery(document).ready(function() {

    // Remove empty P tags created by WP inside of Accordion and Orbit
    jQuery('.accordion p:empty, .orbit p:empty').remove();

	 // Makes sure last grid item floats left
	jQuery('.archive-grid .columns').last().addClass( 'end' );

	// Adds Flex Video to YouTube and Vimeo Embeds
  jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function() {
    if ( jQuery(this).innerWidth() / jQuery(this).innerHeight() > 1.5 ) {
      jQuery(this).wrap("<div class='widescreen flex-video'/>");
    } else {
      jQuery(this).wrap("<div class='flex-video'/>");
    }
  });
  

});
