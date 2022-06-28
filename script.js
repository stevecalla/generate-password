// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // console.log('password');
}

function generatePassword() {
  let name = requestPassword();
  return name;
}

function requestPassword() {
  let numCharacters = window.prompt('How many characters would you like the password to contain?', 8)
  validateNumCharacters(numCharacters);
  // return numCharacters;
}

function validateNumCharacters(numCharacters) {
  if (numCharacters < 8 || numCharacters > 128)
}
