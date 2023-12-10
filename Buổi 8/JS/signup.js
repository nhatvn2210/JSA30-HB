// DOM

const fullNameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const dateOfBirthInput = document.querySelector("#date-of-birth");
const passwordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeat-password");
const signUpForm = document.querySelector("#sign-up-form");

// Datalist
let accountList = JSON.parse(localStorage.getItem("account-list")) || [];

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
    // Check: Are the inputs full-filling
    if(!fullName || !email || !dateOfBirth || !password || !repeatPassword)
    {
        alert("Điền hết tất cả các trường!");
        return ;
    }
    // Add to account list
    accountList.push(accountData);
    // Store in local storage
    localStorage.setItem("account-list", JSON.stringify(accountList));
}

// Main script

signUpForm.addEventListener("submit", function(event){
    // Call the sign up form
    handleSignUp(event);

})
