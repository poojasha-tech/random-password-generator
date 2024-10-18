const passwordBox=document.getElementById("passowrd");
const length=12;

const upperCase="ABCDWFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*()?";

const allCharacter=upperCase+lowerCase+number+symbol;

function createPassword(){
    let passowrd="";
    passowrd+= upperCase[Math.floor(Math.random() *upperCase.length)];
    passowrd+= lowerCase[Math.floor(Math.random() *lowerCase.length)];
    passowrd+= number[Math.floor(Math.random() *number.length)];
    passowrd+= symbol[Math.floor(Math.random() *symbol.length)];


    while(length>passowrd.length){
        passowrd+= allCharacter[Math.floor(Math.random() *allCharacter.length)];
    }

    passwordBox.value=passowrd;
}

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    alert("password copied to the clipboard")

}

