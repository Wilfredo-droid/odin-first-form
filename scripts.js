let passwordTag = document.querySelector("#password");
let confirmPasswordTag = document.querySelector("#passwordConfirm");
let submitButton = document.querySelector(".submitButton");

let passwordMatcher =  (password, confirmPassword) => {
    
    if(password.value != confirmPassword.value){
       
        let pError = document.createElement("p");
        pError.classList.add("matchError");
        pError.innerText = "Passwords do not match";

        passwordTag.parentElement.appendChild(pError);

       return  true;
    }

    return false;

}

submitButton.addEventListener("click", (e) => {

    
      passwordMatcher(passwordTag, confirmPasswordTag);
       
      
    
      


});

