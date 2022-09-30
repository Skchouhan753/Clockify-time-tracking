


let userData = JSON.parse(localStorage.getItem('signupData')) || [];
function createAccount(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    
    let data = {
                    email,
                    password
                }

    if(checkEmail(data.email)===true){
        userData.push(data)
        localStorage.setItem('signupData',JSON.stringify(userData));
        
    }
    else{
        alert('Account already exist')
    }


    document.getElementById('email').value=null;
    document.getElementById('password').value=null;
}


    function checkEmail(email){
        let filtered = userData.filter(function(el){
            return email === el.email
        });
        if(filtered.length>0){
            return false;
        }else{
            return true;
        }
    }


