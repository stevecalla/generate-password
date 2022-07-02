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
  let characterTypes = getCharacterSelection(validPasswordLength); //refactor
  let password = createPassword(validPasswordLength, characterTypes); //refactor
  return password;
}

function getPasswordLength() {
  let numberOfCharacters = parseInt(window.prompt('How many characters would you like the password to contain?\n(must be at least 8 and at most 128)', 8));
  return numberOfCharacters;
}

function validatePasswordLength(passwordLength) {
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert(`Password must be:\n\n  (a) at least 8 characters,\n  (b) at most 128 characters,\n  (c) a number.\n\n Please enter again.`);
    return generatePassword();
  } else {
    return passwordLength;
  }
}

function getCharacterSelection() {
  let includeSpecialCharacters;
  let includeNumericCharacters;
  let includeLowerCaseCharacters;
  let includeUpperCaseCharacters;
  let characterComposition = [];

  includeLowerCaseCharacters =  window.confirm(`LOWER CASE?\n\n(click OK to include & CANCEL to exclude)`);
  characterComposition.push(includeLowerCaseCharacters);
  
  includeUpperCaseCharacters =  window.confirm(`Upper Case?\n\n(click OK to include & CANCEL to exclude)`);
  characterComposition.push(includeUpperCaseCharacters);

  includeSpecialCharacters =  window.confirm(`Special Characters?\n\n(click OK to include & CANCEL to exclude)`);
  characterComposition.push(includeSpecialCharacters);

  includeNumericCharacters =  window.confirm(`Numeric Characters?\n\n(click OK to include & CANCEL to exclude)`);
  characterComposition.push(includeNumericCharacters);

  if (!characterComposition.includes(true)) {
    window.alert(`Password must contain at least one character type.\n\nPlease try again.`)
    return getCharacterSelection();
  }

  return characterComposition;
}

function createPassword(numberOfCharacters, characterTypes) {
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
    console.log('87 = ', number2)
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
  console.log(password.join(''));
  return password.join('');
}

function getRandomNumber(number) {
  let randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
}

