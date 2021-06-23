let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let emailOk = false;
let senhaOk = false;

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido!";
        txtEmail.style.color = "red";
    } else {
        txtEmail.innerHTML = "E-mail válido!";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}

function validaSenha() {
    let txtSenha = document.querySelector("#txtSenha");
    if (senha.value.length < 8) {
        txtSenha.innerHTML = "Senha inválida!";
        txtSenha.style.color = "red";
    } else {
        txtSenha.innerHTML = "Senha válida!";
        txtSenha.style.color = "green";
        senhaOk = true;
    }
}

function enviar() {
    if (emailOk == true && senhaOk == true) {
        alert("Tentativa de login enviada!");
    } else {
        alert("Insira os dados corretamente antes de enviar...");
    }
}