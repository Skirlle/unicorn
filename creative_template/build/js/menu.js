$(function(){
    $('.menu-humb__icon').on('click', function() {
       $('.menu-humb__navigation').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});
