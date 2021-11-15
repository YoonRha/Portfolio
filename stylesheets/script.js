$(document).ready(function(){

    checkWidth();
    $(window).resize(function() { checkWidth(); })
    function checkWidth() {
        if ($(window).width() < 1200) {
            $("body").addClass("mobile");
        } else {
            $("body").removeClass("mobile");
            $(".mobileMenu").css({ "transition": "none" })
        }
    }

    $(".triplebar").click(function() {
        $(".mobileMenu").css({ "transition": "all 1s ease-out" })
        $(".mobileMenu").toggleClass("expanded");;
    });

    $("#currentYear").html(new Date().getFullYear());



    // Hero Fix ----------------------------------------------------------------------
    var conHeight = $("#pullup .hero").height();
    var imgHeight = $("#pullup .hero img").height();
    var gap = (imgHeight - conHeight) / 2;
    $("#pullup .hero img").css("top", -gap);



    // Pullup ------------------------------------------------------------------------
    $(".projectContainer").click(function() { 
        const PROJECTINDEX = $(this).index();
        const PROJECTIMGURL = $(".projectContainer:nth-child("+(PROJECTINDEX+1)+") img").attr("src")
        const PROJECTHERO = "url("+PROJECTIMGURL+")";
        $("#pullupProject .hero").css({ "background":PROJECTHERO, "background-position":"50% 50%" });


        const PNAME = ".projectContainer:nth-child("+(PROJECTINDEX+1)+") p:first-of-type";
        const PROJECTNAME = $(PNAME).text();
        $("#pullupProject .hero h1").html(PROJECTNAME);

        setPullup("project");
    });

    $("#about").click(function() { 
        $("#pullupAbout .hero").css({ "background": "url(images/about/banner-about.jpg)"});
        setPullup("about");
    });

    function setPullup(projectOrClass) {
        if(projectOrClass === "project") {
            $("#pullupProject").addClass("show");
            $("#pullupAbout").removeClass("show");
        } else { //about
            $("#pullupAbout").addClass("show");
            $("#pullupProject").removeClass("show");
        }
        $("#pullup").addClass("show"); 
    }

    $("#pullupToggle").click(function() { hidePullup() });
    $("#design").click(function() { hidePullup() });
    $("#logo").click(function() { hidePullup() });
    function hidePullup(){
        $("#pullup").removeClass("show");
    }
})
