'use strict'

$(window).on('load', function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $('body').addClass('ios');
  } else {
    $('body').addClass('web');
  };
  $('body').removeClass('loaded');
});
/* viewport width */

/* viewport width */
$('body').ready(function() {
  $('body').removeClass("loaded");
  $('.icon-load').remove();
});


$('.grid-responsive__row a').hover(function(){
$('a', this.parentNode.parentNode.parentNode).css({"color": "#a7d2db","text-decoration": "underline"});

}, function(){
$('a', this.parentNode.parentNode.parentNode).css({"color": "#a7d2db","text-decoration": "none"});

});



/*if is hoverred each child a hover*/




    var handler = function() {
      var height_footer = $('footer').height();
      var height_header = $('header').height();
      //$('.content').css({'padding-bottom'=height_footer+40; 'padding-top'=height_header+40});
      var viewport_wid = viewport().width;
      var viewport_height = viewport().height;

    }
    $(window).bind('load', handler); $(window).bind('resize', handler);
