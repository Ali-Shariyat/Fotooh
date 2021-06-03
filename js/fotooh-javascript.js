/////منو و زیر منو/////////////////////


$(".menu-down > li > .menu-down-md,.last-menu-down").hover(function () {
    $(this).parent().children(".last-menu-down").stop().fadeToggle()
})
$(".menu-down-xs > li > div").children(".plus-xs-last-menu-xs").click(function () {
    var i = $(this).attr("data-status")
    if (i == 1) {
        $(this).parent("div").parent("li").children(".last-menu-down-xs").stop().slideDown();
        $(this).attr("data-status", "2");
        $(this).attr("class", "glyphicon glyphicon-minus plus-xs-last-menu-xs")
    } else if (i == 2) {
        $(this).parent("div").parent("li").children(".last-menu-down-xs").stop().slideUp()
        $(this).attr("data-status", "1");
        $(this).attr("class", "glyphicon glyphicon-plus plus-xs-last-menu-xs")
    }
})



$(".menu li,.menu-down").hover(function () {
    $(this).children(".menu-down").stop().css("display", "block")
}, function () {
    $(this).children(".menu-down").stop().css("display", "none")
})
//////---- started by sadegh ---- /////
$("#search-btn").click(function () {
    $("#searchform").submit();
});
$("#search-btn-xs").click(function () {
    $("#searchform-xs").submit();
});

$("#searchform").on('submit', function (e) {
    if($("#search-btn").hasClass("svg-two")){
        var input = $("#search-txt").val();
        if (input.length < 3) {
            e.preventDefault();
            alert("حداقل ۳ کاراکتر وارد کنید")
        }
    }
    else
        e.preventDefault();
});
$("#searchform-xs").on('submit', function (e) {
    var input = $("#search-txt-xs").val();
    if (input.length < 3) {
        e.preventDefault();
        alert("حداقل ۳ کاراکتر وارد کنید")
    }
});
//////---- ended by sadegh ---- /////
var $offset_fixed = $("header").outerHeight() - $(".main-parent-md").outerHeight();
function fixed() {
    var $top = $(window).scrollTop();
        var wp_head = 0;
    if ($('#wpadminbar')[0]){
        wp_head = $('#wpadminbar').height();
    }
    if ($top > $offset_fixed) {
        $(".last-menu-down").css("padding-top","8px")
        $(".svg-one").removeClass("svg-two")
        $(".menu-down").width($(".back-header-two").width() - $(".logo").outerWidth() - 389)
        $(".back-header-two div:nth-child(1)").css({ "position": "relative" })
        $(".search").css({ "position": "absolute", "left": "0", "top": "0", "overflow": "hidden", "height": "38px", width: 267 })
        $(".search").addClass("search-add")
        $(".search input").css({ "width": "220px" })
        $(".search svg path").css({ "fill": "#fff" })
        $(".search svg").css({ top: "5px" })
        $(".back-header-two").css({
            "position": "fixed", "top": wp_head, "width": "100%", "z-index": "2", "background-image": "url(http://uupload.ir/files/fxd0_background-ehader.jpg)"
        });
        $(".search input").addClass("search-input-fixed fading-input")
        $(".sup-menu").css({
            "position": "fixed", top: $(".back-header-two").height()+wp_head, "width": "100%", "z-index": "1",
        })
        $(".logo").prependTo($(".back-header-two div.container")).css({ "float": "right", "height": "38px", "width": 150, "margin-left": "10px" })
        $(".logo-img").css({ "height": "36px", "width": "38px", });
        $(".logo-titr").css({ "font-size": "16px" });
        $(".logo-sup-titr").css({ "font-size": "8px" });
    } else {
        $(".last-menu-down").css("padding-top", "")
        $(".back-header-two,.sup-menu,.back-header-two div:nth-child(1),.search svg path,.search svg,.back-header-two,.sup-menu,.logo,.logo-sup-titr,.logo-titr,.logo-img").removeAttr("style")
        $(".search input,.search").removeAttr("style");
        $(".logo").appendTo($(".parent-logo"));
        $(".search input").removeClass("search-input-fixed  fading-input");
        $(".search").removeClass("search-add");
        $(".menu-down").width($(".back-header-two").width() - $(".search").outerWidth() - 96)
        $("#ascrail2001").css("top", "0");
        $(".svg-one").addClass("svg-two")


    }
}
$(window).scroll(function () {
    fixed()
});
$(window).ready(function () {
    fixed()
});
$(".search svg").click(function () {
            $(".search input").fadeIn();
            $(".search").css({ "transition": "all .5s ease", "background-color": "rgba(0, 0, 0, 0.65)" });
            $(".svg-one").addClass("svg-two")

})

