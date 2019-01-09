/*! NOUVEL 16-08-2016 */

function setDataBg() {

    // only for viewport less than 768
    var setBg = function() {
		
      // re-define viewport size
      var r_viewportWidth = $(window).width();
      var is_mobileWidth = (window.matchMedia('(max-width: 480px)').matches)? true: false;
      var is_tabletWidth = (window.matchMedia('(max-width: 991px)').matches)? true: false;

      if(is_mobileWidth) {
		  	
		$('[data-src-mobile]').each(function() {
          var bg = $(this).data('src-mobile');
          $(this).attr('src', bg);
        });
		
      } else {

		
		$('[data-src]').each(function() {
          if(is_tabletWidth && $(this).attr('data-src-tport')) {
            var bg = $(this).data('src-tport');
            $(this).attr('src', bg);
          }else {
            var bg = $(this).data('src');
            $(this).attr('src', bg);
          }
        });
		
		
		
      }
    };
    // for first load
    setBg();
    // for windows resize
    var resizeTimer;
    $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setBg, 100);
    });
  }

$(document).ready(function(){
	setDataBg();
    $(".matchHeight").matchHeight();
    
    $(".fb").fancybox({
		maxWidth	: 640,
		fitToView	: false,
		width		: '100%',
		autoSize	: false,
		autoHeight   : true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
    
    $(".pd").fancybox({
		maxWidth	: 640,
		fitToView	: false,
		width		: '70%',
		autoHeight   : true,
		autoSize	: false,
		closeClick	: true,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
    
	$(".fac-tooltip").tooltip({
		tooltipClass: "fac",
		track: !0,
		position: {
			my: "center bottom-20",
			at: "center top",
			of: "area"
		}
    })
});
