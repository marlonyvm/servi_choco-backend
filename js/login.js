const form = document.getElementById("loginForm")

form.addEventListener("submit", function(e){

e.preventDefault()

const email = document.getElementById("email").value
const password = document.getElementById("password").value

if(!email || !password){

alert("Por favor completa todos los campos")

return

}

if(password.length < 6){

alert("La contraseña debe tener mínimo 6 caracteres")

return

}

alert("Inicio de sesión exitoso")

window.location.href="../index.html"

})