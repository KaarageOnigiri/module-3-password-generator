// Assignment Code
var generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
// this one might not be used

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+{}|-=[]<>/";



// Write password to the #password input
function writePassword() {
  
  var length = prompt("Please enter the length of your password:");

  while (length < 8 || length > 128) {
    var length = prompt("Error, please enter a password between 8 - 128 characters:")
  }

  var upperCasePermission = prompt("Would you like upper case to be included? (Type 'yes' or 'no')");
  var lowerCasePermission = prompt("Would you like lower case to be included? (Type 'yes' or 'no')");
  var numberPermission = prompt("Would you like numbers to be included? (Type 'yes' or 'no')");
  var symbolPermission = prompt("Would you like symbols to be included? (Type 'yes' or 'no')");

  
  
  function generatePassword() {
    var password = "";
    var combined;

    if (upperCasePermission == "yes" || "Yes" || "YES") {
      password += upperCase[Math.floor(Math.random()*upperCase.length)];
      combined += upperCase;
    }
    if (lowerCasePermission == "yes" || "Yes" || "YES") {
      password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
      combined += lowerCase;
    }
    if (numberPermission == "yes" || "Yes" || "YES") {
      password += number[Math.floor(Math.random()*number.length)];
      combined += number;
    }
    if (symbolPermission == "yes" || "Yes" || "YES") {
      password += symbol[Math.floor(Math.random()*symbol.length)];
      combined += symbol;
    }
    

    while (password.length < length) {
      password += combined[Math.floor(Math.random()*combined.length)];
    }
  }

  passwordText.value = password;
  // wrong
  console.log(passwordText)

  // I don't get this line
  var password = generatePassword();

   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
