function adjustRotator() {
    if ($(window).width() >= 768) {
        var sequenceEl = document.getElementById("sequence"),

            options = {
                phaseThreshold: !1,
                moveActiveStepToTop: !1,
                animateCanvas: !1,
                autoPlay: !0,
                autoPlayInterval: 8e3,
                autoPlayPauseOnHover: !1,
                preloader: !0
            },

            mySequence = sequence(sequenceEl, options);

        $("#slider-main .seq").css("height", "")
    } else {
        var sequenceEl = document.getElementById("sequence"),

            options = {
                phaseThreshold: !1,
                reverseWhenNavigatingBackwards: !0,
                reverseTimingFunctionWhenNavigatingBackwards: !0,
                moveActiveStepToTop: !1,
                autoPlay: !0,
                autoPlayInterval: 8e3,
                autoPlayPauseOnHover: !1,
                preloader: !0
            },
            mySequence = sequence(sequenceEl, options),
            mqp = matchMedia("all and (orientation:portrait)");
        mqp.matches ? ($("#slider-main .seq").css("height", $(".seq-banner").height()), setTimeout(function() {
            $("#slider-main .seq").css("height", $(".seq-banner").height()), stickyNav()
        }, 1050)) : $("#slider-main .seq").css("height", "")
    }
    mySequence.ready = function() {
        if ($(window).width() >= 768) {
            var firstImgSrc = $(".seq-canvas > li:first-child").find("source").attr("srcset"),
                urlArray = firstImgSrc.replace(/url\("/gi, "").replace(/url\(/gi, "").replace(/"\)/gi, "").replace(/\)/gi, "").split(",");
            $(".seq-canvas").attr("style", "background-image:url(" + urlArray + ")")
        }
        // reserve the second slide on first load
        $("#sequence ul.seq-canvas li").eq(1).addClass('seq-reserve');
    }
    mySequence.animationStarted = function(id, sequence) {
        // clear all reserve items
        $("#sequence ul.seq-canvas li").removeClass("seq-reserve");
        // while current slide is animating
        // reserving the next slide in background
        var slide_length = $("#sequence ul.seq-canvas li").length;
        var index = (id === slide_length)? 0: id;
        $("#sequence ul.seq-canvas li").eq(index).addClass('seq-reserve');
    };
}

function stickyNav() {
    if ($("#nav-inside").size() > 0) {
        var $obj = $("#nav-sticky"),
            topOffset = $obj.offset().top,
            $topBar = $obj.find(".top-bar"),
            $goTop = $obj.find(".goto-top");
        $obj.length > 0 && $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            scrollTop >= topOffset ? ($obj.addClass("sticky"), $(window).width() >= 737 ? $topBar.stop().animate({
                opacity: 1,
                bottom: "58px"
            }, 200) : $topBar.stop().animate({
                opacity: 1,
                bottom: "38px"
            }, 100), $goTop.removeClass("hidden")) : ($obj.delay(1e3).removeClass("sticky"), $(window).width() >= 737 ? $topBar.stop().animate({
                opacity: 0,
                bottom: "-32px"
            }, 100) : $topBar.stop().animate({
                opacity: 0,
                bottom: "-12px"
            }, 50), $goTop.addClass("hidden"))
        }), setTimeout(function() {
            $(".nav-sticky-current-pg").text($(".nav-sticky-menu > li.selected > a").text())
        }, 500), $(".nav-sticky-a").on("click", function() {
            $(".nav-sticky-current-pg").text($(".nav-sticky-menu > li.selected > a").text())
        }), $(".buyer-guide-tab-mobile .nav-sticky-menu a").on("click", function() {
            var show_ele = $(this).attr("data-show"),
                txt = $(this).text();
            $(".buyer-guide-tabs .tab-content div.tab-pane").hide(), $(".buyer-guide-tabs .tab-content div.tab-pane#" + show_ele).fadeIn(100), $(".buyer-guide-tabs .nav-guide-a .nav-guide-name").text(txt)
        })
    }
}

function draggableImg() {
    if ($(".draggable-img-wrp").size() > 0) {
        var $targetImg = $(".draggable-img"),
            $targetImgWrp = $(".draggable-img-wrp"),
            $dragExpl = $(".drag-to-explore"),
            $maskW = $targetImgWrp.width(),
            $maskH = $targetImgWrp.height(),
            imgPos = $targetImg.offset(),
            imgWidth = $targetImg.width(),
            imgHeight = $targetImg.height(),
            x1 = imgPos.left + $maskW - imgWidth,
            y1 = imgPos.top + $maskH - imgHeight,
            x2 = imgPos.left,
            y2 = imgPos.top;
        $targetImg.draggable({
            containment: [x1, y1, x2, y2]
        }).on("dragstart", function() {
            $dragExpl.fadeOut()
        })
    }
}

