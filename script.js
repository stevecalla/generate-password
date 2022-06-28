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

// My code

function generatePassword() {
  let password = requestPassword();
  return password;
}

function requestPassword() {
  let password;
  let specialCharacters;
  let numericCharacters;
  let lowerCaseCharacters;
  let upperCaseCharacters;

  let numberOfCharacters = window.prompt('How many characters would you like the password to contain?', 8)
  console.log('step1=', numberOfCharacters)

  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    console.log('step#2 failed =', numberOfCharacters);
    window.confirm('Password must be at least 8 characters.');
    return requestPassword();
  } else {
    console.log('step#3 passed =', numberOfCharacters);

    specialCharacters =  window.confirm('Special Characters: Click OK to include & CANCEL to exclude.');
    numericCharacters =  window.confirm('Numeric Characters: Click OK to include & CANCEL to exclude.');
    lowerCaseCharacters =  window.confirm('Lower Case Characters: Click OK to include & CANCEL to exclude.');
    upperCaseCharacters =  window.confirm('Upper Case Characters: Click OK to include & CANCEL to exclude.');
    console.log(specialCharacters, numericCharacters, lowerCaseCharacters, upperCaseCharacters);

    window.alert('Must select at least one character type, please.');
    password = createPassword(numberOfCharacters);
    return password;
  }

  console.log('step4=', numberOfCharacters);
  return numberOfCharacters;
}

function createPassword(numberOfCharacters) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let password = [];

  for (let i = 0; i < numberOfCharacters; i++) {
    number = Math.floor(Math.random() * alphabet.length);
    console.log(numberOfCharacters);
    password.push(alphabet[number]);
  }

  console.log(password);
  console.log(password.length);
  return password.join('');
}

