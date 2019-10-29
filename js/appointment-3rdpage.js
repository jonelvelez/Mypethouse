class Payment {
    constructor(cardnum, namecard, cvv){
        this.cardnum = cardnum;
        this.namecard = namecard;
        this.cvv = cvv;
    }

    cardnum1(){
        if(this.cardnum.value == "")
        this.cardnum.classList.add('addclass')
    }

    namecard1(){
        if(this.namecard.value == "")
        this.namecard.classList.add('addclass')
    }

    cvv1(){
        if(this.cvv.value == "")
        this.cvv.classList.add('addclass')
    }

    // lastmove(){
    //     if(this.cardnum.value == "" || this.namecard.value == "" || this.cvv.value == ""){
    //         alert("Please Fill-up all form") 
    //     } 
    // } 
}



//Set date today
let date = new Date()
document.querySelector('.datetoday').innerHTML = date;



//Set Month on your card
let btnmonthside = document.querySelector('.btnmonthside')

    function January(){
        btnmonthside.textContent = "January";
    }
    document.querySelector('.dropdown-jan').onclick = January;

    function February(){
        btnmonthside.textContent = "February";
    }
    document.querySelector('.dropdown-feb').onclick = February;

    function March(){
        btnmonthside.textContent = "March";
    }
    document.querySelector('.dropdown-march').onclick = March;

    function April(){
        btnmonthside.textContent = "April";
    }
    document.querySelector('.dropdown-april').onclick = April;

    function May(){
        btnmonthside.textContent = "May";
    }
    document.querySelector('.dropdown-may').onclick = May;

    function June(){
        btnmonthside.textContent = "June";
    }
    document.querySelector('.dropdown-june').onclick = June;

    function July(){
        btnmonthside.textContent = "July";
    }
    document.querySelector('.dropdown-july').onclick = July;

    function August(){
        btnmonthside.textContent = "August";
    }
    document.querySelector('.dropdown-aug').onclick = August;
   
    function September(){
        btnmonthside.textContent = "September";
    }
    document.querySelector('.dropdown-sept').onclick = September;

    function October(){
        btnmonthside.textContent = "October";
    }
    document.querySelector('.dropdown-oct').onclick = October;

    function November(){
        btnmonthside.textContent = "November";
    }
    document.querySelector('.dropdown-nov').onclick = November;

    function December(){
        btnmonthside.textContent = "December";
    }
    document.querySelector('.dropdown-dec').onclick = December;




//Set Year on your card  
let btnyearside = document.querySelector('.btnyearside');

    function dropdown2008(){
        btnyearside.textContent = "2008";
    }
    document.querySelector('.dropdown-2008').onclick = dropdown2008;

    function dropdown2009(){
        btnyearside.textContent = "2009";
    }
    document.querySelector('.dropdown-2009').onclick = dropdown2009;

    function dropdown2010(){
        btnyearside.textContent = "2010";
    }
    document.querySelector('.dropdown-2010').onclick = dropdown2010;

    function dropdown2011(){
        btnyearside.textContent = "2011";
    }
    document.querySelector('.dropdown-2011').onclick = dropdown2011;

    function dropdown2012(){
        btnyearside.textContent = "2012";
    }
    document.querySelector('.dropdown-2012').onclick = dropdown2012;

    function dropdown2013(){
        btnyearside.textContent = "2013";
    }
    document.querySelector('.dropdown-2013').onclick = dropdown2013;

    function dropdown2014(){
        btnyearside.textContent = "2014";
    }
    document.querySelector('.dropdown-2014').onclick = dropdown2014;

    function dropdown2015(){
        btnyearside.textContent = "2015";
    }
    document.querySelector('.dropdown-2015').onclick = dropdown2015;

    function dropdown2016(){
        btnyearside.textContent = "2016";
    }
    document.querySelector('.dropdown-2016').onclick = dropdown2016;

    function dropdown2017(){
        btnyearside.textContent = "2017";
    }
    document.querySelector('.dropdown-2017').onclick = dropdown2017;

    function dropdown2018(){
        btnyearside.textContent = "2018";
    }
    document.querySelector('.dropdown-2018').onclick = dropdown2018;

    function dropdown2019(){
        btnyearside.textContent = "2019";
    }
    document.querySelector('.dropdown-2019').onclick = dropdown2019;


