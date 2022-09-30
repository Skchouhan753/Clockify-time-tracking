
let chkbox = document.getElementById('chkbox')
console.log(chkbox.value)

let userData = JSON.parse(localStorage.getItem('signupData'));
console.log(userData)
function login(){
   
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let chkbox = document.getElementById('chkbox').value;    
    if(chkbox===true){
        if(checkLoginData(email,password)===true){
            alert('Login Sccesgull')
        }
        else{
            alert('Wrong Username or Password')
        }
    }else{
        alert('Please accept Terms of Use ')
    }
    
}

function checkLoginData(email,password){
    let filtered = userData.filter(function(el){
        return el.email === email && el.password === password;
    });
    console.log(email)
    if(filtered.length>0){
        return true;
    }else{
        return false;
    }
}
