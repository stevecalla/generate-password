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

  let numCharacters = window.prompt('How many characters would you like the password to contain?', 8)
  console.log('step1=', numCharacters)

  if (numCharacters < 8 || numCharacters > 128) {
    console.log('step#2 failed =', numCharacters);
    window.confirm('Password must be at least 8 characters.');
    return requestPassword();
  } else {
    console.log('step#3 passed =', numCharacters);
    window.confirm('Special Characters: Click OK to include & CANCEL to exclude.');
    window.confirm('Numeric Characters: Click OK to include & CANCEL to exclude.');
    window.confirm('Lower Case Characters: Click OK to include & CANCEL to exclude.');
    window.confirm('Upper Case Characters: Click OK to include & CANCEL to exclude.');
    window.alert('Must select at least one character type, please.');
    password = createPassword(numCharacters);
    return password;
  }

  console.log('step4=', numCharacters);
  return numCharacters;
}

function createPassword(numCharacters) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let password = [];

  for (let i = 0; i < numCharacters; i++) {
    number = Math.floor(Math.random() * alphabet.length);
    console.log(numCharacters);
    password.push(alphabet[number]);
  }

  console.log(password);
  console.log(password.length);
  return password.join('');
}

