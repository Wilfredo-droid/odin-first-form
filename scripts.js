let passwordTag = document.querySelector("#password");
let confirmPasswordTag = document.querySelector("#passwordConfirm");

let passwordMatcher =  (password, confirmPassword) => {
    
    if(password.value == confirmPassword.value){
        console.log(1);
    }


}

passwordTag.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){
      passwordMatcher(passwordTag, confirmPasswordTag);
    }

});

