$(document).ready(function() {
  $('html, body, *').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 40);
    e.preventDefault();
  });

  // Set window width based on width of content
  let windowWidth = 0;
  $(".Card").each(function() {
    windowWidth += $(this).outerWidth(true);  
  }); 
  $('main').css("width", `${windowWidth}px`);

  //refresh page on browser resize
  $(window).bind('resize', function(e)
  {
    console.log('window resized..');
    this.location.reload(false); /* false to get page from cache */
    /* true to fetch page from server */
  });
});