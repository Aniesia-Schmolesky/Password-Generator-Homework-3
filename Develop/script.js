// Assignment Code
var generateBtn = document.querySelector("#generate");

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

// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a","e","i","o","u"];
//   for(var i = 0;i < str.length;i++){
//     for(var j=0;j<vowels.length;j++){
//       if(str[i] === vowels[j]){
//         vowelsCount++;
//       }
//     }
//   }
  
//   return vowelsCount; 



// function checkboxEvent() {
//   if (document.getElementById("clicked").checked {

//     for (var i = 0, x = characters.length; i <= 1; i++) {
//     value += characters.charAt(Math.floor(Math.random() * x));
//    }
      
//   }

// }
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// signs = "U+0020, U+0021, U+0022, U+0023, U+0024, U+0025, U+0026, U+0027, U+0028, U+0029, U+002A, U+002B, U+002C, U+002D, U+002E, U+002F, U+003A, U+003B, U+003C, U+003D, U+003E, U+003F, U+004A, U+004B",

const checkbox = document.getElementById("clicked");
console.log(checkbox.checked);
