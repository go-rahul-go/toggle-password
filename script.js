const username = document.querySelector("#username");

const password = document.querySelector("#password");

const showPassword = document.querySelector("#showPassword");


showPassword.addEventListener("click",(event)=>{
    var value=(password.type=="password")? "text": "password";
    password.setAttribute("type",value);
    
    var showattr = showPassword.getAttribute("class");
    if(showattr==="fa-solid fa-eye")
    {
        showPassword.setAttribute("class","fa-solid fa-eye-slash");
    }
    else
    {
        showPassword.setAttribute("class","fa-solid fa-eye");
    }
})

//prevent the form from submitting
document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault();
})