$(".full-inter").hcSticky({ bottom: 20, top: 75 })
$(function () {
    window.responsive = function responsive() {
        if ($(window).width() <= 981) {
            //$(".cultural-news,.cultural-news > div").height($("#fix").height())
            $("#fix-left,#fix-left > div").height($(".full-inter").height() + 15)
            //$("#fix").css("margin-top", 0)
        } else {
            $("#fix-left").height($(".internal-content").outerHeight() +$(".archive").height()-26 - $(".ad-inter").height())
            $(".cultural-news").height($(".internal-content").height() - 24)
            //$("#fix").css("margin-top", $("#top-off").offset().top - 230)
            $(window).scroll(function () {
                if ($(window).scrollTop() >= $(".time").offset().top) {
                    // $("#fix").css("margin-top", 0)
                } else {
                    //$("#fix").css("margin-top", $("#top-off").offset().top - 230)
                }
            })
        }
    }
})

$(window).on('ready load resize orientationchange', function () { responsive(); });