//منو ریسپانسیو////////////////////////
$(".menu-down").css("top", $(".menu li").height()+10)

$(".menu-drop > div").children(".plus-xs").click(function () {
    var tro = $(this).attr("data-status")
    if (tro == 1) {
        $(this).attr("class", "glyphicon glyphicon-minus plus-xs")
        $(this).closest(".menu-drop").children(".menu-down-xs").stop().slideDown()
        $(this).attr("data-status",2)
    } else if (tro == 2) {
        $(this).attr("class", "glyphicon glyphicon-plus plus-xs")
        $(this).closest(".menu-drop").children(".menu-down-xs").stop().slideUp()
        $(this).attr("data-status", 1)
    }
})
$(".menu-xs-icon span").click(function () {
    $(".menu-xs").animate({ "right": "0" }, 500)
    $(".black").fadeIn();
})

$(".parent-close-icon span").click(function () {
    $(".menu-xs").animate({ "right": -$(".menu-xs").outerWidth() }, 500);
    $(".black").fadeOut();
})
/*--------------------------------------------------قسمت جستجو در ریسپانسیو--------------------------------------------*/

$(".search-xs-icon span").click(function () {
    $(".search-box").animate({
        "left": 0
    }, 500)
    $(".black").fadeIn();
})
/*--------------------------------------------------پایان قسمت جستجو در ریسپانسیو--------------------------------------------*/


$(".my-carusel").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    rtl: true,
    prevArrow: ".click-left",
    nextArrow: ".click-right",
    responsive: [
{
    breakpoint: 1024,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
    }
},
{
    breakpoint: 600,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
}
    ]
})

var bank = $("#bank-header li")
var header = $(".parent-content-bank > li")
var $header_one = $("#bank-header > li > p > span")
var $header_two = $("#bank-header > li > p")
function activing(i) {
    header.removeClass("active-one").eq(i).addClass("active-one")
    $header_one.removeAttr("style").eq(i).css("display", "block")
    $header_two.removeAttr("style").eq(i).css("color", "#68b4d7")
    console.log(i)
}
$("#bank-header li > p").click(function () {
    activing($(this).parent().index());
})


var header_sub = $(".parent-sub > ul")
var $header_one_sub = $("#bank-header-two > li > p > span")
var $header_two_sub = $("#bank-header-two > li > p")
function activing_two(i) {
    header_sub.removeClass("parent-sub-block").eq(i).addClass("parent-sub-block")
    $header_one_sub.removeAttr("style").eq(i).css("display", "block")
    $header_two_sub.removeAttr("style").eq(i).css("color", "#68b4d7")
    console.log(i)
}
$("#bank-header-two li > p").click(function () {
    activing_two($(this).parent().index());
})




var books = $(".parent-books > ul")
var $header_one_books = $("#books-header > li > p > span")
var $header_two_books = $("#books-header > li > p")
function activing_three(i) {
    books.removeClass("parent-sub-block").eq(i).addClass("parent-sub-block")
    $header_one_books.removeAttr("style").eq(i).css("display", "block")
    $header_two_books.removeAttr("style").eq(i).css("color", "#68b4d7")
    console.log(i)
}
$("#books-header li > p").click(function () {
    activing_three($(this).parent().index());
})




//$(".click-slide span:last-child").click(function () {
//    var i = $("#slider li").outerWidth();
//    $("#slider").stop().animate({
//        left: i
//    }, function () {
//        $("#slider").css("left", 0);
//        $("#slider li:first").insertAfter($("#slider li:last"))
//    })
//})
//(".left-arrow").click(function () {
//    var i = $("#slider li").outerWidth();
//    $("#slider").stop().animate({
//        left: -i
//    }, function () {
//        $("#slider").css("left", 0);
//        $("#slider li:last").insertAfter($("#slider li:first"))
//    })
//    console.log("aaa")
//})

































