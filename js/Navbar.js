function ScrollNav(){
    let navbar = document.querySelector('.section-navbar');
    let lastScrollTop
    
    window.addEventListener('scroll', () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if(st > lastScrollTop){
            navbar.style.transform = "translate3d(0px, -100px, 0px)"
            navbar.style.transition = "transform 300ms ease 0s"
            // console.log(st)
            // console.log(lastScrollTop)
            
        } else if(st < lastScrollTop) {
            navbar.style.transform = "translate3d(0px, 0px, 0px)"
            navbar.style.transition = "transform 300ms ease 0s"
            // console.log(st)
            // console.log(lastScrollTop)
        }
        lastScrollTop = st;
        
    });
}

window.addEventListener('scroll', ScrollNav);