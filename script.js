// Assignment Code
var generateBtn = document.querySelector("#generate");
var checkbox = document.getElementById("checkbox");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(characters) {
  let lowercase = "abcdefghijklmnopqrstuvwxyz"
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numbers = "0123456789"
  let symbols = "!'()*+,-./:;<=>?@[\]^_`{|}~"
  let value = ("")
  
  for (let i = 0, x = uppercase.length; i <= 1; i++) {
    value += uppercase.charAt(Math.floor(Math.random() * x));
  }

  for (let i = 0, x = lowercase.length; i <= 5; i++) {
  value += lowercase.charAt(Math.floor(Math.random() * x));
  }

  for (let i = 0, x = numbers.length; i <= 4; i++) {
  value += numbers.charAt(Math.floor(Math.random() * x));
  }

  for (let i = 0, x = symbols.length; i <= 1; i++) {
  value += symbols.charAt(Math.floor(Math.random() * x));
  }

  return value;

  
}

function addEventListener(checkbox) {
  if checkbox("click", )

}



// function numberLimit(x) {
//   return ((x >= 8) && (x <= 128));
// }


  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const checkbox = document.getElementById("clicked");
console.log(checkbox.checked);
