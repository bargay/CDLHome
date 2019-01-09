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

(function ($) {
    $(document).ready(function () {

        // Handling Event Tracking	

        var label = '';
        var cat = '';
        var unit = '';
        var tab = '';
        var lang = '';
        var property = '';
        var property = '';
        if ($('div.logo a').length > 0) {
            property = $('div.logo a').attr('href').split('/');
            property = property[property.length - 3];
            property = property.charAt(0).toUpperCase() + property.slice(1);
        }

        //Top navigation

        $('a.logo').click(function () {
            pushGAEvent('Topnavi', 'click', 'CDL Corporate Logo');
        });

        $('.menu-dropdown > li >a').click(function () {
            label = $(this).text();
            pushGAEvent('Main_menu', 'click', label);
        });

        $('a[href="#"]').click(function () {
            label = $(this).text();
            pushGAEvent('Main menu', 'click', label);
        });

        $('#select-profile-bar > a').click(function () {
            label = ($(this).attr('href')).substring(1, 3).toUpperCase();
            if ((label != 'CN') && (label != 'ID')) { //should generalise it if more languages added
                label = 'EN';
            }
            lang = label;
            pushGAEvent('Topnavi_Language_toggle', 'click', label);
        });
		
		// Lease enquiry
		setTimeout(function(){
				$('#apartments-lease span.black a.link, #lease div.sequence-info-box div.wrapper span.black a.link').click(function (){
				label = $(this).text();
				pushGAEvent('Leasing enquiry', 'click', label);
			});			
		},100);
		

        // Carousel

        $('div.logo  a').click(function () {
            label = property;
            pushGAEvent('Carousel', 'click', label);
        });

        // Sticky-navigation
        $('.details > ul > li > a').click(function () {
            label = $(this).text();
            pushGAEvent('Property Site Navigation Bar', 'click', label);
        });

        $('div.image').click(function () {
            pushGAEvent('Property Site Navigation Bar', 'click', 'Overview');
        });

        $('#plus > a:first > img').click(function () {
            pushGAEvent('Property Site Navigation Bar', 'click', 'CDL logo back to home');
        });

        $('#go-top-btn').click(function () {
            pushGAEvent('Property Site Navigation Bar', 'click', 'Back to Top');
        });

        $('dl.sold-out-sticky-nav>dt').click(function () {
            //if(($(this).find('dd').attr('style').split(':').pop() == 'none;')) {
            label = $(this).text();
            pushGAEvent(' Property Site Navigation Bar', 'click', label);
            //}
        });

        $('div.sold-out-sticky-nav').click(function () {
            label = $(this).find('a.sold-out-get-updated').text();
            pushGAEvent(' Property Site Navigation Bar', 'click', label);
        });

        $('#sold-out-flyout >dd a').click(function () {
            if ($(this).hasClass('link')) {
                label = $(this).text();
            } else {
                label = $(this).find('img').attr('src').split('/').pop();
                label = label.split('-');
                label = label[3] + ' ' + label[4];
                label = label.split('.')[0];
            }
            pushGAEvent(' Property Site Navigation Bar', 'click', label);

        });


        // Media-Body

        $('.media-body a.link').click(function () {
            label = $(this).text();
            pushGAEvent('Property Site Overview Page ', 'click', label);
        });


        // Share
        /*$('#at_hover a[href="#"]').click( function() {
			label = $(this).find('span').text();
			pushGAEvent('Property Site Share Tools', 'click' , label);
		});*/

        // Location Page
        $('.map-button-group >li >a').click(function () {
            label = $(this).text();
            pushGAEvent('Property Site location page button', 'click', label);
        });


        // Floor plans

        $('#floorplan-tabs >ul>li >a').click(function () {
            label = $(this).text();
            cat = property + '_floor plans tab';
            pushGAEvent(cat, 'click', label);
        });

        $('.type-listing > dd > a').click(function () {
            unit = $('a[href="#' + $('div[aria-expanded="true"]').attr('id') + '"]').text();
            label = $(this).text();
            cat = property + '_floorplans_PDF_' + unit;
            pushGAEvent(cat, 'download', label);
        });

        $('a.link-enlarged').click(function () {
            label = $(this).text();
            cat = property + '_Lightbox';
            pushGAEvent(cat, 'click', label);

        });

        //Facilities

        $('#facilities-tabs >ul>li >a').click(function () {
            label = $(this).text();
            cat = property + '_facilities tab';
            pushGAEvent(cat, 'click', label);
        });


        // 360 degree view
        $('a.link-pano').click(function () {
            label = property;
            pushGAEvent('360 virtual tour link', 'click', label);
        });

        //Echleon -property Video

        $('a.link-video').click(function () {
            label = $(this).text();
            pushGAEvent('Property Site banner description', 'click', label);
        });

        //Amenities filter in Location
        $('#amnPlaces').find('input[type="checkbox"]').on('change', function () {
            if ($(this).attr('checked') == 'checked') {
                //label = $(this).next('.label-txt').text();
                //label = $.trim(label);
                value = $(this).val();
                label = value;
                switch (value) {
                    case "Recreation": label = "Recreation & Entertainment"
                        break;
                    case "Shopping": label = "Shopping & Dining"
                        break;
                }
                pushGAEvent('Amenities filter options', 'click', label, value);
            }
        });

        // Footer

        $('.footer-inner a').click(function () {
            label = $(this).text();
            pushGAEvent('Footer_link', 'click', label);
        });

        $('.contact-body a').click(function () {
            if ($(this).hasClass('link')) {
                label = 'View_Map'
            }
            else {
                label = 'Email';
            }
            pushGAEvent('Property Site sales footer', 'click', label);
        });

        // Sticky events
        $('div.tab-highlights-click').click(function () {
            if ($(this).hasClass('active')) {
                label = 'Close sticky tab';
            } else {
                label = 'Open sticky tab';
            }
            pushGAEvent('Sticky event banner', 'click', label);

        });

        setTimeout(function () {
            $('#tab-highlights a.camera_link').click(function () {
                parent = $(this).parents('div.camera_target_content');
                label = parent.siblings('div.camera_target').find('div.cameracurrent').find('img').attr('src').split('/').pop();
                label = label.split('.')[0];
                pushGAEvent('Sticky event banner', 'click', label);
            });
        }, 100);


        // Sold Out Bar
        $('div.sold-out-bar a').click(function () {
            label = $(this).text();
            pushGAEvent('Property Alert bar', 'click', label);
        });


        // Sold Out Content
        $('div.sold-out-content a').click(function () {
            if ($(this).hasClass('link')) {
                if ($(this).hasClass('cta-continue-view')) {
                    label = $(this).text();
                } else {
                    label = $(this).attr('href').split('/');
                    if ((label[1] == 'cn') || (label[1] == 'id')) {
                        label = label[2];
                    } else {
                        label = label[1];
                    }
                }
            } else if ($(this).hasClass('cta')) {
                label = $(this).text();
            } else {
                label = $(this).find('img').attr('src').split('/').pop();
                label = label.split('-');
                label = label[3] + ' ' + label[4];
                label = label.split('.')[0];
            }
            pushGAEvent('Property Sold Out Content', 'click', label);
        });


    });
})(jQuery);