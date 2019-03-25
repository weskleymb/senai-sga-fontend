function testar() {
    let nome = document.getElementById("nome");
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = nome.value;
    limpar();
}

function limpar() {
    let nome = document.getElementById("nome");
    nome.value = "";
    nome.focus();
}
