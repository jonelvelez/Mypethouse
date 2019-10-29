class Signup{
    constructor(emailValue, firstName, lastName){
        this.email = emailValue;
        this.firstName = firstName;
        this.lastName = lastName;

    }

    static signupremove(){
        signupform.style.display = "none"    
        ovelayopen.style.display = "none"
    }
}

class Userdisplay {
    navbarsignup(userdetail){
        let login = document.querySelector('.login');
        let signup = document.querySelector('.signup')
        let logout = document.querySelector('.logout')

        login.textContent = userdetail.firstName
        login.style.pointerEvents = "none";
        signup.style.display = "none"
        logout.style.display = "block"
    }
}

class Store {
    static getUsers(){
        let users;
        if(localStorage.getItem('user') === null){
            users = [];
        }
         else {
            users = JSON.parse(localStorage.getItem('user'));
        }
        return users;
    }
        static AddUser(user) {
            const users = Store.getUsers();
            users.push(user);
            localStorage.setItem('user', JSON.stringify(users));
           
        }

        static getValue(){
            const finalvalue = Store.getUsers();

            finalvalue.forEach((a) => {
                let userdisplay = new Userdisplay;
                userdisplay.navbarsignup(a);
            });
        }

        static removeLocalstorage(){
            localStorage.clear();
        }
}


let closeIcon = document.querySelector('.closeIcon');
let signupform = document.querySelector('.signupform');
let ovelayopen = document.querySelector('.overlayopen');
let signuptext = document.querySelector('.signup');
let btnsubmit = document.querySelector('.btnsubmit');
let logout = document.querySelector('.logout')

        //Close Icon function
        closeIcon.addEventListener('click', () => {
            Signup.signupremove();
        });
    
        //Close when you click outside the signupform
        ovelayopen.addEventListener('click', () => {
            Signup.signupremove();
        });

        //to popup the signup form
        signuptext.addEventListener('click', () => {
            signupform.style.display = "block"    
            ovelayopen.style.display = "block"
        });
        
        //Load the event
        document.addEventListener('DOMContentLoaded', Store.getValue)


        btnsubmit.addEventListener('click', () => {

        
            let email = document.querySelector('.email');
            let firstName = document.querySelector('.fname');
            let lastName = document.querySelector('.lname');

            const emailValue = email.value;
            const firstNameValue = firstName.value;
            const lastNameValue = lastName.value


            let phoneNum = document.querySelector('.phoneNum');
            let age = document.querySelector('.age');
            let password = document.querySelector('.password');

            let phoneValue = phoneNum.value;
            let ageValue = age.value;
            let passwordValue = password.value;

           
           //put on localStorage
            const signup = new Signup(emailValue, firstNameValue, lastNameValue)
           

            if(!emailValue || !firstNameValue || !lastNameValue || !phoneValue || !ageValue || !passwordValue){
                phoneNum.classList.add('addclass');
                age.classList.add('addclass');
                password.classList.add('addclass'); 

                email.classList.add('addclass');
                firstName.classList.add('addclass');
                lastName.classList.add('addclass');
            } else {
                Store.AddUser(signup);
                Signup.signupremove();
                Store.getValue();
            }
        });

        logout.addEventListener('click', () => {
            localStorage.removeItem("user");
            window.location.reload(true);
        });

    
        
