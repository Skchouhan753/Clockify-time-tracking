
// let chkbox = document.getElementById('chkbox')
// console.log(chkbox.value)

// let userData = JSON.parse(localStorage.getItem('signupData'));
// console.log(userData)
// function login(){
   
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let chkbox = document.getElementById('chkbox').value;    
//     // if(chkbox===true){
//         if(checkLoginData(email,password)===true){
//             alert('Login Sccesgull');
//             window.location.href="dashboard.html"
//         }
//         else{
//             alert('Wrong Username or Password')
//         }
//     // }
//     // else{
//     //     alert('Please accept Terms of Use ')
//     // }
    
// }

// function checkLoginData(email,password){
//     let filtered = userData.filter(function(el){
//         return el.email === email && el.password === password;
//     });
//     console.log(email)
//     if(filtered.length>0){
//         return true;
//     }else{
//         return false;
//     }
// }



let btn = document.getElementById("account");
let body = document.querySelector('body')

function validateUser(event) {

    let name = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (name == "" || password == "") {
        console.log("cant be null")
        alert("Email or Password Cannot be Null")
    }
        else {
            localStorage.setItem("email",name)
            localStorage.setItem("password",password)
            window.location = "dashboard.html"
        }
    console.log(name, password)
    event.preventDefault();
}

function Check() {
    let chkbox = document.getElementById('chkbox');

    if (chkbox.checked != true) {

        return false;
    }
    else {
        return true;
    }
}
btn.addEventListener('click', validateUser)
