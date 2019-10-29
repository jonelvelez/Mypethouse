let slider = document.querySelector('.slider');
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')


window.addEventListener('DOMContentLoaded', () => {
    
        slider.style.transform = "translate3d(0px, 0px, 0px)";
        slider.style.transition = "transform 300ms ease 0s";
        nextPress = 0;
        prevPress = 0;
       
        next.addEventListener('click', () => {
            let mobile = window.matchMedia("(max-width: 414px)");
            if(mobile.matches){

                if(nextPress == 0){
                    slider.style.transform = "translate3d(-330px, 0px, 0px)";                  
                    nextPress++
                    prevPress++               
                } else if(nextPress == 1){
                    slider.style.transform = "translate3d(-660px, 0px, 0px)";
                    nextPress++
                    prevPress++
                } else if(nextPress == 2) {
                    slider.style.transform = "translate3d(-990px, 0px, 0px)";
                    nextPress++
                    prevPress++
                }  else if(nextPress == 3) {
                    slider.style.transform = "translate3d(-1320px, 0px, 0px)";
                    nextPress++  
                    prevPress++ 
                } else if(nextPress == 4) {
                    slider.style.transform = "translate3d(-1650px, 0px, 0px)"; 
                    nextPress++  
                    prevPress++  
                } 
            } else {
                if(nextPress == 0){
                    slider.style.transform = "translate3d(-1100px, 0px, 0px)";                  
                    nextPress++
                    prevPress++ 
                } else if(nextPress == 1){
                    slider.style.transform = "translate3d(-2200px, 0px, 0px)";
                    prevPress++ 
                    nextPress++
                } 
                
            }
    });
   
   

    prev.addEventListener('click', () => {
        let mobile = window.matchMedia("(max-width: 414px)");
        if(mobile.matches){

            if(prevPress == 1){
                slider.style.transform = "translate3d(0px, 0px, 0px)";                  
                nextPress--
                prevPress--
            } else if(prevPress == 2){
                slider.style.transform = "translate3d(-330px, 0px, 0px)";
                nextPress--
                prevPress--
            } else if(prevPress == 3) {
                slider.style.transform = "translate3d(-660px, 0px, 0px)";
                nextPress--
                prevPress--
            }  else if(prevPress == 4) {
                slider.style.transform = "translate3d(-990px, 0px, 0px)";
                nextPress--   
                prevPress--
            } else if(prevPress == 5) {
                slider.style.transform = "translate3d(-1320px, 0px, 0px)";
                nextPress--  
                prevPress--
            } 
        } else {
            if(prevPress == 1){
                slider.style.transform = "translate3d(0px, 0px, 0px)";                  
                nextPress--
                prevPress--
            } else if(prevPress == 2){
                slider.style.transform = "translate3d(-1100px, 0px, 0px)";
                nextPress--
                prevPress--
            } 
        }

    });
    
});