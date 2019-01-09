var lastScrollTop = 0;
var isBannerInView = true;

// Window Scroll  
/*.hybrid-in-nav*/
$(document).ready(function(){
	function getTargetTop(elem){
		var id = elem.attr('href');
		var offset = 0;
		return $(id).offset().top - offset;
	}
	$('.nav ul li a[href^="#"]').click(function(e){
		var target = getTargetTop($(this));
		$('html, body').animate({scrollTop: target}, 1000);
		e.preventDefault();
	});
	//$('a.hybrid-in-btn-top').click(function(){
		//$('html, body').animate({scrollTop: 0}, 1000);
	//});
	var sections = $('.nav ul li a[href^="#"]');
	function checkSectionSelected(scrolledTo){
		var threshold = 200;
		var i;
		for (i = 0; i < sections.length; i++){
			var section = $(sections[i]);
			var target = getTargetTop(section);
			if (scrolledTo > target - threshold && scrolledTo < target + threshold){
				sections.removeClass('current');
				section.addClass('current').closest('ul').prev('a').addClass('current');
			}
		}
	}
	checkSectionSelected($(window).scrollTop());
	var obj = $('.nav'),
		objOffset = obj.offset(),
		topOffset = objOffset.top,
		logo = $('.nav .image');
	
	// First Load
	var scrollTop = $(window).scrollTop();
	if (scrollTop >= topOffset){
		obj.addClass('fixed');
		logo.fadeIn('fast');  
		// horizontal nav position
		$(".nav .details > .phone").stop(true, true).animate({ 
			marginRight: 90
		},300);
		$(".nav .details > ul").stop(true, true).animate({ 
			marginLeft: 80
		},300);
		
		// horizontal right
		$("#plus").stop(true, true).animate({ 
			opacity: 1 
		},300).show();
	}
	if (scrollTop < topOffset){
		obj.delay(1000).removeClass('fixed');
		logo.fadeOut('fast'); 
		// horizontal nav position
		$(".nav .details > .phone").stop(true, true).animate({ 
			marginRight: 0
		},300);
		$(".nav .details > ul").stop(true, true).animate({ 
			marginLeft: 0
		},300);
		
		// horizontal right
		$("#plus").stop(true, true).animate({ 
			opacity: 0 
		},300).hide();
	}
	
	// Window Scroll
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= topOffset){
			obj.addClass('fixed');
			logo.fadeIn('fast');  
			// horizontal nav position
			$(".nav .details > .phone").stop(true, true).animate({ 
				marginRight: 90
			},300);
			$(".nav .details > ul").stop(true, true).animate({ 
				marginLeft: 80
			},300);
			
			// horizontal right
			$("#plus").stop(true, true).animate({ 
				opacity: 1 
			},300).show();
		}
		if (scrollTop < topOffset){
			obj.delay(1000).removeClass('fixed');
			logo.fadeOut('fast'); 
			// horizontal nav position
			$(".nav .details > .phone").stop(true, true).animate({ 
				marginRight: 0
			},300);
			$(".nav .details > ul").stop(true, true).animate({ 
				marginLeft: 0
			},300);
			
			// horizontal right
			$("#plus").stop(true, true).animate({ 
				opacity: 0 
			},300).hide();
		}
		checkSectionSelected($(window).scrollTop());
	});
});
 

$(document).ready(function(){   
	 // Navigation: First Link  
	 $(".horizontal-nav-container .details > ul li:first-child").css("background-position","20px bottom");
	 $(".horizontal-nav-container .details > ul li:first-child a").css("padding-left",0); 
	 
	 // Navigation: Last Link  
	 $(".horizontal-nav-container .details > ul li:last-child").css("background-position","48px bottom");
	 
	 // Go top Link
	 $("#go-top-btn").click(function(){
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
	 
	// Tooltip
	$('a.info-link').easyTooltip(); 
	// Tooltip: wider size
	$('a.info-link2').easyTooltip({  
		tooltipId: "easyTooltip2"
	}); 
	
	// Textshadow: IE
	var option = {
	  x:      0, 
	  y:      0, 
	  radius: 5,
	  color:  "#000000"
	} 
	$(".rsABlock").textShadow( option ); 
	
	 
});  


$(function(){
	$('#camera-slider').camera({
		//autoAdvance: false,
		fx: 'simpleFade',
		height: '476px',
		loader: 'none',
		navigation: false,
		pagination: false,
		playPause: false,
		pauseOnClick: false,
		time: 6000,
		onEndTransition: function() { $(".rsABlock").show();
			setTimeout(function(){$(".rsABlock").fadeOut()},4000);
		}
	});
}); 


function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

$.fn.isOnScreen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
     
    var bounds = this.offset();
	console.log(bounds);
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
	
	/*
	console.log(viewport.top);
	console.log(bounds.bottom);
	 
     console.log("1" );
	console.log(!(viewport.right < bounds.left));
	 console.log("2" );
	console.log(!(viewport.left > bounds.right));
	 console.log("3" );
	console.log(!(viewport.bottom < bounds.top));
	 console.log("4" );
	console.log(!(viewport.top > bounds.bottom));
	 
	 console.log(!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top >= bounds.bottom))
	*/
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top >= bounds.bottom));
};


$(document).ready(function () {
    // Make image align center
    var width = $('.scroll-parent img').width();
    var parentWidth = $('.scroll-parent').width();
    $('.scroll-parent').scrollLeft(width / 2 - parentWidth / 2);
    $(function () {
        $(".panwrapper").hoverIntent({
            over: function () {
                $('.pan-cover').animate({
                    left: '0%',
                    top: '0%',
                    opacity: 0,
                    width: 0,
                    height: 0,
                    marginLeft: 0,
                    marginTop: 0
                }, 3000);
            },
            timeout: 10000,
            out: function () { }
        });

        /*
        $('.panwrapper').mouseenter(function(){
        $('.pan-cover').animate({
        left: '0%',
        top: '0%',
        opacity: 0,
        width: 0,
        height: 0,
        marginLeft: 0,
        marginTop: 0
        }, 1000);
        });
        */
    });
    var $wrapper = $('.scroll-parent');
    function startScrollingLeft() {
        //$wrapper.animate({scrollLeft: '-=50'}, startScrollingLeft);
        $wrapper.animate({ scrollLeft: -width }, 30000, 'easeOutQuad');
    }
    function startScrollingRight() {
        //$wrapper.animate({scrollLeft: '+=50'}, startScrollingRight);
        $wrapper.animate({ scrollLeft: +width }, 30000, 'easeOutQuad');
    }
    function stopScrolling() {
        $wrapper.stop();
    }
    $('.scroll-right').mouseover(startScrollingRight).mouseout(stopScrolling);
    $('.scroll-left').mouseover(startScrollingLeft).mouseout(stopScrolling);
});



/* lightbox video */
// Video & Lightbox 
/*$(document).ready(function () {
    var myPlayer1 = projekktor('#gallery-video1 .projekktor');
    $('.lightbox-video1').fancybox({
        'afterShow': function () { myPlayer1.setPlay(); },
        'beforeClose': function () { myPlayer1.setStop(); },
        padding: 15,
        minWidth: 831
    });
    myPlayer1.addListener('done', function () { $.fancybox.close(); });
    myPlayer1.addListener('fullscreen', function (value) {
        if (value == true) $('.fancybox-close').hide();
        else $('.fancybox-close').show();
    });
}); */