let reserveBtn = document.querySelector('.reserve-button')

    reserveBtn.addEventListener('click', () => {
        let cardnum = document.querySelector('.cardnum');
        let namecard = document.querySelector('.namecard');
        let cvv = document.querySelector('.cvvnum');
        let loginfirst = document.querySelector('.loginform');
        let overlayopenfirst = document.querySelector('.overlayopen');
     

        if(localStorage.getItem('user') === null){
            loginfirst.style.display = "block";
            overlayopenfirst.style.display = "block"
            
        } else if(cardnum.value == "" || namecard.value == "" || cvv.value == "") {
            alert("Please Fill-up all form") 
            payment = new Payment(cardnum, namecard, cvv);

            payment.cardnum1();
    
            payment.namecard1();
    
            payment.cvv1();
    
            // payment.lastmove();
        } else {
            let emailtext = document.querySelector('.emailreserved');
            let firstname = document.querySelector('.firstnamereserved');
            let lastname = document.querySelector('.lastnamereserved');

            users = JSON.parse(localStorage.getItem('user'));
            users.forEach((user) => {
               
                emailtext.textContent = user.email.toUpperCase();
                firstname.textContent = user.firstName.toUpperCase();
                lastname.textContent = user.lastName.toUpperCase();
            });
            let month = document.querySelector('.monthreserved');
            let date = document.querySelector('.datereserved');
            let time = document.querySelector('.timereserved');

            monthanddate = JSON.parse(localStorage.getItem('m&t'));
            monthanddate.forEach((monthanddates) => {
                    
                month.textContent = monthanddates.month.toUpperCase();
                date.textContent = monthanddates.date.toUpperCase();
                time.textContent = monthanddates.time.toUpperCase();

            
            });

            let ownerreserved = document.querySelector('.ownerreserved');
            let catdogreserved = document.querySelector('.catdogreserved');
            let nameofpetreserved = document.querySelector('.nameofpetreserved');

            let breedreserved = document.querySelector('.breedreserved');
            let checkupreserved = document.querySelector('.checkupreserved');
            let otherreserved = document.querySelector('.otherreserved');

            appoint = JSON.parse(localStorage.getItem('appoint'));
            appoint.forEach((appoints) => {
                    
                ownerreserved.textContent = appoints.owner.toUpperCase();
                catdogreserved.textContent = appoints.dogorcat.toUpperCase();
                nameofpetreserved.textContent = appoints.nameofpet.toUpperCase();
                breedreserved.textContent = appoints.kindofbreed.toUpperCase();
                checkupreserved.textContent = appoints.selectedkindofappoint.toUpperCase();
                otherreserved.textContent = appoints.other.toUpperCase();
            
            });
        }
    });


    function loadXMLDoc() {
        let reservedText = document.querySelector('.span1');
        let dateText = document.querySelector('.span2');
        let petText = document.querySelector('.span3');

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var text1 = response.reserved;


            // var output = "";
            // for(var i = 0; i < text1.length; i++){
            //     output += text1.span1;
            // }

            // console.log(response)
            // span11.textContent = output;

            // text1.forEach((responses) => {
            //     span11.textContent = `${responses.span1}`
            // });
            reservedText.textContent = text1.span1
            dateText.textContent = text1.span2
            petText.textContent = text1.span3
          }
        };
        xhttp.open("GET", "js/reserved.json", true);
        xhttp.send();
      }

      window.addEventListener('DOMContentLoaded', loadXMLDoc());


    let btnCancel = document.querySelector('.btnCancel');

            btnCancel.addEventListener('click', ()=>{
                location.reload();
            });
    
    let btnOk = document.querySelector('.btnok');

            btnOk.addEventListener('click', ()=> {
                let month = document.querySelector('.monthreserved');

                if(month.textContent == ""){
                    alert('Please fill-up all form')
                } else {
                    alert("Reserve Success!")
                    localStorage.removeItem("m&t");
                    localStorage.removeItem("appoint");

                    let newUrl = ['appointment.html']
                    document.location.href = newUrl;
                }
            });
            

