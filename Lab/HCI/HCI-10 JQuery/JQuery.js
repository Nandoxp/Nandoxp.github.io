$(document).ready(function(){
    var button = document.getElementById("submit");

    // button.addEventListener("click", function(){
    //     var name = document.getElementById("txtname").value;
    //     var male = document.getElementById("male").value;
    //     var female = document.getElementById("female").value;
    // });

    $("#submit").click(function(){
        $('#txtName').val("Dion");
        var male = $("#male").is(":checked");
        var female = $("#female").is(":checked");

        //sama kayak
        //document.getElementById("txtName").value = Dion;
        console.log(male);
    });
    
    /////KOTAK IJO ANIMATE//////////
    $("#kotak").hover(function(){
        //gede pas hover
        // $(this).css({
        //     "width": "+=20px",
        //     "height": "+=10px"
        // });

        //kalo mau dianimate
        $(this).animate({
            "width": "+=20px",
            "height": "+=10px",
            "margin": "10px 10px"
        });
    });



    $("#kecilin").click(function(){
        $("#kotak").animate({
            "width": "-=20px",
            "height": "-=10px",
            "margin": "10px 10px"
        });
    });




    $("#clickMe").click(function(){
        //kotaknya naik, satuan milisecond
        //$("kotak").slideUp(1000);
        // .delay(1000);
        // .slideDown(500);

        $("#kotak").slideToggle(500);
        //fadeIn, fadeOut, fadeToggle, hide, show
    });
    /////////END OF KOTAK IJO ANIMATE/////////


    //////SLIDER//////
    var slideCount = $(".slide").length;
    var slideWidth = $(".slide").width();
    var slideHeight = $(".slide").height();

    $("#slider").css({
        "width" : slideWidth,
        "height" : slideHeight
    });
    
    idx = 1;

    function slideLeft(){
        if(idx < slideCount){
            $("#slides").animate({
                "left": "-="+slideWidth
            });
            idx++;
        }else{
            $("#slides").animate({
                "left": "0px"
            });
            idx = 1;
        }
    }

    setInterval(function(){
        slideLeft();
    }, 1000);
    ////SLIDER END/////
});
