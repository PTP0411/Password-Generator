const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const specials = "~`!@#$%^&*()_-+=[]{},|:;<>.?/".split("");

function getRandomCharacter(array){
    return array[Math.floor(Math.random() * array.length)];
}
function generate(){
    const lengthInput = document.getElementById("length").value;
    const includeNumbers = document.getElementById("include-numbers").checked;
    const includeCharaters = document.getElementById("include-char").checked;
    const includeSpecials = document.getElementById("include-specials").checked;
    let availableCharacters;
    if (includeCharaters) availableCharacters = [...letters];

    if (includeNumbers) availableCharacters = availableCharacters.concat(numbers);
    if (includeSpecials) availableCharacters = availableCharacters.concat(specials);
    
    let randomPassword = "";
    for  (i = 0; i < lengthInput; ++i){
        randomPassword += getRandomCharacter(availableCharacters);
    }
    return randomPassword;
}

function generatePassword(){
    document.querySelector("#pass-1").textContent = generate();
    document.querySelector("#pass-2").textContent = generate();
}

function copyToClipboard(element) {
    if (!element) return; // defensive check
    console.log("Clicked element:", element);
    const text = element.textContent;

    navigator.clipboard.writeText(text).then(() => {
        element.classList.add("copied");

        setTimeout(() => {
            element.classList.remove("copied");
        }, 1000);
    }).catch(err => {
        console.error("Clipboard error:", err);
    });
}



