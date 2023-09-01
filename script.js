// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // testing
  console.log("You ran the function 'generatePassword()'")

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "~!@#$%^&*()_+{}|-=[]<>/";

  var length = prompt("Please enter the length of your password:");
  
  if (length >= 8 && length <= 128) {

  }
  else if (length < 8 || length > 128) {
    length = prompt("Error, please enter a password between 8 - 128 characters:");
    while (length < 8 || length > 128) {
      length = prompt("Error, please enter a password between 8 - 128 characters:");
    }
    if (length >= 8 && length <= 128) {

    }
    else {
      alert("Please enter a number. Try again.");
      return;
    }
  }
  else {
    alert("Please enter a number. Try again.");
    return;
  }

  var upperCasePermission = confirm("Would you like upper case to be included?");
  var lowerCasePermission = confirm("Would you like lower case to be included?");
  var numberPermission = confirm("Would you like numbers to be included?");
  var symbolPermission = confirm("Would you like symbols to be included?");
  
  console.log(upperCasePermission, lowerCasePermission, numberPermission, symbolPermission);
  
  var password = "";
  var combined = "";
  
  if (upperCasePermission) {
    combined += upperCase;
    // testing
    console.log("upper case");
  }
  if (lowerCasePermission) {  
    combined += lowerCase;
    // testing
    console.log("lower case");
  }
  if (numberPermission) {   
    combined += number;
    //testing
    console.log("number");
  }
  if (symbolPermission) {   
    combined += symbol;
    // testing
    console.log("symbol");
  }
  if (combined === "") {
    alert("You need to select at least one type. Try again.");
    return;
  }
  
  while (password.length < length) {
    password += combined[Math.floor(Math.random()*combined.length)];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
