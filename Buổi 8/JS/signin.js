// DOM

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signInForm = document.querySelector("#sign-in-form");

// Functions

function handleSignin(event) {
    event.preventDefault();
    let email = emailInput.value;
    let password = passwordInput.value;
    if (!email || !password) {
        alert("Fill all field!");
        return;
    }

    let accountList = JSON.parse(localStorage.getItem("account-list")) || [];

    for (let i in accountList) {
        let currentAccount = accountList[i];
        if (email == currentAccount.email && password == currentAccount.password) {
            alert("Successfully sign in!");
            window.location.pathname = "";
            return;
        }
        alert("Email or password is not correct.");
    }
}

// Main script

signInForm.addEventListener("submit", function (event) {
    handleSignin(event);
})

