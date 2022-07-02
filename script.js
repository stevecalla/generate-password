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
  let password = requestPassword();
  return password;
}

function requestPassword() {
  let password;
  let returned;

  let numberOfCharacters = parseInt(window.prompt('How many characters would you like the password to contain?', 8));

  if (isNaN(numberOfCharacters) || numberOfCharacters < 8 || numberOfCharacters > 128) {
    window.alert(`Password must be:\n\n  (a) at least 8 characters,\n  (b) at most 128 characters,\n  (c) a number.\n\n Please enter again.`);
    return requestPassword();
  } else {
    let returned = characterDefinition();
    password = createPassword(numberOfCharacters, returned);
    return password;
  }
  return numberOfCharacters;
}

function characterDefinition() {
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
    return characterDefinition();
  }

  return characterComposition;
}

function createPassword(numberOfCharacters, returned) {
  let returned2 = [];

  for (let i = 0; i < returned.length; i++) {
    if (returned[i]) {
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
    let number2 = Math.floor(Math.random() * returned2.length);
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

    let number = Math.floor(Math.random() * characterArray.length);
    randomNumbers.push(number);
    password.push(characterArray[number]);
  }
  return password.join('');
}

