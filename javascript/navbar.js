$(document).ready(function(){
    $('#toggler-btn').click(function (){
        if($('#toggler-btn').attr('aria-expanded') == "true"){
            $('#toggler-icon').removeClass('fa-bars');
            $('#toggler-icon').addClass('fa-times');
        }else{
            $('#toggler-icon').removeClass('fa-times');
            $('#toggler-icon').addClass('fa-bars');
        }
    })
    if ($(window).width() > 992) {

        $(window).scroll(function () {
            // console.log(headerHeight)
            if ($(this).scrollTop() > $('#nav-header-banner').height()) {
                $('#navbar-top').addClass("fixed-top");
                // $('#navbar-top').addClass('fadeInDown');
                // $('#navbar-top').addClass("white-bg");
                // $('#nav-bar').css("background",'white');
                // add padding top to show content behind navbar
                $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
            } else {
                $('#navbar-top').removeClass("fixed-top");
                // remove padding top from body
                $('body').css('padding-top', '0');
            }
        });
    }
})


