// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ["`", "~", "_", "-", "=", "+", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "10", "11", "12", "13", "14", "15"];

var possibleChar = []
function generatePassword() {
  var finalPassword = []
  var passwordLength = prompt("How many characters do you want this password to be?")
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Not valid Length")
    return
  }
  console.log(passwordLength);
  var special = confirm("do you want special characters?")
  var lowerCase = confirm("do you want lower case characters?")
  var uperCase = confirm("do you want uper case characters?")
  var numeric = confirm("do you want numeric characters?")
  console.log(specialChar, lowerCaseChar, uperCaseChar, numericChar);

  if (special) {
   possibleChar = possibleChar.concat (specialChar)
 } 
  if (lowerCase) {
    possibleChar = possibleChar.concat (lowerCaseChar)
  }
  if (uperCase) {
    possibleChar = possibleChar.concat (uperCaseChar)
}
  if (numeric) {
    possibleChar = possibleChar.concat (numericChar)
}

for (let index = 0; index < passwordLength; index++) {
  finalPassword.push(possibleChar[Math.floor(Math.random() * possibleChar.length)])
}

return finalPassword.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
