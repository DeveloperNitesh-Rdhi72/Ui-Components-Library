const password = document.getElementById("password")
const icon = document.querySelector(".icon")
const button = document.querySelector(".reset")

button.addEventListener("click", () => {
    password.value = ""
    icon.classList.remove("fa-eye")
    icon.classList.add("fa-eye-slash")
    password.type = "password"
})

icon.addEventListener("click", () => {
    icon.classList.toggle("fa-eye")
    icon.classList.toggle("fa-eye-slash")
    if(icon.classList.contains("fa-eye-slash")){
        password.type = "password"
    }
    else{
        password.type = 'text'
    }
})