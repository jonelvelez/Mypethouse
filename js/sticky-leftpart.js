function ScrollDown(){
    let leftpart = document.querySelector('.leftpart')
    let leftpartposition = leftpart.getBoundingClientRect().bottom
    let screenposition = window.innerHeight / 2;


    if(leftpartposition < 294 ){
       leftpart.classList.add('leftpartadd')
    } else {
       leftpart.classList.remove('leftpartadd')
    }

  
    console.log(leftpartposition)
    // console.log(screenposition)
}



window.addEventListener('scroll', ScrollDown);