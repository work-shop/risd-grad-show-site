jQuery(function(){
  var curDown = false,
      curYPos = 0,
      curXPos = 0;
  jQuery(window).mousemove(function(m){
    if(curDown === true){
     jQuery(window).scrollTop(jQuery(window).scrollTop() + (curYPos - m.pageY)); 
     jQuery(window).scrollLeft(jQuery(window).scrollLeft() + (curXPos - m.pageX));
    }
  });
  
  jQuery(window).mousedown(function(m){
    curDown = true;
    curYPos = m.pageY;
    curXPos = m.pageX;
  });
  
  jQuery(window).mouseup(function(){
    curDown = false;
  });
});
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
/*
jQuery(".grid").mason({
	itemSelector: ".grid-item",
	ratio: 10,
	sizes: [
		[1,1]
		
	],
	columns: [
        [0,1700,10]
    ],
/*	promoted: [
        ['.date', 1, 4],
        ['.gradshow', 1, 1],
        ['.location', 1, 1],
        ['.thesis', 1, 1]
    ], 
	
    layout: 'fluid'
}); */
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


jQuery(window).load(function(){

    jQuery(document).ready(function(){
	    
	    //load in the middle of the field
         
		 jQuery(window).scrollLeft( jQuery(window).width()/2);
		 jQuery(window).scrollTop( jQuery(document).height()/2);
         
        //show the tiles after they load 
         jQuery( '.grid-item' ).removeClass( 'loading' );  
         
        var $all = jQuery(".grid-item:in-viewport");
        var $tiles = 3 + Math.floor(Math.random() * 10);   
        
        jQuery( shuffle( $all ).slice( 2, $tiles ) ).each( function( i ) {
	         
	        var tile = jQuery(this);
	        var time = 1000;
	        
		    setTimeout( function() {
			    
			    tile.addClass( "selected" ).delay( 500 * i ).queue( function( next ){
		        	
					tile.removeClass( "selected" );
					
					next();
					
		    }, time );
	         
			});
        
        });
         
    });
});


var h_amount = '';
var v_amount = '';

function scroll_h() {
    console.log('scrolling left and right'+h_amount);
    jQuery('body').animate({
        scrollLeft: h_amount
    }, 100, 'linear',function() {
        if (h_amount !== '') {
            scroll_h();
        }
    });
}
function scroll_v() {
    console.log('scrolling up and down'+v_amount);
    jQuery('body').animate({
        scrollTop: v_amount
    }, 100, 'linear',function() {
        if (v_amount !== '') {
            scroll_v();
        }
    });
}
jQuery('.direction-left').hover(function() {
    console.log('scroll left');
    h_amount = '-=50';
    scroll_h();
}, function() {
    h_amount = '';
});
jQuery('.direction-right').hover(function() {
    console.log('scroll right');
    h_amount = '+=50';
    scroll_h();
}, function() {
    h_amount = '';
});

jQuery('.direction-up').hover(function() {
    console.log('scroll up');
    v_amount = '-=50';
    scroll_v();
}, function() {
    v_amount = '';
});
jQuery('.direction-down').hover(function() {
    console.log('scroll down');
    v_amount = '+=50';
    scroll_v();
}, function() {
    v_amount = '';
});


jQuery(function () {
    var $win = jQuery(window);
    var $grid = jQuery('.grid');
       	$win.scroll(function () {
	       	
	       	//show-hide "direction-up"
	       	
            if ($win.scrollTop() === 0)
                 
                jQuery( '.direction-up' ).hide();
                
            else {
	            jQuery( '.direction-up' ).show();
            }
            
            //show-hide "direction-down"
                     
			if ($win.height() + $win.scrollTop() == jQuery(document).height()) {
                jQuery( '.direction-down' ).hide();
            }
            
            else {
	            jQuery( '.direction-down' ).show();
            }
            
            //show-hide "direction-left"
            
            if($win.scrollLeft() + $win.width() === $win.width()) {
				jQuery( '.direction-left' ).hide();
   			}
   			
   			else {
	   			jQuery( '.direction-left' ).show();
   			}
   			
   			//show-hide "direction-right"
            
            if( $win.scrollLeft() + $win.width() === jQuery(document).width() ) {
	            
				jQuery( '.direction-right' ).hide();
   			}
   			
   			else {
	   			jQuery( '.direction-right' ).show();
   			}
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
