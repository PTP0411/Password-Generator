const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function getRandomCharacter(){
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}
function generate(){
    const lengthInput = document.getElementById("length").value;
    let randomPassword = "";
    for  (i = 0; i < lengthInput; ++i){
        randomPassword += getRandomCharacter();
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



