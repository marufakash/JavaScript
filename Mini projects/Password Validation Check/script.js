//----------------------------------

let pswrd = document.querySelector("#pswrd");
let toggleBtn = document.querySelector("#toggleBtn");

let lowerCase = document.querySelector("#lower");
let upperCase = document.querySelector("#upper");
let digit = document.querySelector("#number");
let specialChar = document.querySelector("#special");
let minLength = document.querySelector("#length");

// Show hide password
toggleBtn.onclick = function(){
    if(pswrd.type === 'password'){
        pswrd.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    }else{
        pswrd.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');
    }
}

function checkPassword(data){
    // javascript regular expression pattern
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');
}

// lower case validation check
if(lower.text(data)){
    lowerCase.classList.add('valid');
}else{
    lowerCase.classList.remove('valid');
}
// upper case validation check
if(upper.text(data)){
    upperCase.classList.add('valid');
}else{
    upperCase.classList.remove('valid');
}
// digit validation check
if(number.text(data)){
    digit.classList.add('valid');
}else{
    digit.classList.remove('valid');
}
// specialChar validation check
if(special.text(data)){
    specialChar.classList.add('valid');
}else{
    specialChar.classList.remove('valid');
}
// minLength validation check
if(length.text(data)){
    minLength.classList.add('valid');
}else{
    minLength.classList.remove('valid');
}