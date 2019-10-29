let slider = document.querySelector('.slider');
let prev = document.querySelector('.arrowleft')
let next = document.querySelector('.arrowright')


let dot = document.querySelectorAll('.about-dot');
let first = dot[0];
let second = dot[1];
let third = dot[2];
let fourth = dot[3];


window.addEventListener('DOMContentLoaded', () => {
    
        slider.style.transform = "translate3d(0px, 0px, 0px)";
        slider.style.transition = "transform 300ms ease 0s";
        first.style.background = "rgb(253, 29, 29)";
        nextPress = 0;
        prevPress = 0;
       
        next.addEventListener('click', () => {
            let ipod = window.matchMedia("(max-width: 1024px)");


            
            if(ipod.matches){
           
                if(nextPress == 0){
                    slider.style.transform = "translate3d(-530px, 0px, 0px)";                  
                    nextPress++
                    prevPress++  
                    
                    first.style.background = "none"
                    second.style.background = "rgb(253, 29, 29)"
                    third.style.background = "none"
                    fourth.style.background = "none"
                } else if(nextPress == 1){
                    slider.style.transform = "translate3d(-1060px, 0px, 0px)";
                    nextPress++
                    prevPress++

                    first.style.background = "none"
                    second.style.background = "none"
                    third.style.background = "rgb(253, 29, 29)"
                    fourth.style.background = "none"
                } else if(nextPress == 2) {
                    slider.style.transform = "translate3d(-1590px, 0px, 0px)";
                    nextPress++
                    prevPress++

                    first.style.background = "none"
                    second.style.background = "none"
                    third.style.background = "none"
                    fourth.style.background = "rgb(253, 29, 29)"
                }  
            } else {
         
                if(nextPress == 0){
                    slider.style.transform = "translate3d(-385px, 0px, 0px)";                  
                    nextPress++
                    prevPress++ 

                    first.style.background = "none"
                    second.style.background = "rgb(253, 29, 29)"
                    third.style.background = "none"
                    fourth.style.background = "none"
                } else if(nextPress == 1){
                    slider.style.transform = "translate3d(-760px, 0px, 0px)";
                    nextPress++
                    prevPress++ 
                    first.style.background = "none"
                    second.style.background = "none"
                    third.style.background = "rgb(253, 29, 29)"
                    fourth.style.background = "none" 
                   
                } else if(nextPress == 2){
                    slider.style.transform = "translate3d(-1145px, 0px, 0px)";
                    prevPress++ 
                    nextPress++
                    first.style.background = "none"
                    second.style.background = "none"
                    third.style.background = "none"
                    fourth.style.background = "rgb(253, 29, 29)"
                   
                } 
                
            }
    });
   
   

    prev.addEventListener('click', () => {
        let ipod = window.matchMedia("(max-width: 1024px)");
        if(ipod.matches){

            if(prevPress == 1){
                slider.style.transform = "translate3d(0px, 0px, 0px)";                  
                nextPress--
                prevPress--

                first.style.background = "rgb(253, 29, 29)"
                second.style.background = "none"
                third.style.background = "none"
                fourth.style.background = "none"
            } else if(prevPress == 2){
                slider.style.transform = "translate3d(-530px, 0px, 0px)";   
                nextPress--
                prevPress--

                first.style.background = "none"
                second.style.background = "rgb(253, 29, 29)"
                third.style.background = "none"
                fourth.style.background = "none"
            } else if(prevPress == 3) {
                slider.style.transform = "translate3d(-1060px, 0px, 0px)";
                nextPress--
                prevPress--

                first.style.background = "none"
                second.style.background = "none"
                third.style.background = "rgb(253, 29, 29)"
                fourth.style.background = "none"
            }  
        } else {
            if(prevPress == 1){
                slider.style.transform = "translate3d(0px, 0px, 0px)";                  
                nextPress--
                prevPress-- 
                first.style.background = "rgb(253, 29, 29)"
                second.style.background = "none"
                third.style.background = "none"
                fourth.style.background = "none" 
            } else if(prevPress == 2){
                slider.style.transform = "translate3d(-385px, 0px, 0px)";
                prevPress-- 
                nextPress--
                first.style.background = "none"
                second.style.background = "rgb(253, 29, 29)"
                third.style.background = "none"
                fourth.style.background = "none" 
            } else if(prevPress == 3){
                slider.style.transform = "translate3d(-760px, 0px, 0px)";        
                nextPress--
                prevPress-- 
                first.style.background = "none"
                second.style.background = "none"
                third.style.background = "rgb(253, 29, 29)"
                fourth.style.background = "none" 
               
            } 
        }

    });


    
        


    first.addEventListener('mouseover', () => {
        let mobile = window.matchMedia("(max-width: 414px)");

        if(mobile.matches){
            slider.style.transform = "translate3d(0px, 0px, 0px)";
            nextPress = 0
            first.style.background = "rgb(253, 29, 29)"
            second.style.background = "none"
            third.style.background = "none"
            fourth.style.background = "none"
            
        } else {
            slider.style.transform = "translate3d(0px, 0px, 0px)";
            nextPress = 0
            first.style.background = "rgb(253, 29, 29)"
            second.style.background = "none"
            third.style.background = "none"
            fourth.style.background = "none"
        }

        
    });

    second.addEventListener('mouseover', () => {

        let mobile = window.matchMedia("(max-width: 414px)");

        if(mobile.matches){
            slider.style.transform = "translate3d(-315px, 0px, 0px)";
            nextPress = 0
            first.style.background = "none"
            second.style.background = "rgb(253, 29, 29)"
            third.style.background = "none"
            fourth.style.background = "none"
            
        } else {

            slider.style.transform = "translate3d(-385px, 0px, 0px)";
            nextPress = 1   
            prevPress = 1    
            first.style.background = "none"
            second.style.background = "rgb(253, 29, 29)"
            third.style.background = "none"
            fourth.style.background = "none"
     }
    });

    third.addEventListener('mouseover', () => {

        let mobile = window.matchMedia("(max-width: 414px)");

        if(mobile.matches){
            slider.style.transform = "translate3d(-630px, 0px, 0px)";
            nextPress = 0
            first.style.background = "none"
            second.style.background = "none"
            third.style.background = "rgb(253, 29, 29)"
            fourth.style.background = "none"
            
        } else {

        slider.style.transform = "translate3d(-760px, 0px, 0px)";
        nextPress = 2    
        prevPress = 2  
        first.style.background = "none"
        second.style.background = "none"
        third.style.background = "rgb(253, 29, 29)"
        fourth.style.background = "none" 

        }
    });

    fourth.addEventListener('mouseover', () => {

        let mobile = window.matchMedia("(max-width: 414px)");

        if(mobile.matches){
            slider.style.transform = "translate3d(-945px, 0px, 0px)";
            nextPress = 0
            first.style.background = "none"
            second.style.background = "none"
            third.style.background = "none"
            fourth.style.background = "rgb(253, 29, 29)"
            
        } else {

        slider.style.transform = "translate3d(-1145px, 0px, 0px)";
        nextPress = 3   
        prevPress = 3  
        first.style.background = "none"
        second.style.background = "none"
        third.style.background = "none"
        fourth.style.background = "rgb(253, 29, 29)" 
        } 
    });
    
    
});




