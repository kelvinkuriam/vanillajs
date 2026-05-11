const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click",()=>{
    createPassword();
})
copyEl.addEventListener("click",()=>{
    copyPassword();
    if(inputEl.value){
    alertEl.classList.remove("active")
    setTimeout(()=>{
     alertEl.classList.add("active")
    },2000);
}

})

function createPassword(){
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/`~'\"\\";
    const passwordLength = 12;
    let password = "";
    for(let i = 0; i < passwordLength;i++){
        const randomNum= Math.floor(Math.random()*characters.length);
        password += characters.substring(randomNum,randomNum + 1);
    }
    inputEl.value = password;
    alertEl.innerText = password +   " copied!";
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
    

}
