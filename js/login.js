let login = document.querySelector('.login');
let loginform = document.querySelector('.loginform');
let overlayopen = document.querySelector('.overlayopen');
let donthave = document.querySelector('.donthave');
let signupform1 = document.querySelector('.signupform')
let btnlogin = document.querySelector('.btnlogin');

    login.addEventListener('click', () => {
       loginform.style.display = "block";
       overlayopen.style.display = "block";
    });

    overlayopen.addEventListener('click', () => {
        loginform.style.display = "none";
    });

    donthave.addEventListener('click', () => {
        loginform.style.display = "none";
        signupform1.style.display = "block";
    });

    btnlogin.addEventListener('click', () => {
        let username = document.querySelector('.username');
        let usernameValue = username.value

        let password = document.querySelector('.loginContent .password');
        let passwordValue = password.value;

        console.log(password)
        if(!usernameValue || !passwordValue){
            username.classList.add('addclass')
            password.classList.add('addclass')
        } else {
            alert('Incorrect Username or Password')
        }
    });