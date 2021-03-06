// Assignment code here
var criteria = {
  lowercaseChars: 'abcdefghijklmnopqrstuvwxyz',
  uppercaseChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numericChars: '0123456789',
  specialChars: '!"#$%&()*+,-.[/:;<=>?@]^_`{|}~' + "'" + '\\'
};

var length = '';
var possible = '';
var password = '';

function generatePassword() {
  // VALIDATE ALL ANSWERS AND ONE CHARACTER TYPE SHOULD 
  window.alert("Let's make you a password!");

  // prompted for length of password - between 8 and 128
  generatePasswordLength();

  // generate password characters
  generatePasswordCharacters();

  // generate password from compiled possible string
  for (var i = 0; i < length; i++) {
    password += possible.charAt(Math.floor(Math.random() * possible.length));
  };

  return password;

};

function generatePasswordLength() {

  var passwordLength = Number(window.prompt("How long do you want your password. (choose between 8 - 128)"));

  if (isNaN(passwordLength)) {

    window.alert("Please type a number!!!");
    generatePasswordLength();

  } else {

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a number between 8 and 128");
      generatePasswordLength();

    } else {

      length = passwordLength;

    };
  };
};

function generatePasswordCharacters() {
  var i = 0

  // lowercase?
  var passwordLowercase = window.confirm("Would you like to include lowercase characters?");
  if (passwordLowercase) {
    possible += criteria.lowercaseChars
    i++
  };

  // uppercase?
  var passwordUppercase = window.confirm("Would you like to include uppercase characters?");
  if (passwordUppercase) {
    possible += criteria.uppercaseChars
    i++
  };

  // numeric?
  var passwordNumeric = window.confirm("Would you like to include numeric characters?");
  if (passwordNumeric) {
    possible += criteria.numericChars
    i++
  };

  // special characters?
  var passwordSpecialCharacters = window.confirm("Would you like to include special characters?");
  if (passwordSpecialCharacters) {
    possible += criteria.specialChars;
    i++
  };

  if (i === 0) {
    window.alert("You must choose atleast one type of password character!!!")
    generatePasswordCharacters();
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
