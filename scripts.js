let passwordTag = document.querySelector("#password");
let confirmPasswordTag = document.querySelector("#passwordConfirm");
let submitButton = document.querySelector(".submitButton");

let passwordMatcher =  (password, confirmPassword, e) => {
    

    if(password.value != confirmPassword.value){
       
        e.preventDefault();

        let pError = document.createElement("p");
        pError.classList.add("matchError");
        pError.innerText = "Passwords do not match";

        passwordTag.parentElement.appendChild(pError);

    }

}

submitButton.addEventListener("click", (e) => {

    
        passwordMatcher(passwordTag, confirmPasswordTag, e);
       

});

