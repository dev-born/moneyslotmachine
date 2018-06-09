$(function(){
	 $(".timeperiod > span").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
       console.log("12");      
       
   });
    $(".switch-toggle > span").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
         $(".timeperiod >span").trigger("click");
       console.log("12");
       });
    
});
 