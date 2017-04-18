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