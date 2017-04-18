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