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

document.documentElement.addEventListener('gesturestart', function (event) {
    event.preventDefault();      
}, false);


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

