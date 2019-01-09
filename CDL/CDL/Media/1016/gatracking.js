function pushGAEvent(category, action, label, value) {
    if (!category && !action && !label) {
        return false;
    }
    _gaq.push(['_trackEvent', category, action, label]);
    // Debug
    if (window.console) {
        console.log('GA Debug: ' + 'eventCategory: ' + category + ', eventAction: ' + action + ', eventLabel: ' + label + ', eventValue: ' + value);
    }
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

(function ($) {
    $(document).ready(function () {


        // Handle event-tracking

        var label = '';
        var cat = '';
        var lang = '';
        var event = '';
		var new_label = '';

		//home page
		$('.header .top-header .logo-top img').click(function () {
		    pushGAEvent('header bar', 'click', 'CDL logo');
		});

		$('.header .logo-header .logo-img img').click(function () {
		    pushGAEvent('header bar', 'click', 'Gramercy logo');
		});
		        
        //language toggle
		$('.header .top-header .language ul li a').click(function () {
		    label = $(this).text();
		    pushGAEvent('language options', 'click', label);
		});

		$('.icon-enlarged, .icon-video').click(function () {
		    label = $(this).text();
		    pushGAEvent('Video link', 'click', label);
		});
		
        //location page
		$('.location-tab .nav-tabs > li > button').click(function () {
		    label = $(this).text();
		    pushGAEvent('Property Site location page button', 'click', label);
		});

		$('.filter-amenities .filter-gp label > input[type="checkbox"]').click(function () {
		    //console.log($(this).prop("checked"));
		    if ($(this).prop("checked") == true) {
		        label = $(this).val();
		        if (label == "recreation") {
		            label = "Recreation & Entertainment";
		        }
		        else if (label == "shop_dine")
		        {
		            label = "Shopping & Dining";
		        }
		        else if (label == "business") {
		            label = "Embassies";
		        }
		        else {
		            label = toTitleCase(label);
		        }
		        pushGAEvent('Amenities filter options', 'click', label);
		    }		    
		});

        //for mobile location page
		$('.filter-amenities-mobile li > label > input[type="checkbox"]').click(function () {
		    //console.log($(this).prop("checked"));
		    if ($(this).prop("checked") == true) {
		        label = $(this).val();
		        if (label == "recreation") {
		            label = "Recreation & Entertainment";
		        }
		        else if (label == "shop_dine") {
		            label = "Shopping & Dining";
		        }
		        else if (label == "business") {
		            label = "Embassies";
		        }
		        else {
		            label = toTitleCase(label);
		        }
		        pushGAEvent('Amenities filter options', 'click', label);
		    }
		});
		
    });
})(jQuery);