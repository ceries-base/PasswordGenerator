const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let button = document.getElementById('button'); 
let pass1 = document.querySelector('.box1'); 
let pass2 = document.querySelector('.box2'); 

//15 characters long 

button.addEventListener("click", function() { 
    
    let password = [];
    let passwordLength = 15; 
    
    for (let i = 0; i < passwordLength ; i++) {
    const randomNumber = characters[Math.floor(Math.random()*characters.length)];
    password += randomNumber;
    console.log(password)
    pass1.textContent = `${password}`;
   }
});

button.addEventListener("click", function() { 
    
    let password = [];
    let passwordLength = 15; 
    
    for (let i = 0; i < passwordLength ; i++) {
    const randomNumber2 = characters[Math.floor(Math.random()*characters.length)]; 
    password += randomNumber2;
    console.log(password)
    pass2.textContent = `${password}`;
   }
});