function accordionSnap() {}

function loadMatchHeight() {
    imagesLoaded(".row", function() {
        setTimeout(function() {
            $(".match-height").each(function() {
                $this = $(".match-height"), $(".match-element").length > 0 ? $this.find(".match-element").matchHeight() : $this.children("div, li").matchHeight()
            })
        }, 250)
    })

    if($('.match-height-2').length > 0) {
      imagesLoaded(".row", function() {
          setTimeout(function() {
            $('.match-height-2').each(function(){
             var ele_height = 0;
             $this = $(this);
             $this.find(".match-element").css("height", "auto");
             $(this).find(".match-element").each(function(){
               if (ele_height < $(this).height()) {
                 ele_height = $(this).height(); // find the highest heigh
                 console.log(ele_height);
               }
             })
             $this.find(".match-element").css("height", ele_height+"px");

           });
          }, 250);
      });
    }
}

// Element exist in page
function isElementExist(element) {
  return ($(element).length > 0) ? true : false;
}

function isMobile() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;
}

function contactCountry() {
  $('#country-select .country-list li a').click(function() {
    var $this = $(this),
      country_name = $(this).data("country"),
      phone = $(this).data("phone");
    email = $(this).data("email");
    address = $(this).data("address")

    $('.country-select .collapse-title a.country-name').click();
    $('.country-select .collapse-title a.country-name span').text(country_name);

    if (isElementExist('.show-phone a')) {
      $('.show-phone a').attr("href", phone).html(phone);
    } else {
      if (isMobile()) {
        $('.show-phone a').attr("href", phone).html(phone);
      }
    }

    if (isElementExist('.show-email a[href]')) {
      console.log("test");
      $('.show-email a[href]').attr("href", email).html(email);
    } else {
      if (isMobile()) {
        $('.show-email a').attr("href", email);
      }
      $('.show-email a').html(email);
    }

    if (isElementExist('.show-address a[href]')) {
      console.log("test");
      $('.show-address a[href]').attr("href", address).html(address);
    } else {
      if (isMobile()) {
        $('.show-address a').attr("href", address);
      }
      $('.show-address a').html(address);
    }

    $('#country-select .country-list li a').parent().removeClass('selected');
    $(this).parent().addClass('selected');
  });
}

function ellipsis() {
    setTimeout(function() {
        function createDots() {
            $ellipsis.dotdotdot({
                after: "a.toggle-expand"
            })
        }

        function destroyDots() {
            $ellipsis.trigger("destroy")
        }
        var $ellipsis = $(".ellipsis");
        $ellipsis.append('<a class="toggle-expand" href="#"><span class="show-more">Expand all</span><span class="show-less">Collapse all</span></a>'), createDots(), $ellipsis.on("click", "a.toggle-expand", function() {
            return $ellipsis.toggleClass("opened"), $ellipsis.hasClass("opened") ? destroyDots() : createDots(), !1
        })
    }, 750)
}

function setBgImg() {
    $("[data-bg-img]").each(function() {
        var bg = $(this).data("bg-img");
        $(this).css("background-image", "url(" + bg + ")")
    })
}

function highlightTabs() {
    var viewportHeight = $(window).height();
    $(window).width() >= 768 && setTimeout(function() {
        $(".slider-highlights-wrp").slideUp(300), $(".tab-highlights-click").removeClass("active");
        var scrollPosition = $(window).scrollTop() + viewportHeight,
            footerOffset = $("#footer").offset().top;
        scrollPosition >= footerOffset && $(".tab-highlights").removeClass("sticky-highlights")
    }, 3e3);
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop() + viewportHeight,
            footerOffset = $("#footer").offset().top;
        scrollPosition >= footerOffset ? $(".tab-highlights").removeClass("sticky-highlights") : $(".tab-highlights").addClass("sticky-highlights")
    }), $(".tab-highlights-click").click(function() {
        return $(this).toggleClass("active"), $(".slider-highlights-wrp").slideToggle(100), !1
    })

    $(window).width() >= 768 && setTimeout(function() {
        var scrollPosition = $(window).scrollTop() + viewportHeight,
            footerOffset = $("#footer").offset().top;
        scrollPosition >= footerOffset && $(".new-tab-highlights").removeClass("sticky-highlights")
    }, 3e3);
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop() + viewportHeight,
            footerOffset = $("#footer").offset().top;
        scrollPosition >= footerOffset ? $(".new-tab-highlights").removeClass("sticky-highlights") : $(".new-tab-highlights").addClass("sticky-highlights")
    });
}

