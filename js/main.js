(function($) {
    "use strict";

    var cfg = {
            scrollDuration: 800, // smoothscroll duration
            mailChimpURL: "", // mailchimp url
        },
        $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute("data-useragent", navigator.userAgent);

    /* Stat Counter
     * ------------------------------------------------------ */
    var ssStatCount = function() {
        var statSection = $(".s-stats"),
            stats = $(".counter-value");

        statSection.waypoint({
            handler: function(direction) {
                if (direction === "down") {
                    stats.each(function() {
                        var $this = $(this);

                        $({
                            Counter: 0
                        }).animate({
                            Counter: $this.text()
                        }, {
                            duration: 4000,
                            easing: "swing",
                            step: function(curValue) {
                                $this.text(Math.ceil(curValue));
                            },
                        });
                    });
                }

                // trigger once only
                this.destroy();
            },

            offset: "90%",
        });
    };



    /* Placeholder Plugin Settings
     * ------------------------------------------------------ */
    var ssPlaceholder = function() {
        $("input, textarea, select").placeholder();
    };

    /* Alert Boxes
     * ------------------------------------------------------ */
    var ssAlertBoxes = function() {
        $(".alert-box").on("click", ".alert-box__close", function() {
            $(this).parent().fadeOut(500);
        });
    };



    /* Initialize
     * ------------------------------------------------------ */
    (function ssInit() {
        ssStatCount();
        ssPlaceholder();
        ssAlertBoxes();
    })();
})(jQuery);