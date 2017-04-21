jQuery(document).foundation();
(function($) {
/*
*  new_map
*
*  This function will render a Google Map onto the selected jQuery element
*
*  @type	function
*  @date	8/11/2013
*  @since	4.3.0
*
*  @param	$el (jQuery element)
*  @return	n/a
*/

function new_map( $el ) {
	
	// var
	var $markers = $el.find('.marker');
	
	
	// vars
	var args = {
		zoom		: 16,
		center		: new google.maps.LatLng(41.830556, -71.418557),
		mapTypeId	: google.maps.MapTypeId.ROADMAP
	};
	
	
	// create map	        	
	map = new google.maps.Map( $el[0], args);
	
	
	// add a markers reference
	map.markers = [];
	
	
	// add markers
	$markers.each(function(){
		
    	add_marker( $(this), map );
		
	});
	
	
	// center map
	center_map( map );
	
	
	// return
	return map;
	
}

/*
*  add_marker
*
*  This function will add a marker to the selected Google Map
*
*  @type	function
*  @date	8/11/2013
*  @since	4.3.0
*
*  @param	$marker (jQuery element)
*  @param	map (Google Map object)
*  @return	n/a
*/

function add_marker( $marker, map ) {

	// var
	var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );

	// create marker
	var marker = new google.maps.Marker({
		position	: latlng,
		map			: map
	});

	// add to array
	map.markers.push( marker );

	// if marker contains HTML, add it to an infoWindow
	if( $marker.html() )
	{
		// create info window
		var infowindow = new google.maps.InfoWindow({
			content		: $marker.html()
		});

		// show info window when marker is clicked
		google.maps.event.addListener(marker, 'click', function() {

			infowindow.open( map, marker );

		});
	}

}

/*
*  center_map
*
*  This function will center the map, showing all markers attached to this map
*
*  @type	function
*  @date	8/11/2013
*  @since	4.3.0
*
*  @param	map (Google Map object)
*  @return	n/a
*/

function center_map( map ) {

	// vars
	var bounds = new google.maps.LatLngBounds();

	// loop through all markers and create bounds
	$.each( map.markers, function( i, marker ){

		var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

		bounds.extend( latlng );

	});

	// only 1 marker?
	if( map.markers.length == 1 )
	{
		// set center of map
	    map.setCenter({lat: 41.827278, lng: -71.420660});
	    map.setZoom( 16 );
	}
	else
	{
		// fit to bounds
		map.fitBounds( bounds );
	}

}

jQuery('.reveal').on('open.zf.reveal', function() {
	
	google.maps.event.trigger(map, "resize");
	
});
/*
*  document ready
*
*  This function will render each map when the document is ready (page has loaded)
*
*  @type	function
*  @date	8/11/2013
*  @since	5.0.0
*
*  @param	n/a
*  @return	n/a
*/
// global var
var map = null;

jQuery(document).ready(function(){

	jQuery('.acf-map').each(function(){

		// create map
		map = new_map( jQuery(this) );

	});

});

})(jQuery);
//randomizing the order of tiles loaded
var tiles = document.querySelector('.grid');
for (var i = tiles.children.length; i >= 0; i--) {
    tiles.appendChild(tiles.children[Math.random() * i | 0]);
}
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
         jQuery( '.nav-box' ).removeClass( 'loading' );  
         
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
