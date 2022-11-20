const form = document.getElementById('form');
const first_name = document.getElementById('name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const phone=document.getElementById('phone');
const password1= document.getElementById('password');
const password2 = document.getElementById('password2');
const button=document.getElementById('button')

  
function showError(input,message){
    let wrapper = input.parentElement;
    wrapper.className = 'form_item error';
    let small = wrapper.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    let wrapper = input.parentElement;
    wrapper.className = 'form_item success';
    
}

// function password match
function checkPasswordMatch(password1, password2){
    
        if (isValid(password1)){
            if(password1.value !== password2.value){
                showError(password2,'Password doesn\'t Matched ')
            }else{
                showSuccess(password2,'Password  Matched ')
            }
        }}

// check email is valid
const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function isValidEmail(email){
    let emailVal=email.value.toLowerCase();
    if (typeof emailVal==String){
        if (regEmail.test(emailVal)){
            showSuccess(emailVal);
        }else{
            showError(emailVal,'Email is not valid')
        }
    }
}
// check phone is valid
const regPhone =/ ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
function isPhoneValid(phone){
    let phoneVal=parseInt(phone.value);
        if (regPhone.test(phoneVal)){
            showSuccess(phoneVal);
        }else{
            showError(phoneVal,'Phone is not valid')
        }
    }

// check password is valid
//shoud contain one special charan and one number at least
const regPassword =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
function isPasswordValid(password){
    let passwordVal=password.value;
        if (regPassword.test(passwordVal)){
            showSuccess(passwordVal);
        }else{
            showError(passwordVal,'Password should contain atleast one number and one special character');
        }
    }


// check required constraint
//trim for check for the white space if exists
//trim discard the white space
function checkRequired(input){
       let myInput=input.value;
       if(!myInput){
        showError(myInput,'is required')
       }
       else if(myInput.value.trim() === ''){
           showError(myInput,'is required')
       }else{
           showSuccess(myInput);
       }
  };




 // check input lengthn 
 function checkLength(input,min,max){
    // let input=input.value;
     if(input.length<min){
         showError(input,`must be atleast ${min} characters`)
     }else if(input.length>max){
        showError(input,` must not exceed ${max} characters`)
     }else{
         showSuccess(input);
     }
 }

// Event Listeners
button.addEventListener('onSubmit',(e)=>{
    e.preventDefault();
   
    checkRequired(first_name);
    checkRequired(last_name);
    checkRequired(email);
    checkRequired(phone);
    checkRequired(password1);
    checkRequired(password2);
    

    checkLength(first_name,3, 15);
    checkRequired(last_name);
    checkLength(password1,6,25);
    checkLength(password2,6,25)
    checkLength(phone,10,13)

    isValidEmail(email);
    isValidPhone(phone);
    isValidPassword(password1);
 
    checkPasswordMatch(password1,password2);
});