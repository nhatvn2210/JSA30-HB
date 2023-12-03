// DOM

const fullNameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const dateOfBirthInput = document.querySelector("#date-of-birth");
const passwordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeat-password");
const signUpForm = document.querySelector("#sign-up-form");

// Function

// Sign up function
function handleSignUp(event){
    // Prevent Reload Page
    event.preventDefault();
    // Information Variable
    let fullName = fullNameInput.value;
    let email = emailInput.value;
    let dateOfBirth = dateOfBirthInput.value;
    let password = passwordInput.value;
    let repeatPassword = repeatPasswordInput.value;
    let accountData = {
        fullName,
        email,
        dateOfBirth,
        password,
        repeatPassword,
    };
    // Print information
    console.log(accountData);
}

// Main script

signUpForm.addEventListener("submit", function(event){
    // Call the sign up form
    handleSignUp(event);
})
