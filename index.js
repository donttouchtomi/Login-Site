const email = document.getElementById("email");
const password = document.getElementById("password");
const outputText = document.getElementById("outputText");
let emailInput;
let passwordInput;

const loginPage = document.getElementById("login");
const popup = document.getElementById("popup");

function closepopup() {
  popup.classList.remove("open-popup");
  //   loginPage.classList.remove("removelogin-page");
}

function login() {
  emailInput = email.value;
  passwordInput = password.value;
  if (
    typeof emailInput === "string" &&
    emailInput.includes("@") &&
    passwordInput.length > 0
  ) {
    popup.classList.add("open-popup");
    loginPage.classList.add("removelogin-page");
  } else {
    outputText.textContent = "Invalid Password or email";
  }
}
