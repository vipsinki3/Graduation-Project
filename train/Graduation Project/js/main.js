
// نهاية كود التحويل بين التسجيل و تسجيل الدخول

let signin = document.getElementById("Sign-in");
let createAccount = document.getElementById("createAccount");
var gitCreate = () =>{
    signin.style.display = "none";
    createAccount.style.display = "flex";
}
var gitSignIn = ()=>{
    signin.style.display = "flex";
    createAccount.style.display = "none";
}

// نهاية كود التحويل بين التسجيل و تسجيل الدخول

let i = 0;
var text = " مرحبآ بك فى موقع قطارى";
function typing() {
if (i < text.length) {
    document.getElementById("text1").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
}
}
typing();







