class Breeding {
    constructor(first, second, third, fourth){
        this.first = first;
        this.second = second;
        this.third = third;
        this.fourth = fourth;
    
        // this.owner = owner;
        // this.nameofpet = nameofpet;
        // this.kindofbreed = kindofbreed;
    }

      
    firstmove(){
        if(this.first.value == "")
        this.first.classList.add('addclass')
    }

    secondmove(){
        if(this.second.value == "")
        this.second.classList.add('addclass')
    }

    thirdmove(){
        if(this.third.value == "")
        this.third.classList.add('addclass')
    }

    fourthmove(){
        if(this.fourth.value == "")
        this.fourth.classList.add('addclass')
    }
    
    lastmove(){
        if(this.first.value == "" || this.second.value == "" || this.third.value == "" ||this.fourth.value == ""){
            alert("Please Fill-up all form") 
        } else {
            let newUrl = ['appoint-schedule.html']
            document.location.href = newUrl;
        }
    }     
}


class Newbreeding{
    constructor(owner, nameofpet, kindofbreed, dogorcat, other, selectedkindofappoint){
        this.owner = owner;
        this.nameofpet = nameofpet;
        this.kindofbreed = kindofbreed;
        this.dogorcat = dogorcat;
        this.other = other;
        this.selectedkindofappoint = selectedkindofappoint;
    }
}

class Appointdisplay{
    static getAppoint(){
        let appoints;
        if(localStorage.getItem('appoint') === null){
            appoints = [];
        } else {
            appoints = JSON.parse(localStorage.getItem('appoint'));
        } 
        return appoints;
    }
    static AddAppoint(appoint){
        const appoints = Appointdisplay.getAppoint();
        appoints.push(appoint);
        localStorage.setItem('appoint', JSON.stringify(appoints));
    }
}


//Dropdown Dog or Cat

// let btnleftside = document.querySelector('.btnleftside')

//     function Dog(){
//         btnleftside.textContent = "Dog ";
//         icon = document.createElement('i');
//         icon.classList.add('fa-dog');
//         btnleftside.appendChild(icon);
//     }
//     document.querySelector('#dog').onclick = Dog;
    

//     function Cat(){
//         btnleftside.textContent = "Cat ";
//         icon = document.createElement('i');
//         icon.classList.add('fa-cat');
//         btnleftside.appendChild(icon);
//     }

//     document.querySelector('#cat').onclick = Cat;
    

//Dropdown Kind of Appointment

// let btnrightside = document.querySelector('.btnrightside')

//     function checkup(){
//         btnrightside.textContent = "Check-up";
//     }
//     document.querySelector('#checkup').onclick = checkup;

//     function grooming(){
//         btnrightside.textContent = "Grooming";
//     }
//     document.querySelector('#grooming').onclick = grooming;

//     function vaccine(){
//         btnrightside.textContent = "Vaccine";
//     }
//     document.querySelector('#vaccine').onclick = vaccine;

//     function deworming(){
//         btnrightside.textContent = "Deworming";
//     }
//     document.querySelector('#deworming').onclick = deworming;

//     function others(){
//         btnrightside.textContent = "Others";
//     }
//     document.querySelector('#others').onclick = others;





let btnagree = document.querySelector('.btn-agree');
// let dropdownbtn = document.querySelector('.btnleftside');


    btnagree.addEventListener('click', () => {
        let dogorcat = document.querySelector('input[name="catordog"]:checked').value
        let kindofappoint = document.querySelector('.kindofappoint');
        let selectedkindofappoint = kindofappoint.options[kindofappoint.selectedIndex].value;
        let other = document.querySelector('#others').value;
        let owner = document.querySelector('.owner').value;
        let nameofpet = document.querySelector('.nameofpet').value;
        let kindofbreed = document.querySelector('.breed').value;
        
        let breed = document.querySelectorAll('#breed');
        let first = breed[0];
        let second = breed[1];
        let third = breed[2];
        let fourth = breed[3];

      

        breeding = new Breeding(first, second, third, fourth);

        const appoint = new Newbreeding(owner, nameofpet, kindofbreed, dogorcat, other, selectedkindofappoint);

        if(first.value != "" || second.value != "" || third.value != "" || fourth.value != ""){
            Appointdisplay.AddAppoint(appoint);

            let newUrl = ['appoint-schedule.html']
            document.location.href = newUrl;
           
        } else {
            alert("Please Fill-up all form");
            breeding.firstmove();

            breeding.secondmove();
    
            breeding.thirdmove();
    
            breeding.fourthmove();
        }

        other.textContent = selectedkindofappoint
    });

  