function filterPropShow() {
    $(".select select").change(function() {
        var show_ele = $(this).find("option:selected").val(),
            par_ele = $(this).parent();
        $(".filter-find-prop").each(function() {
            $(this).hasClass(show_ele) ? $(this).removeClass("hidden") : $(this).addClass("hidden")
        }), $(par_ele).hasClass("filter-find-prop") && $(par_ele).removeClass("hidden")
    })
}

function selectPropSite() {
    $("dl.select-prop-site").find("dt").click(function() {
        return $("dl.select-prop-site").find("dd").slideToggle(function() {
            $("html, body, .page-wrapper").click(function() {
                $("dl.select-prop-site").find("dd").slideUp()
            })
        }), !1
    })
}

function buyingGuideCollaspe() {
    $('.step-list').on('show.bs.collapse','.collapse', function() {
        // $(this).parent().parent().find('.collapse.in').collapse('hide');
        loadMatchHeight();
    });
}

function leaseFilter() {
    $(".desktop-filter .select-prop-type3 select").change(function() {
        var show_ele = $(this).find("option:selected").attr("id");
        "AllPropertyCategory" == show_ele ? ($(".least-listing-content > div").show(), displayAllMarkers()) : ("LandedProperty" == show_ele ? ($('.least-listing-content div[alt="GCBlandProperties"]').hide(), $('.least-listing-content div[alt="LandedProperty"]').show(), $('.least-listing-content div[alt="LuxuryProperties"]').hide(), $('.least-listing-content div[alt="PremiumProperties"]').hide(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').hide(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').hide()) : "GCBlandProperties" == show_ele ? ($('.least-listing-content div[alt="GCBlandProperties"]').show(), $('.least-listing-content div[alt="LandedProperty"]').hide(), $('.least-listing-content div[alt="LuxuryProperties"]').hide(), $('.least-listing-content div[alt="PremiumProperties"]').hide(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').hide(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').hide()) : "LuxuryProperties" == show_ele ? ($('.least-listing-content div[alt="GCBlandProperties"]').hide(), $('.least-listing-content div[alt="LandedProperty"]').hide(), $('.least-listing-content div[alt="LuxuryProperties"]').show(), $('.least-listing-content div[alt="PremiumProperties"]').hide(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').hide(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').hide()) : "PremiumProperties" == show_ele ? ($('.least-listing-content div[alt="GCBlandProperties"]').hide(), $('.least-listing-content div[alt="LandedProperty"]').hide(), $('.least-listing-content div[alt="LuxuryProperties"]').hide(), $('.least-listing-content div[alt="PremiumProperties"]').show(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').hide(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').hide()) : "ExecutiveCondominiums" == show_ele ? ($('.least-listing-content div[alt="GCBlandProperties"]').hide(), $('.least-listing-content div[alt="LandedProperty"]').hide(), $('.least-listing-content div[alt="LuxuryProperties"]').hide(), $('.least-listing-content div[alt="PremiumProperties"]').hide(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').show(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').hide()) : "LuxExecutiveCondominiums" == show_ele && ($('.least-listing-content div[alt="GCBlandProperties"]').hide(), $('.least-listing-content div[alt="LandedProperty"]').hide(), $('.least-listing-content div[alt="LuxuryProperties"]').hide(), $('.least-listing-content div[alt="PremiumProperties"]').hide(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').hide(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').show()), displayMarkers3(show_ele))
    }), $(".desktop-filter .select-prop-type select").change(function() {
        var show_ele = $(this).find("option:selected").attr("id");
        $("div.Apartment").hide(), $("div.Skyvilla").hide(), $("div.Skysuite").hide(), $("div.Bungalow").hide(), $("div.BungalowLand").hide(), $("div.Penthouse").hide(), $("div.Apartment_Skyvilla").hide(), $("div.Apartment_Skysuite").hide(), $("div.Apartment_Bungalow").hide(), $("div.Apartment_BungalowLand").hide(), $("div.Apartment_Penthouse").hide(), $("div.Apartment_Skysuite_Skyvilla").hide(), $("div.Apartment_Skysuite_Skyvilla_Bungalow").hide(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand").hide(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand_Penthouse").hide(), $("div.Apartment_Skyvilla_Bungalow").hide(), $("div.Apartment_Skyvilla_Bungalow_BungalowLand").hide(), $("div.Apartment_Skyvilla_Bungalow_BungalowLand_Penthouse").hide(), "Apartment" == show_ele ? ($("div.Apartment").show(), $("div.Apartment_Skyvilla").show(), $("div.Apartment_Skysuite").show(), $("div.Apartment_Bungalow").show(), $("div.Apartment_BungalowLand").show(), $("div.Apartment_Penthouse").show()) : "Skyvilla" == show_ele ? ($("div.Skyvilla").show(), $("div.Apartment_Skyvilla").show(), $("div.Apartment_Skysuite_Skyvilla").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand_Penthouse").show()) : "Skysuite" == show_ele ? ($("div.Skysuite").show(), $("div.Apartment_Skysuite_Skyvilla").show(), $("div.Apartment_Skysuite_Skyvilla_Penthouse").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand").show()) : "Bungalow" == show_ele ? ($("div.Bungalow").show(), $("div.Apartment_Bungalow").show(), $("div.Apartment_Skyvilla_Bungalow").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand_Penthouse").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_Penthouse").show()) : "BungalowLand" == show_ele ? ($("div.BungalowLand").show(), $("div.Apartment_BungalowLand").show(), $("div.Apartment_Skyvilla_BungalowLand").show(), $("div.Apartment_Skysuite_Skyvilla_BungalowLand").show(), $("div.Apartment_Skysuite_Skyvilla_BungalowLand_Penthouse").show()) : "Penthouse" == show_ele && ($("div.Penthouse").show(), $("div.Apartment_Penthouse").hide(), $("div.Apartment_Skyvilla_Penthouse").show(), $("div.Apartment_Skysuite_Skyvilla_Penthouse").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand_Penthouse").show()), displayMarkers2(show_ele)
    }), $(".desktop-filter .prop-type-apartment select").change(function() {
        var show_ele = $(this).find("option:selected").attr("id");
        $("div.Apartment").show(), $("div.Apartment_Skyvilla").show(), $("div.Apartment_Skysuite").show(), $("div.Apartment_Bungalow").show(), $("div.Apartment_BungalowLand").show(), $("div.Apartment_Penthouse").show(), $("div.Apartment_Skysuite_Skyvilla").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand_Penthouse").show(), $("div.Apartment_Skyvilla_Bungalow").show(), $("div.Apartment_Skyvilla_Bungalow_BungalowLand").show(), $("div.Apartment_Skyvilla_Bungalow_BungalowLand_Penthouse").show(), $("div.Apartment_Skysuite_Bungalow").show(), $("div.Apartment_Skysuite_Bungalow_BungalowLand").show(), $("div.Apartment_Skysuite_Bungalow_BungalowLand_Penthouse").show(), $("div.Apartment_Skysuite_Skyvilla_BungalowLand").show(), $("div.Apartment_Skysuite_Skyvilla_BungalowLand_Penthouse").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_Penthouse").show(), $("div.Skyvilla").hide(), $("div.Skysuite").hide(), $("div.Bungalow").hide(), $("div.BungalowLand").hide(), $("div.Penthouse").hide(), $('div[name="OneBedroom"]').hide(), $('div[name="TwoBedroom"]').hide(), $('div[name="ThreeBedroom"]').hide(), $('div[name="FourBedroom"]').hide(), $('div[name="FiveBedroom"]').hide(), $('div[name="OneBedroom_TwoBedroom"]').hide(), $('div[name="OneBedroom_ThreeBedroom"]').hide(), $('div[name="OneBedroom_FourBedroom"]').hide(), $('div[name="OneBedroom_FiveBedroom"]').hide(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom"]').hide(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').hide(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').hide(), $('div[name="TwoBedroom_ThreeBedroom"]').hide(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom"]').hide(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').hide(), $('div[name="ThreeBedroom_FourBedroom"]').hide(), $('div[name="ThreeBedroom_FourBedroom_FiveBedroom"]').hide(), $('div[name="FourBedroom_FiveBedroom"]').hide(), "Bedroom" == show_ele ? ($('div[name="OneBedroom"]').show(), $('div[name="TwoBedroom"]').show(), $('div[name="ThreeBedroom"]').show(), $('div[name="FourBedroom"]').show(), $('div[name="FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom"]').show(), $('div[name="OneBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="FourBedroom_FiveBedroom"]').show()) : "OneBedroom" == show_ele ? ($('div[name="OneBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom"]').show(), $('div[name="OneBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show()) : "TwoBedroom" == show_ele ? ($('div[name="TwoBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show()) : "ThreeBedroom" == show_ele ? ($('div[name="ThreeBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom_FiveBedroom"]').show()) : "FourBedroom" == show_ele ? ($('div[name="FourBedroom"]').show(), $('div[name="OneBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_FourBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="FourBedroom_FiveBedroom"]').show()) : "FiveBedroom" == show_ele && ($('div[name="FiveBedroom"]').show(), $('div[name="OneBedroom_FiveBedroom"]').show(), $('div[name="TwoBedroom_FiveBedroom"]').show(), $('div[name="ThreeBedroom_FiveBedroom"]').show(), $('div[name="FourBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="FourBedroom_FiveBedroom"]').show()), displayMarkers1(show_ele)
    }), $('input[data-trigger="status"]').click(function() {
        for ($(".least-listing-content > div").hide(), i = 0; i < filterMarkers.length; i++) filterMarkers[i].setVisible(!1);
        $('input[data-id="sales"]').is(":checked") ? ($('.least-listing-content > div[status="sales"]').show(), $('.least-listing-content > div[status="sales,lease"]').show()) : $('.least-listing-content > div[status="sales"]').hide(), $('input[data-id="lease"]').is(":checked") ? ($('.least-listing-content > div[status="lease"]').show(), $('.least-listing-content > div[status="sales,lease"]').show()) : $('.least-listing-content > div[status="lease"]').hide(), displayStatus()
    }), $(".mobile-filter button.btn-submit").click(function() {
        var par_ele = $(this).parent().parent().parent(),
            prop_category = $(par_ele).find(".select-prop-type3 select option:selected").attr("id");
        "AllPropertyCategory" == prop_category ? $(".least-listing-content > div").show() : "LandedProperty" == prop_category ? ($('.least-listing-content div[alt="GCBlandProperties"]').hide(), $('.least-listing-content div[alt="LandedProperty"]').show(), $('.least-listing-content div[alt="LuxuryProperties"]').hide(), $('.least-listing-content div[alt="PremiumProperties"]').hide(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').hide(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').hide()) : "GCBlandProperties" == prop_category ? ($('.least-listing-content div[alt="GCBlandProperties"]').show(), $('.least-listing-content div[alt="LandedProperty"]').hide(), $('.least-listing-content div[alt="LuxuryProperties"]').hide(), $('.least-listing-content div[alt="PremiumProperties"]').hide(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').hide(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').hide()) : "LuxuryProperties" == prop_category ? ($('.least-listing-content div[alt="GCBlandProperties"]').hide(), $('.least-listing-content div[alt="LandedProperty"]').hide(), $('.least-listing-content div[alt="LuxuryProperties"]').show(), $('.least-listing-content div[alt="PremiumProperties"]').hide(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').hide(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').hide()) : "PremiumProperties" == prop_category ? ($('.least-listing-content div[alt="GCBlandProperties"]').hide(), $('.least-listing-content div[alt="LandedProperty"]').hide(), $('.least-listing-content div[alt="LuxuryProperties"]').hide(), $('.least-listing-content div[alt="PremiumProperties"]').show(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').hide(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').hide()) : "ExecutiveCondominiums" == prop_category ? ($('.least-listing-content div[alt="GCBlandProperties"]').hide(), $('.least-listing-content div[alt="LandedProperty"]').hide(), $('.least-listing-content div[alt="LuxuryProperties"]').hide(), $('.least-listing-content div[alt="PremiumProperties"]').hide(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').show(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').hide()) : "LuxExecutiveCondominiums" == prop_category && ($('.least-listing-content div[alt="GCBlandProperties"]').hide(), $('.least-listing-content div[alt="LandedProperty"]').hide(), $('.least-listing-content div[alt="LuxuryProperties"]').hide(), $('.least-listing-content div[alt="PremiumProperties"]').hide(), $('.least-listing-content div[alt="ExecutiveCondominiums"]').hide(), $('.least-listing-content div[alt="LuxExecutiveCondominiums"]').show());
        var prop_type = $(par_ele).find(".select-prop-type select option:selected").attr("id");
        (null != prop_type || void 0 != prop_type) && ($("div.Apartment").hide(), $("div.Skyvilla").hide(), $("div.Skysuite").hide(), $("div.Bungalow").hide(), $("div.BungalowLand").hide(), $("div.Penthouse").hide(), $("div.Apartment_Skyvilla").hide(), $("div.Apartment_Skysuite").hide(), $("div.Apartment_Bungalow").hide(), $("div.Apartment_BungalowLand").hide(), $("div.Apartment_Penthouse").hide(), $("div.Apartment_Skysuite_Skyvilla").hide(), $("div.Apartment_Skysuite_Skyvilla_Bungalow").hide(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand").hide(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand_Penthouse").hide(), $("div.Apartment_Skyvilla_Bungalow").hide(), $("div.Apartment_Skyvilla_Bungalow_BungalowLand").hide(), $("div.Apartment_Skyvilla_Bungalow_BungalowLand_Penthouse").hide()), "Apartment" == prop_type ? ($("div.Apartment").show(), $("div.Apartment_Skyvilla").show(), $("div.Apartment_Skysuite").show(), $("div.Apartment_Bungalow").show(), $("div.Apartment_BungalowLand").show(), $("div.Apartment_Penthouse").show()) : "Skyvilla" == prop_type ? ($("div.Skyvilla").show(), $("div.Apartment_Skyvilla").show(), $("div.Apartment_Skysuite_Skyvilla").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand_Penthouse").show()) : "Skysuite" == prop_type ? ($("div.Skysuite").show(), $("div.Apartment_Skysuite_Skyvilla").show(), $("div.Apartment_Skysuite_Skyvilla_Penthouse").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand").show()) : "Bungalow" == prop_type ? ($("div.Bungalow").show(), $("div.Apartment_Bungalow").show(), $("div.Apartment_Skyvilla_Bungalow").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand_Penthouse").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_Penthouse").show()) : "BungalowLand" == prop_type ? ($("div.BungalowLand").show(), $("div.Apartment_BungalowLand").show(), $("div.Apartment_Skyvilla_BungalowLand").show(), $("div.Apartment_Skysuite_Skyvilla_BungalowLand").show(), $("div.Apartment_Skysuite_Skyvilla_BungalowLand_Penthouse").show()) : "Penthouse" == prop_type && ($("div.Penthouse").show(), $("div.Apartment_Penthouse").hide(), $("div.Apartment_Skyvilla_Penthouse").show(), $("div.Apartment_Skysuite_Skyvilla_Penthouse").show(), $("div.Apartment_Skysuite_Skyvilla_Bungalow_BungalowLand_Penthouse").show());
        var prop_apart = $(par_ele).find(".prop-type-apartment .select select option:selected").attr("id");
        (null != prop_apart || void 0 != prop_apart) && ($("div.Skyvilla").hide(), $("div.Skysuite").hide(), $("div.Bungalow").hide(), $("div.BungalowLand").hide(), $("div.Penthouse").hide(), $('div[name="OneBedroom"]').hide(), $('div[name="TwoBedroom"]').hide(), $('div[name="ThreeBedroom"]').hide(), $('div[name="FourBedroom"]').hide(), $('div[name="FiveBedroom"]').hide(), $('div[name="OneBedroom_TwoBedroom"]').hide(), $('div[name="OneBedroom_ThreeBedroom"]').hide(), $('div[name="OneBedroom_FourBedroom"]').hide(), $('div[name="OneBedroom_FiveBedroom"]').hide(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom"]').hide(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').hide(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').hide(), $('div[name="TwoBedroom_ThreeBedroom"]').hide(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom"]').hide(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').hide(), $('div[name="ThreeBedroom_FourBedroom"]').hide(), $('div[name="ThreeBedroom_FourBedroom_FiveBedroom"]').hide(), $('div[name="FourBedroom_FiveBedroom"]').hide()), "Bedroom" == prop_apart ? ($('div[name="OneBedroom"]').show(), $('div[name="TwoBedroom"]').show(), $('div[name="ThreeBedroom"]').show(), $('div[name="FourBedroom"]').show(), $('div[name="FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom"]').show(), $('div[name="OneBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="FourBedroom_FiveBedroom"]').show()) : "OneBedroom" == prop_apart ? ($('div[name="OneBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom"]').show(), $('div[name="OneBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show()) : "TwoBedroom" == prop_apart ? ($('div[name="TwoBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show()) : "ThreeBedroom" == prop_apart ? ($('div[name="ThreeBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom_FiveBedroom"]').show()) : "FourBedroom" == prop_apart ? ($('div[name="FourBedroom"]').show(), $('div[name="OneBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_FourBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="FourBedroom_FiveBedroom"]').show()) : "FiveBedroom" == prop_apart && ($('div[name="FiveBedroom"]').show(), $('div[name="OneBedroom_FiveBedroom"]').show(), $('div[name="TwoBedroom_FiveBedroom"]').show(), $('div[name="ThreeBedroom_FiveBedroom"]').show(), $('div[name="FourBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FiveBedroom"]').show(), $('div[name="OneBedroom_TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="TwoBedroom_ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="ThreeBedroom_FourBedroom_FiveBedroom"]').show(), $('div[name="FourBedroom_FiveBedroom"]').show()), displayMarkers1(prop_apart), displayMarkers2(prop_type), displayMarkers3(prop_category)
    })
}

