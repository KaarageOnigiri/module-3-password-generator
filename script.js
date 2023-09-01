// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // testing
  console.log("You ran the function 'generatePassword()'")

  // 1. write prompts
  // 2. validate the inputs
  // 3. generate password based on criteria
  // 4. display password to the page (already done)

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "~!@#$%^&*()_+{}|-=[]<>/";

  var length = prompt("Please enter the length of your password:");

  while (length < 8 || length > 128) {
    var length = prompt("Error, please enter a password between 8 - 128 characters:")
  }

  var upperCasePermission = prompt("Would you like upper case to be included? (Type 'yes' or 'no')");
  var lowerCasePermission = prompt("Would you like lower case to be included? (Type 'yes' or 'no')");
  var numberPermission = prompt("Would you like numbers to be included? (Type 'yes' or 'no')");
  var symbolPermission = prompt("Would you like symbols to be included? (Type 'yes' or 'no')");
  
  console.log(upperCasePermission, lowerCasePermission, numberPermission, symbolPermission);
  
  var password = "";
  var combined;
  
  if (upperCasePermission.toLowerCase() === "yes") {
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    combined += upperCase;
    // testing
    console.log("upper case");
  }
  if (lowerCasePermission.toLowerCase() === "yes") {
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    combined += lowerCase;
    console.log("lower case");
  }
  if (numberPermission.toLowerCase() === "yes") {
    password += number[Math.floor(Math.random()*number.length)];
    combined += number;
    //testing
    console.log("number");
  }
  if (symbolPermission.toLowerCase() === "yes") {
    password += symbol[Math.floor(Math.random()*symbol.length)];
    combined += symbol;
    // testing
    console.log("symbol");
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
