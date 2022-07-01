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
  let returned;

  let numberOfCharacters = window.prompt('How many characters would you like the password to contain?', 8)
  console.log('step1=', numberOfCharacters)

  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    console.log('step#2 failed =', numberOfCharacters);
    window.confirm('Password must be at least 8 characters.');
    return requestPassword();
  } else {
    console.log('step#3 passed =', numberOfCharacters);

    returned = characterDefinition();
    console.log('returned=', returned);

    window.alert('Must select at least one character type, please.');
    password = createPassword(numberOfCharacters);
    return password;
  }

  console.log('step4=', numberOfCharacters);
  return numberOfCharacters;
}

function characterDefinition() {
  let includeSpecialCharacters;
  let includeNumericCharacters;
  let includeLowerCaseCharacters;
  let includeUpperCaseCharacters;
  let characterComposition = [];

  includeSpecialCharacters =  window.confirm('Special Characters: Click OK to include & CANCEL to exclude.');
  characterComposition.push(specialCharacters);

  includeNumericCharacters =  window.confirm('Numeric Characters: Click OK to include & CANCEL to exclude.');
  characterComposition.push(numericCharacters);

  includeLowerCaseCharacters =  window.confirm('Lower Case Characters: Click OK to include & CANCEL to exclude.');
  characterComposition.push(lowerCaseCharacters);

  includeUpperCaseCharacters =  window.confirm('Upper Case Characters: Click OK to include & CANCEL to exclude.');
  characterComposition.push(upperCaseCharacters);

  console.log(characterComposition);
  console.log(characterComposition.includes(false));
  if (characterComposition.includes(false)) {

  }
  

  console.log(specialCharacters, numericCharacters, lowerCaseCharacters, upperCaseCharacters);
  return characterComposition;
}

function createPassword(numberOfCharacters) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const specialCharacters = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~',']',';'];
  let password = [];

  for (let i = 0; i < numberOfCharacters; i++) {
    number = Math.floor(Math.random() * specialCharacters.length);
    console.log(numberOfCharacters);
    password.push(alphabet[number]);
  }

  console.log(password);
  console.log(password.length);
  return password.join('');
}

