// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// My code

function generatePassword() {
  let passwordLength = getPasswordLength();
  let validPasswordLength = validatePasswordLength(passwordLength);
  let characterTypes = validPasswordLength ? getCharacterTypes() : undefined;
  let validCharacterTypes = characterTypes ? validateCharacterTypes(characterTypes) : undefined;
  let password = validCharacterTypes ? createPassword(validPasswordLength, validCharacterTypes) : generatePassword(); //refactor
  return password;
}

function getPasswordLength() {
  let numberOfCharacters = parseInt(window.prompt('How many characters would you like the password to contain?\n(must be at least 8 and at most 128)', 8));
  return numberOfCharacters;
}

function validatePasswordLength(passwordLength) {
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert(`Password must be:\n\n  (a) at least 8 characters,\n  (b) at most 128 characters,\n  (c) a number.\n\n Please enter again.`);
    // return generatePassword();
    return;
  } else {
    return passwordLength;
  }
}

function getCharacterTypes() {
  let characterSelection = [];

  let includeLowerCaseCharacters =  window.confirm(`LOWER CASE?\n\n(click OK to include & CANCEL to exclude)`);
  characterSelection.push(includeLowerCaseCharacters);
  
  let includeUpperCaseCharacters =  window.confirm(`Upper Case?\n\n(click OK to include & CANCEL to exclude)`);
  characterSelection.push(includeUpperCaseCharacters);

  let includeSpecialCharacters =  window.confirm(`Special Characters?\n\n(click OK to include & CANCEL to exclude)`);
  characterSelection.push(includeSpecialCharacters);

  let includeNumericCharacters =  window.confirm(`Numeric Characters?\n\n(click OK to include & CANCEL to exclude)`);
  characterSelection.push(includeNumericCharacters);

  return characterSelection;
}

function validateCharacterTypes(characterTypes) {
  if (!characterTypes.includes(true)) {
    window.alert(`Password must contain at least one character type.\n\nPlease try again.`)
    return getCharacterTypes();
  }
  return characterTypes;
}

function createPassword(numberOfCharacters, characterTypes) { //refactor
  let returned2 = [];

  for (let i = 0; i < characterTypes.length; i++) {
    if (characterTypes[i]) {
      returned2.push(i);
    }
  }

  const alphabetLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const alphabetUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const specialCharacters = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~',']',';'];
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  let randomNumbers = [];
  let password = [];
  let characterSelection = [];
  let characterArray = [];

  for (let i = 0; i < numberOfCharacters; i++) {
    let number2 = getRandomNumber(returned2.length);
    characterSelection.push(returned2[number2]);
  }

  for (let i = 0; i < numberOfCharacters; i++) {
    if (characterSelection[i] === 0) {
      characterArray = alphabetLowerCase;
    } else if (characterSelection[i] === 1) {
      characterArray = alphabetUpperCase;
    } else if (characterSelection[i] === 2) {
      characterArray = specialCharacters;
    } else {
      characterArray = numbers;
    }

    let number = getRandomNumber(characterArray.length);
    randomNumbers.push(number);
    password.push(characterArray[number]);
  }
  return password.join('');
}

function getRandomNumber(number) {
  let randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
}

