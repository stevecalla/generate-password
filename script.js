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

    let returned = characterDefinition();
    // console.log('returned=', returned);
    // window.alert('Must select at least one character type, please.');

    password = createPassword(numberOfCharacters, returned);
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

  includeLowerCaseCharacters =  window.confirm('Lower Case Characters: Click OK to include & CANCEL to exclude.');
  characterComposition.push(includeLowerCaseCharacters);
  
  includeUpperCaseCharacters =  window.confirm('Upper Case Characters: Click OK to include & CANCEL to exclude.');
  characterComposition.push(includeUpperCaseCharacters);

  includeSpecialCharacters =  window.confirm('Special Characters: Click OK to include & CANCEL to exclude.');
  characterComposition.push(includeSpecialCharacters);

  includeNumericCharacters =  window.confirm('Numeric Characters: Click OK to include & CANCEL to exclude.');
  characterComposition.push(includeNumericCharacters);

  console.log(characterComposition);
  console.log(characterComposition.includes(false));

  if (characterComposition.includes(false)) {

  }
  
  console.log(includeSpecialCharacters, includeNumericCharacters, includeLowerCaseCharacters, includeUpperCaseCharacters);
  return characterComposition;
}

function createPassword(numberOfCharacters, returned) {
  console.log(returned);
  let returned2 = [];

  for (let i = 0; i < returned.length; i++) {
    if (returned[i]) {
      returned2.push(i);
    }
  }
  // let returned2 = returned.map((element, index) => {console.log(element); if (element === true) {return index}});
  console.log(returned2)

  const alphabetLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const alphabetUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const specialCharacters = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~',']',';'];
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  console.log('lower length = ', alphabetLowerCase.length, 'special length = ', specialCharacters.length, 'upper length =', alphabetUpperCase.length, 'num length =', numbers.length);

  let randomNumbers = [];
  let password = [];
  let characterSelection = [];
  let characterArray = [];

  for (let i = 0; i < numberOfCharacters; i++) {
    //select random number out of the array each time
    //so if the array length is 2... determines random number then pulls at that index

    let number2 = Math.floor(Math.random() * returned2.length);

    console.log('returned2 = ', returned2, 'number2 = ', number2);

    characterSelection.push(returned2[number2]);

    // original code
    // let number2 = Math.floor(Math.random() * 4);
    // characterSelection.push(number2);

  }

  console.log('characterSelection = ', characterSelection);


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

    console.log(characterArray);

    let number = Math.floor(Math.random() * characterArray.length);
    // console.log(numberOfCharacters);
    randomNumbers.push(number);
    password.push(characterArray[number]);
  }

  console.log(randomNumbers);
  console.log(password);
  console.log(password.length);
  return password.join('');
}

