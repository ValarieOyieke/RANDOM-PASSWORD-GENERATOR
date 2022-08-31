const chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
"+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let inputOneEl = document.getElementById("input-one")
let inputTwoEl = document.getElementById("input-two")
let getPasswordEl = document.getElementById("btn-one")
let passwordLengthEl = document.getElementById("password-length")

function getPassword() {
    const  passwordLength = passwordLengthEl.value;
    let passwordOne = "";
    let passwordTwo = "";

for (let i = 0; i < passwordLength; i++) {
    passwordOne += chars[(Math.floor(Math.random()*chars.length))]
    passwordTwo += chars[(Math.floor(Math.random()*chars.length))]
}
   inputOneEl.textContent += passwordOne
   inputTwoEl.textContent += passwordTwo
}

function resetPassword() {
    inputOneEl.textContent = ""
    inputTwoEl.textContent = ""
}