const usuario = "jogador@poke.com"
const senha = 123456

const emailUsuario = document.getElementById("id-email")
const senhaUsuario = document.getElementById("id-senha")
const digitado = emailUsuario.value



function verificaUsuario(){
    alert(digitado)
    
    // if (emailUsuario.value === usuario && senhaUsuario.value === senha){
    //     alert("Seja bem vindo!")
    // }else{
    //     alert("Usuário ou senha inválido")
    // }
}