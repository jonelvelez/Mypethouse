class Monthtime {
    constructor(monthdec, enabledvalue, time){
        this.month = monthdec;
        this.date = enabledvalue;
        this.time = time;
    }
}

class Monthtimedisplay{
    static getmonthtime(){
        let mt;
        if(localStorage.getItem('m&t') === null){
            mt = [];
        } else {
            mt = JSON.parse(localStorage.getItem('m&t'));
        }
        return mt;
    }

    static Addmonthtime(mt){
        const mandt = Monthtimedisplay.getmonthtime();
        mandt.push(mt);
        localStorage.setItem('m&t', JSON.stringify(mandt));
    }
}
//Set Date Now

let date = new Date()
document.querySelector('.datetoday').innerHTML = date;


//Calendar Next and Prev

let dec = document.querySelector('.dec');
let jan = document.querySelector('.jan');
let feb = document.querySelector('.feb');
let nextdec = document.querySelector('.dec .next');
let nextjan = document.querySelector('.jan .next');
let prevfeb = document.querySelector('.feb .prev');
let prevjan = document.querySelector('.jan .prev')

    nextdec.addEventListener('click', ()=> {
        dec.style.display = "none";
        jan.style.display = "block";
    });

    nextjan.addEventListener('click', ()=>{
        jan.style.display = "none";
        feb.style.display = "block";
    });

    prevfeb.addEventListener('click', ()=>{
        jan.style.display = "block";
        feb.style.display = "none";
    });

    prevjan.addEventListener('click', ()=>{
        jan.style.display = "none";
        dec.style.display = "block";
    });


let enableddec = document.querySelectorAll('.dec .enabled')
let monthDisplay = document.querySelector('.monthDisplay');
let dateDisplay = document.querySelector('.dateDisplay');

   Array.from(enableddec).forEach((enableddecAll) => {

    enableddecAll.addEventListener('click', () => {
     
            let time = document.querySelector('input[name="time"]:checked').value;
            let monthdec = document.querySelector('.dec .month').textContent;
            let date = enableddecAll.textContent

            //Remove item in local storage 
            localStorage.removeItem("m&t");

            //Initantiate Monthtime
            const monthtime = new Monthtime(monthdec, date, time)

            Monthtimedisplay.Addmonthtime(monthtime);

            timeanddate = JSON.parse(localStorage.getItem('m&t'));
            timeanddate.forEach((a) => {

                monthDisplay.textContent = a.month;
                dateDisplay.textContent = a.date;
            });
        });
   });

   let enabledjan = document.querySelectorAll('.jan .enabled')

   Array.from(enabledjan).forEach((enabledjanAll) => {

    enabledjanAll.addEventListener('click', () => {
     
            let time = document.querySelector('input[name="time"]:checked').value;
            let monthdec = document.querySelector('.jan .month').textContent;
            let date = enabledjanAll.textContent

            //Remove item in local storage 
            localStorage.removeItem("m&t");

            //Initantiate Monthtime
            const monthtime = new Monthtime(monthdec, date, time)

            Monthtimedisplay.Addmonthtime(monthtime);

            timeanddate = JSON.parse(localStorage.getItem('m&t'));
            timeanddate.forEach((a) => {

                monthDisplay.textContent = a.month;
                dateDisplay.textContent = a.date;
            });
        });
   });

   let enabledfeb = document.querySelectorAll('.feb .enabled')

   Array.from(enabledfeb).forEach((enabledfebAll) => {

    enabledfebAll.addEventListener('click', () => {

            let time = document.querySelector('input[name="time"]:checked').value;
            let monthdec = document.querySelector('.feb .month').textContent;
            let date = enabledfebAll.textContent

            //Remove item in local storage 
            localStorage.removeItem("m&t");

            //Initantiate Monthtime
            const monthtime = new Monthtime(monthdec, date, time)

            Monthtimedisplay.Addmonthtime(monthtime);

            timeanddate = JSON.parse(localStorage.getItem('m&t'));
            timeanddate.forEach((a) => {

                monthDisplay.textContent = a.month;
                dateDisplay.textContent = a.date;
            });
        });
   });




   let btnNext = document.querySelector('.btnNext');

   btnNext.addEventListener('click', () => {
       if(monthDisplay.textContent == ""){
           alert("Get Date First")
       } else {
        let newUrl = ['appoint-payment.html']
        document.location.href = newUrl;
       }
   });

   let btnBack = document.querySelector('.btnBack');

   btnBack.addEventListener('click', ()=> {
    localStorage.removeItem("appoint");
    let newUrl = ['appointment.html']
    document.location.href = newUrl;
   });
    





