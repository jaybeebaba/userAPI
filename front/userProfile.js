var token = localStorage.getItem("token");
var name = localStorage.getItem("name");
var userId = localStorage.getItem("userId");
var logout  = document.querySelector("#logout")

if(!token){
    window.location.href = "./login.html"
}
logout.addEventListener("click", function(){
    localStorage.clear();
    window.location.href = "./login.html";
})

var nameBar = document.querySelector(".nameBar")
nameBar.innerHTML = `Welcome to your test ${name}`




