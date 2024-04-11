let passwordTag = document.querySelector("#password");
let confirmPasswordTag = document.querySelector("#passwordConfirm");
let submitButton = document.querySelector(".submitButton");

let passwordMatcher =  (password, confirmPassword) => {
    
    if(password.value != confirmPassword.value){
       passwordTag.innerHTML = a;
    }


}

submitButton.addEventListener("click", (e) => {

    
      passwordMatcher(passwordTag, confirmPasswordTag);
    


});

