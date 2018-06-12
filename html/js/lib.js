$(function(){
    $(".switch-toggle > span").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".timeperiod > span").removeClass("active").eq($(this).index()).addClass('active');
        var text = $(this).data('val');
        $(".switch > span:contains("+text+")").addClass("active").siblings().removeClass("active")
    });
    $('.spinner').click(function(e) {
        var inputNotEmpty = true;
        var presentVal,intRate,years,futureVal,totalInt;
        $('input').each(function() { 
            if($.trim($(this).val()) == ''){
                inputNotEmpty = false;
            }
        });
        if(inputNotEmpty == false) {
            e.preventDefault();
            alert("Please fill all fields");
        }else {
            presentVal = parseFloat($("input[name=principalVal]").val());       
            intRate = parseFloat($("input[name=intRate]").val())/100;       
            years = parseFloat($("input[name=years]").val());   
            futureVal = presentVal * Math.pow((1.0+intRate),years);     
            totalInt = futureVal - presentVal;
            console.log(totalInt);
            futureVal = Math.round(futureVal*100.0)/100.0;   
            totalInt = Math.round(totalInt*100.0)/100.0;
            console.log(futureVal);
            console.log(totalInt);           
            $("input[name=totalInt]").val(totalInt);  
           setTimeout(function(){
                 $(".result").html(futureVal);
                 $(".statement ").html("<div class='wow'>WOW!</div><div>LOOK AT WHAT<br>YOU CAN MAKE</div>");              
                 $('html, body').animate({scrollTop: $('.wow').offset().top}, 1000);
                 $('.form-reset').css('margin-top','4%');
                  $('.spinimg-hand').addClass('active');
            }, 510);
            setTimeout(function(){               
                 $('.spinimg,.spin-bg').addClass('active');
               
            }, 500);
          
        }
    });
    $('#clear-form').on('click', function()    {
        $('.form-row').find('input').val('');
        $('.result,.statement').html(''); 
        $('.form-reset').css('margin-top','26%');  
         $('.spinimg,.spinimg-hand,.spin-bg').removeClass('active');   
    });
    
});
 