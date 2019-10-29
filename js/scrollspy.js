// const aboutprofile = document.querySelector('.about-profile')
// const abouttrade = document.querySelector('.about-trade')
// const aboutproduction = document.querySelector('.about-production')


//     aboutprofile.addEventListener('click', () => {

//         window.scrollBy(0, 370);
//         // window.scrollTo(0,document.body.scrollHeight);
//         // window.scrollTo(0,document.querySelector(".about-profile").scrollHeight);
//     });

//     abouttrade.addEventListener('click', () => {

//         window.scrollBy(0, 740);
//         // window.scrollTo(0,document.body.scrollHeight);
//         // window.scrollTo(0,document.querySelector(".about-profile").scrollHeight);
//     });

//     aboutproduction.addEventListener('click', () => {

//         window.scrollBy(0, 1030);
//         // window.scrollTo(0,document.body.scrollHeight);
//         // window.scrollTo(0,document.querySelector(".about-profile").scrollHeight);
//     });



//Scroll Spy

$('.about-profile').click(function(e){
    e.preventDefault();
    var n = $(window).height()/3;
    $('html, body').animate({ scrollTop: n }, 500);
});



$('.about-trade').click(function(e){
    e.preventDefault();
    var n = $(window).height()/1;
    $('html, body').animate({ scrollTop: n }, 500);
});



$('.about-production').click(function(e){
    e.preventDefault();
    var n = $(document).height();
    $('html, body').animate({ scrollTop: n }, 500);
});



//about navbar



$(document).ready(function(){

    $(".nav-company").click(function(){
        $(".nav-company").css({
            backgroundColor: "#fff",
            borderBottom: "none",
            borderTop: "1px solid red"      
        });
        $('.nav-trade').css({
            backgroundColor: "rgba(230, 225, 225, 0.548)",
            borderBottom: "1px solid rgb(209, 203, 203)",
            borderTop: "1px solid rgb(209, 203, 203)"   
        });

        $('.nav-production').css({
            backgroundColor: "rgba(230, 225, 225, 0.548)",
            borderBottom: "1px solid rgb(209, 203, 203)",
            borderTop: "1px solid rgb(209, 203, 203)"  
        });

        $('.rightpart').css("display","block")

        $('.trade-right-part').css({
            display: "none"
        });

        $('.production-right-part').css({
            display: "none"
        });

        // $('.topintro').css("display","none")
    });



    $(".nav-trade").click(function(){
        $(".nav-trade").css({
            backgroundColor: "#fff",
            borderBottom: "none",
            borderTop: "1px solid red"      
        });
        $('.nav-company').css({
            backgroundColor: "rgba(230, 225, 225, 0.548)",
            borderBottom: "1px solid rgb(209, 203, 203)",
            borderTop: "1px solid rgb(209, 203, 203)"   
        });

        $('.nav-production').css({
            backgroundColor: "rgba(230, 225, 225, 0.548)",
            borderBottom: "1px solid rgb(209, 203, 203)",
            borderTop: "1px solid rgb(209, 203, 203)"  
        });

        $('.trade-right-part').css("display","block")

        $('.rightpart').css({
            display: "none"
        });

        $('.production-right-part').css({
            display: "none"
        });


        // $('.topintro').css("display","none")
    });


    $(".nav-production").click(function(){
        $(".nav-production").css({
            backgroundColor: "#fff",
            borderBottom: "none",
            borderTop: "1px solid red"      
        });
        $('.nav-company').css({
            backgroundColor: "rgba(230, 225, 225, 0.548)",
            borderBottom: "1px solid rgb(209, 203, 203)",
            borderTop: "1px solid rgb(209, 203, 203)"   
        });

        $('.nav-trade').css({
            backgroundColor: "rgba(230, 225, 225, 0.548)",
            borderBottom: "1px solid rgb(209, 203, 203)",
            borderTop: "1px solid rgb(209, 203, 203)"  
        });

        $('.production-right-part').css("display","block")

        $('.rightpart').css({
            display: "none"
        });

        $('.trade-right-part').css({
            display: "none"
        });
        
        // $('.topintro').css("display","none")
    });
}); 