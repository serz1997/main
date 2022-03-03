$(function(){
  $('.go_to').click(function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top+50
            }, 900);
        }
        $(this).parent('.collapse').slideUp();
        return false;
    }); 
    
    $('.parallaxie').parallaxie();
    
    $('.changelog-toggle').click(function(){
        $('.changelog-wrapper').toggleClass('active');
        $(this).toggleClass('active');
        $('.changelog-wrapper').siblings().removeClass('active');
        $(this).siblings().removeClass('active');
    });
});
