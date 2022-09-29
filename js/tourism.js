$(document).ready(function(){
    


    $(window).scroll(function(e){
        $("header").css({
            top:-100
        }); 
        $(".moon, .show").css({
            top:$(window).scrollTop()*.6
        });
        $(".moon_light").show(20).css({
            right: $(window).scrollTop()*3.1,
        });
        $(".show").css({
            marginBottom:-$(window).scrollTop()*0.3
        });
        $(".down").css({
            top:5
        }); 
    });

    $(".fa-angles-down").click(function(){
        $("header").css({
            top:"+="+100
        }); 
        $(".down").css({
            top:-100
        }); 
    });
    $(".sp").live("click", function(){
        alert("The paragraph was clicked.");
    });



    

    });