/*----------------------------------------------------click-in-body--------------------------*/
$(".black").click(function () {
    $(".black").fadeOut();
    $(".menu-xs").animate({ "right": -$(".menu-xs").outerWidth() }, 500);
    $(".search-box").animate({
        "left": "-110%"
    }, 500)
})
$(document).mouseup(function (e) {
    var container = $(".search,.search-xs-icon span");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $(".fading-input").fadeOut().parent().css({ "background-color": "transparent" })
          $(".svg-one").css("display", "block");
                $(".svg-one").removeClass("svg-two")

    }
});

/*-----------------------------------script-bottom-to top---------------------------*/
$(".to-top").click(function () {
    $(".fadin").css({
        "transform": "scale(1.5)",
        "transition": " all .7s ease",
        "opacity": "0"
    })
    setTimeout(function () {
        $(".fadin").removeAttr("style")
    }, 500)
    $("html,body").animate({
        scrollTop: 0
    }, 500)
})
function to_top() {
    if ($(document).scrollTop() > 100) {
        $(".to-top").fadeIn();
    } else {
        $(".to-top").fadeOut()
    }
}
$(document).load(function () {
    to_top(); 
})
$(document).scroll(function () {
    to_top();
})


$("blockquote").prepend("<svg width='30pt' height='29pt' viewBox='0 0 36 29'>" + "<g id='#bbbbbbff'>" + "<path fill='#bbbbbb' opacity='1.00' d='M 4.17 7.20 C 7.25 3.97 11.44 1.94 15.76 0.96 C 15.93 1.75 16.26 3.33 16.42 4.12 C 12.56 6.07 7.44 8.85 7.99 13.96 C 8.16 18.24 12.59 20.11 16.08 21.25 C 16.08 22.72 16.43 24.26 15.93 25.69 C 13.28 29.50 7.41 28.48 4.55 25.46 C -0.70 20.95 -0.60 12.01 4.17 7.20 Z' />" + "<path fill='#bbbbbb' opacity='1.00' d='M 20.15 12.16 C 22.33 5.96 28.67 2.37 34.76 0.96 C 34.92 1.75 35.26 3.33 35.43 4.12 C 31.56 6.07 26.44 8.85 26.99 13.96 C 27.16 18.24 31.59 20.12 35.08 21.24 C 35.07 23.14 35.81 25.62 33.83 26.83 C 30.38 29.62 25.08 27.68 22.56 24.44 C 19.39 21.22 19.23 16.32 20.15 12.16 Z' />" + "</g>" + "</svg>");
var defaultSettings = "fa"; (function (e) { e.fn.persiaNumber = function (t) { function r(e, t) { e.find("*").andSelf().contents().each(function () { if (this.nodeType === 3 && this.parentNode.localName != "style" && this.parentNode.localName != "script") { this.nodeValue = this.nodeValue.replace(this.nodeValue.match(/[0-9]*\.[0-9]+/), function (e) { return e.replace(/\./, ",") }); this.nodeValue = this.nodeValue.replace(/\d/g, function (e) { return String.fromCharCode(e.charCodeAt(0) + t) }) } }) } if (typeof t == "string" && t.length > 0) defaultSettings = t; var n = 1728; if (t == "ar") { n = 1584 } window.persiaNumberedDOM = this; r(this, n); e(document).ajaxComplete(function () { var e = window.persiaNumberedDOM; r(e, n) }) } })(jQuery); origParseInt = parseInt; parseInt = function (e) { e = e && e.toString().replace(/[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g, function (e) { return String.fromCharCode(e.charCodeAt(0) - 1728) }).replace(/[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669]/g, function (e) { return String.fromCharCode(e.charCodeAt(0) - 1584) }).replace(/[\u066B]/g, "."); return origParseInt(e) }; origParseFloat = parseFloat; parseFloat = function (e) { e = e && e.toString().replace(/[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g, function (e) { return String.fromCharCode(e.charCodeAt(0) - 1728) }).replace(/[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669]/g, function (e) { return String.fromCharCode(e.charCodeAt(0) - 1584) }).replace(/[\u066B]/g, "."); return origParseFloat(e) }
$(".my-pagination").persiaNumber("fa")
