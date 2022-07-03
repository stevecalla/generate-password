// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText.value, passwordText.value.length, typeof passwordText.value)
  if (passwordText.value !== '0') {passwordText.style.color = 'blue'}; //added color to password
  passwordText.value = password;
}

// My code
function generatePassword() {
  let passwordLength = getPasswordLength(); //get password length
  console.log("1 = ", passwordLength);

  let validPasswordLength = validatePasswordLength(passwordLength); //validate password length
  console.log("2 = ", validPasswordLength);

  if (validPasswordLength === null) { //exit if user selects cancel in window prompt box
    return null;
  }

  let isCharacterType = getCharacterTypes(); //get character types
  console.log("3 = ", isCharacterType);
  // let isCharacterType = validPasswordLength ? getCharacterTypes() : undefined;

  let characterType = convertCharacterType(isCharacterType); //convert to array of numbers representing character types
  console.log("4 = ", characterType);
  // let characterType = isCharacterType ? convertCharacterType(isCharacterType) : undefined;

  let validCharacterTypes = characterType
    ? validateCharacterTypes(characterType)
    : undefined; //validate character types
  console.log("5 = ", characterType);
  // let validCharacterTypes = characterType ? validateCharacterTypes(characterType) : undefined;

  let characterTypeList = getCharacterTypeList(
    validPasswordLength,
    validCharacterTypes
  ); //randomly select character type for each character in the password
  console.log("6 = ", characterTypeList);
  // let characterTypeList = validCharacterTypes ? getCharacterTypeList(validPasswordLength, validCharacterTypes) : undefined;

  let password = createPassword(characterTypeList); //get password
  console.log("7 = ", characterTypeList);
  // let password = characterTypeList ? createPassword(characterTypeList) : generatePassword();

  return password;
}

//get password length input
function getPasswordLength() {
  // let numberOfCharacters = parseInt(
  //   window.prompt(
  //     "How many characters would you like the password to contain?\n(must be at least 8 and at most 128)",
  //     8
  //   )
  // );
  let numberOfCharacters =
    window.prompt(
      "How many characters would you like the password to contain?\n(must be at least 8 and at most 128)",
      8
    )
    console.log(numberOfCharacters);

    if (numberOfCharacters !== null) {
      parseInt(numberOfCharacters);
    } 
    else {
      return null;
    }
  return numberOfCharacters;
}

//ensure password length is a number (isNaN), is at least 8, is at most 128
function validatePasswordLength(passwordLength) {
  console.log(passwordLength, isNaN(passwordLength));
  // if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  //   window.alert(
  //     `Password must be:\n\n  (a) at least 8 characters,\n  (b) at most 128 characters,\n  (c) a number.\n\n Please enter again.`
  //   );
  //   let getValidPasswordLength = getPasswordLength();
  //   return validatePasswordLength(getValidPasswordLength);
  // } else {
  //   return passwordLength;
  // }

  if (passwordLength === null) { //if user selects window prompt cancel return null then exit program
    return null;
  } else if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { //if user enters non-numeric characters or length <8 >128 request again
    window.alert(
      `Password must be:\n\n  (a) at least 8 characters,\n  (b) at most 128 characters,\n  (c) a number.\n\n Please enter again.`
    );
    let getValidPasswordLength = getPasswordLength();
    return validatePasswordLength(getValidPasswordLength);
  } 
  return passwordLength;
}

//get character type selection (e.g. lower, upper, special, number)
function getCharacterTypes() {
  let characterSelection = [];

  let includeLowerCaseCharacters = window.confirm(
    `LOWER CASE?\n\n(click OK to include & CANCEL to exclude)`
  );
  characterSelection.push(includeLowerCaseCharacters);

  let includeUpperCaseCharacters = window.confirm(
    `UPPER CASE?\n\n(click OK to include & CANCEL to exclude)`
  );
  characterSelection.push(includeUpperCaseCharacters);

  let includeSpecialCharacters = window.confirm(
    `SPECIAL CHARACTERS?\n\n(click OK to include & CANCEL to exclude)`
  );
  characterSelection.push(includeSpecialCharacters);

  let includeNumericCharacters = window.confirm(
    `NUMBERS?\n\n(click OK to include & CANCEL to exclude)`
  );
  characterSelection.push(includeNumericCharacters);

  return characterSelection;
}

//convert character selection true/false to number lookup representing each character type/array
function convertCharacterType(isCharacterType) {
  let convertedCharacterSelection = [];

  for (let i = 0; i < isCharacterType.length; i++) {
    if (isCharacterType[i]) {
      convertedCharacterSelection.push(i);
    }
  }
  return convertedCharacterSelection;
}

//check that character type selected array length is greater than 0; if not request again
function validateCharacterTypes(characterTypes) {
  let count = 0;
  if (characterTypes.length === 0) {
    window.alert(
      `Password must contain at least one character type.\n\nPlease try again.`
    );

    let isCharacterType = getCharacterTypes();
    let characterType = convertCharacterType(isCharacterType);
    return validateCharacterTypes(characterType);
  }
  return characterTypes;
}

//randomly select character type for each character in the password
function getCharacterTypeList(numberOfCharacters, characterTypes) {
  let randomNumber;
  let characterSelection = [];

  for (let i = 0; i < numberOfCharacters; i++) {
    randomNumber = getRandomNumber(characterTypes.length);
    characterSelection.push(characterTypes[randomNumber]);
  }

  return characterSelection;
}

//creates password
function createPassword(characterSelection) {
  //refactor
  const alphabetLowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const alphabetUpperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const specialCharacters = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
    "]",
    ";",
  ];
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  let password = [];
  let randomNumber;
  let characters = [];

  //determines which character array to select character from
  // for (let i = 0; i < numberOfCharacters; i++) {
  for (let i = 0; i < characterSelection.length; i++) {
    if (characterSelection[i] === 0) {
      characters = alphabetLowerCase;
    } else if (characterSelection[i] === 1) {
      characters = alphabetUpperCase;
    } else if (characterSelection[i] === 2) {
      characters = specialCharacters;
    } else if (characterSelection[i] === 3) {
      characters = numbers;
    } else {
      console.log("something went wrong");
    }

    //randomly select each character for password (from character arrays)
    randomNumber = getRandomNumber(characters.length);
    password.push(characters[randomNumber]);
  }
  return password.join("");
}

//generates random number as requested
function getRandomNumber(arrayLength) {
  let randomNumber = Math.floor(Math.random() * arrayLength);
  return randomNumber;
}
