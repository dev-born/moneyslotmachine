$(function(){
    $(".switch-toggle > span").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active")
    });
});