function getUpdatedForm() {
    $(".get-updated-form").size() > 0 && ($(".tree-wpr-ele").hide(), $(".rdbCallsOverseasSMS").hide(), $(".rdbCallsOverseas").hide());
    document.getElementById("ContentPlaceHolderDefault_ContentPlaceHolderBody_ContentPlaceHolderBody_getUpdated_5_chkEmail");
    $('.show-tree-wpr > label > input[type="checkbox"]').click(function() {
        var ele = $(this).parent().parent().parent().find($(".tree-wpr-ele"));
        $(this).is(":checked") ? $(ele).show() : $(ele).hide()
    }), $('.get-updated-form input[type="radio"]').change(function() {
        var radio_name = $(this).attr("name"),
            radio_value = $(this).attr("value");
        $("div." + radio_name).hide(), $("div." + radio_value).show()
    }), $('.parent-checkbox > label > input[type="checkbox"]').click(function() {
        $this = $(this);
        var parent_value = $(this).attr("value");
        $this.is(":checked") ? $(".child-checkbox input[data-parent=" + parent_value + "]").each(function() {
            $(this).prop("checked", !0)
        }) : $(".child-checkbox input[data-parent=" + parent_value + "]").each(function() {
            $(this).prop("checked", !1)
        })
    }), $('.child-checkbox input[type="checkbox"]').click(function() {
        $this = $(this);
        var check_item = !1,
            parent_value = $this.data("parent");
        $this.is(":checked") ? $('.parent-checkbox > label > input[value="' + parent_value + '"]').prop("checked", !0) : ($(".child-checkbox input[data-parent=" + parent_value + "]").each(function() {
            $(this).is(":checked") && (check_item = !0)
        }), check_item ? $('.parent-checkbox > label > input[value="' + parent_value + '"]').prop("checked", !0) : $('.parent-checkbox > label > input[value="' + parent_value + '"]').prop("checked", !1))
    });
    var chkAllTheBelowContactInfo = $("#ContentPlaceHolderDefault_ContentPlaceHolderBody_ContentPlaceHolderBody_getUpdated_5_chkAllTheBelowContactInfo");
    chkAllTheBelowContactInfo.click(function() {
        $this = $(this), $this.is(":checked") ? $('input[name="checkbox-type-1"]').each(function() {
            $(this).prop("checked", !0);
            var ele = $(this).parent().parent().parent().find($(".tree-wpr-ele"));
            $(ele).show()
        }) : $('input[name="checkbox-type-1"]').each(function() {
            $(this).prop("checked", !1);
            var ele = $(this).parent().parent().parent().find($(".tree-wpr-ele"));
            $(ele).hide()
        })
    });
    var chkAllTheAbove = $("#ContentPlaceHolderDefault_ContentPlaceHolderBody_ContentPlaceHolderBody_getUpdated_5_chkAllTheAbove");
    chkAllTheAbove.click(function() {
        $this = $(this), $this.is(":checked") ? ($('input[name="checkbox-type-2"]').each(function() {
            $(this).prop("checked", !0)
        }), $('.child-checkbox input[type="checkbox"]').each(function() {
            $(this).prop("checked", !0)
        })) : ($('input[name="checkbox-type-2"]').each(function() {
            $(this).prop("checked", !1)
        }), $('.child-checkbox input[type="checkbox"]').each(function() {
            $(this).prop("checked", !1)
        }))
    })
}
document.createElement("picture"), $(window).load(function() {
    "Smartphone" === WURFL.form_factor && ($.each($(".tel-mobile"), function() {
        var telHTML = [],
            tels = $(this).text().split(" / ");
        $.each(tels, function(i2, v2) {
            telHTML.push('<a href="#">' + v2 + "</a>")
        }), $(this).html(telHTML.join(" / "))
    }), $(".tel-mobile > a").each(function() {
        $(this).attr("href", "tel:" + $(this).text().replace(/[^\d+]/g, ""))
    }), $(".tel-mobile a").click(function(ev) {
        ev.stopPropagation()
    })), $(".seq-info-box").hasClass("hidden") && $(".seq-info-box").closest("#content").find(".sold-out-bar").addClass("no-info-box")
}), $(document).ready(function() {
    buyingGuideCollaspe();
    if ($("#sequence").size() > 0) {
        for (var slideNum = $(".seq-canvas").children().length, i = 0; slideNum > i; i++) $(".seq-pagination").append("<li/>");
        $(".seq-canvas > li").each(function() {
            $(this).find(".seq-banner").after('<div class="seq-shadow"/>')
        }), $("#sequence").append('<div class="seq-mask-canvas hidden-xs"/>'), adjustRotator()
    }
    var $lightboxG = $(".lightbox-generic"),
        $lightboxIMG = $(".lightbox-image"),
        $lightboxV = $(".lightbox-video"),
        $lightboxVT = $(".lightbox-virtual-tour");
    if ($lightboxG.lightGallery({
            addClass: "generic",
            selector: "this",
            download: !1,
            counter: !1,
            videoMaxWidth: "940px",
            fullScreen: !1,
            zoom: !1,
            actualSize: !1,
            hash: !1
        }), $lightboxIMG.lightGallery({
            addClass: "add-scrollbar",
            selector: "this",
            download: !1,
            counter: !1,
            fullScreen: !1,
            hash: !1
        }), $lightboxV.lightGallery({
            addClass: "no-fullscreen",
            selector: "this",
            download: !1,
            counter: !1,
            videoMaxWidth: "940px",
            fullScreen: !1,
            zoom: !1,
            actualSize: !1,
            hash: !1
        }), $lightboxVT.lightGallery({
            addClass: "generic",
            selector: "this",
            download: !1,
            counter: !1,
            videoMaxWidth: "1140px",
            fullScreen: !1,
            zoom: !1,
            actualSize: !1,
            hash: !1
        }), $(".info-tooltip").tooltip({
            tooltipClass: "info",
            track: !0
        }), $(".fac-tooltip").tooltip({
            tooltipClass: "fac",
            track: !0,
            position: {
                my: "center bottom-20",
                at: "center top",
                of: "area"
            }
        }), $(".tooltip-with-img").tooltip({
            tooltipClass: "fac-img",
            track: !0,
            position: {
                my: "center bottom-20",
                at: "center top",
                of: "area"
            },
            content: function(){
                return '<p>'+$(this).attr("title")+'</p><img src="'+$(this).data('image')+'" style="width: 180px; height: auto;">'
            }
        }), $(".tabs-location").size() > 0 && ($(".tabs-location > .nav-tabs").each(function() {
            $(this).find("> li").length > 2 && $(this).addClass("block")
        }), $(".show-amenities").waypoint({
            handler: function() {
                setTimeout(function() {
                    $(".show-amenities > .collapse").collapse("hide")
                }, 4e3)
            },
            offset: "80%"
        })), $(".tabs-floor-plans").size() > 0) {
        var $cloning = $(".floor-plans-clones > div"),
            clone_1 = $cloning.eq(0),
            clone_2 = $cloning.eq(1),
            clone_3 = $cloning.eq(2),
            clone_4 = $cloning.eq(3);
        $(".floor-plans-clone-1").html(clone_1), $(".floor-plans-clone-2").html(clone_2), $(".floor-plans-clone-3").html(clone_3), $(".floor-plans-clone-4").html(clone_4)
    }
    if ($(".tabs-home-sale").size() > 0) {
        var $cloning = $(".home-sale-clones > div"),
            clone_1 = $cloning.eq(0),
            clone_2 = $cloning.eq(1),
            clone_3 = $cloning.eq(2),
            clone_4 = $cloning.eq(3);
        $(".home-sale-clone-1").html(clone_1), $(".home-sale-clone-2").html(clone_2), $(".home-sale-clone-3").html(clone_3), $(".home-sale-clone-4").html(clone_4)
    }
    if ($(".lease-landing-clones").size() > 0) {
        var $cloning = $(".lease-landing-clones > div"),
            clone_1 = $cloning.eq(0),
            clone_2 = $cloning.eq(1),
            clone_3 = $cloning.eq(2);
        $(".lease-landing-clone-1").html(clone_1), $(".lease-landing-clone-2").html(clone_2), $(".lease-landing-clone-3").html(clone_3)
    }
    if ($(".singapore-properties-clones").size() > 0) {
        var $cloning = $(".singapore-properties-clones > div"),
            clone_1 = $cloning.eq(0),
            clone_2 = $cloning.eq(1),
            clone_3 = $cloning.eq(2),
            clone_4 = $cloning.eq(3);
        $(".sg-property-clone-1").html(clone_1), $(".sg-property-clone-2").html(clone_2), $(".sg-property-clone-3").html(clone_3), $(".sg-property-clone-4").html(clone_4)
    }
    if ($(".international-properties-clones").size() > 0) {
        var $cloning = $(".international-properties-clones > div"),
            clone_1 = $cloning.eq(0),
            clone_2 = $cloning.eq(1),
            clone_3 = $cloning.eq(2),
            clone_4 = $cloning.eq(3);
        clone_5 = $cloning.eq(4), $(".international-property-clone-1").html(clone_1), $(".international-property-clone-2").html(clone_2), $(".international-property-clone-3").html(clone_3), $(".international-property-clone-4").html(clone_4), $(".international-property-clone-5").html(clone_5)
    }
    if ($(".sold-out-flyout").size() > 0) {
        var $flyout = $(".sold-out-flyout");
        $flyout.addClass("open"), setTimeout(function() {
            $flyout.find("> dd").slideUp("500", function() {
                $flyout.removeClass("open"), $flyout.find("> dd").attr("style", "")
            })
        }, 5e3)
    }
    $(".select-jump").on("change", function() {
        $(".select-jump-row").hide(), $(".select-jump-row." + $(this).val()).fadeIn(500), $(".ellipsis").trigger("update")
    }), draggableImg(), stickyNav(), setTimeout(function() {
        stickyNav()
    }, 1200), loadMatchHeight(), ellipsis(), setBgImg(), filterPropShow(), leaseFilter(), highlightTabs(), selectPropSite(), getUpdatedForm(), contactCountry(), PointerEventsPolyfill.initialize()
}), $(window).resize(function() {
    adjustRotator(), setTimeout(function() {
        draggableImg()
    }, 250), stickyNav()
}), $(window).on("orientationchange", function() {
    adjustRotator(), stickyNav()
});