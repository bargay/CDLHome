$(document).ready(function(){
	// Select Profile Bar
	function openProfile(){
		$('.select-profile-flag').slideUp('fast');
	}
	function openSelectProfile(){
		$('.profile-selected a').hide();
		$('.select-profile-flag').slideDown();
	}
	/*$('.select-profile-flag .btn-close').click(function(){
		openProfile();
		$('.profile-selected.none').slideDown();
	});
	$('.select-profile-flag .btn-close.spr').click(function(){
		openProfile();
		$('.profile-selected .spr').slideDown();
	});
	$('.select-profile-flag .btn-close.foreign').click(function(){
		openProfile();
		$('.profile-selected .foreign').slideDown();
	});*/
	$('.select-profile-flag .btn-spr').click(function(){
		openProfile();
		$('.profile-selected .spr').slideDown();
	});
	$('.select-profile-flag .btn-foreign').click(function(){
		openProfile();
		$('.profile-selected .foreign').slideDown();
	});
	$('.profile-selected a').click(function(){
		openSelectProfile();
	});
	
	// Select Form on Find Properties Page (Modified on 6 Apr 2015)
	$('dl.select-prop-site').find('dt').click(function(){
		$('dl.select-prop-type, dl.select-prop-type2, dl.select-prop-type3').find('dd').slideUp();
		$('dl.select-prop-site').find('dd').slideToggle(function(){
			$('html, body, .page-wrapper').click(function(){$('dl.select-prop-site').find('dd').slideUp();});
		});
		return false;
	});
	$('dl.select-prop-type').find('dt').click(function(){
		$('dl.select-prop-site, dl.select-prop-type2, dl.select-prop-type3').find('dd').slideUp();
		$('dl.select-prop-type').find('dd').slideToggle(function(){
			$('html, body, .page-wrapper').click(function(){$('dl.select-prop-type').find('dd').slideUp();});
		});
		return false;
	});
	$('dl.select-prop-type2').find('dt').click(function(){
		$('dl.select-prop-site, dl.select-prop-type, dl.select-prop-type3').find('dd').slideUp();
		$('dl.select-prop-type2').find('dd').slideToggle(function(){
			$('html, body, .page-wrapper').click(function(){$('dl.select-prop-type2').find('dd').slideUp();});
		});
		return false;
	});
	$('dl.select-prop-type3').find('dt').click(function(){
		$('dl.select-prop-site, dl.select-prop-type, dl.select-prop-type2').find('dd').slideUp();
		$('dl.select-prop-type3').find('dd').slideToggle(function(){
			$('html, body, .page-wrapper').click(function(){$('dl.select-prop-type3').find('dd').slideUp();});
		});
		return false;
	});
	
	// Table
	$(".table-special tr td:first-child").css("border-left","0px");
	$(".table-special tbody tr:odd td").css("background-color","#ECECEC"); 
  
  // Filter Property
	$('dl.filter-prop-type').find('dt').click(function(){
		$('dl.filter-prop-type').find('dd').slideToggle();
	});
  
	$('.filter-button').find('a').click(function(){
		$('dl.filter-prop-type').find('dd').slideToggle();
	});

  // Show / Hide Transit Lines
	
});

$(document).ready(function(){
	// Go top Link
	$('#go-top-btn').click(function(){
		$('body, html').animate({scrollTop: 0}, 500);
	});
	// Tooltip
	$('a.info-link').easyTooltip();
});

// Dialog Box
$(function() {
$.smartModal({
overlayDelay: 300, // Number of milliseconds it takes for the modal to fade in.
hideDelay: 300, // Number of milliseconds it takes for the modal to fade out.
cookieExpires: 365, //  Number of days until the modal cookies expire.
debug: false, //  Enable/disbale debug mode.
shortkeys: false, // Enable/disbale shortcut keys.
clickClose: true,  // Enable/disbale the ability to close the modals by clicking on the overlay.
animationDuration: 800, // Default number of milliseconds for the animation duration.
animationEasing: 'swing', // The default easing effect for the modal animation. See http://easings.net/
gaTracking: false // Enable/disable Google Analytics event tracking.
});
});