const usuario = "jogador@poke.com"
const senha = "123456"

function verificaUsuario(){

let emailInput = document.getElementById("id-email")
let senhaInput = document.getElementById("id-senha")
let emailValue = emailInput.value
let senhaValue = senhaInput.value

console.log(emailValue)
console.log(senhaValue)

    if (emailValue === usuario && senhaValue === senha){
        alert("Seja bem vindo!")
    }else{
         alert("Usuário ou senha inválido")
    }

}
