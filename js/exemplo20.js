function qtd_linhas() {
    let funcionarios = document.getElementById("tabela-funcionarios");
    let qtd = funcionarios.getElementsByTagName("tr").length;
    return qtd;
}

function limpar_formulario() {
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = 18;
    document.getElementById("masculino").checked = true;
    document.getElementById("nome").focus;
}

function inserir_funcionario() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let sexo = "a definir";
    if (document.getElementById("masculino").checked) {
        sexo = "Masculino";
    } else {
        sexo = "Feminino";
    }
    adicionar_tabela(nome, sexo, idade);
    limpar_formulario();
}

function adicionar_tabela(nome, sexo, idade) {
    let tabela = document.getElementById("tabela-funcionarios");
    let linha = tabela.insertRow(qtd_linhas());
    
    let td_nome = linha.insertCell(0);
    let td_sexo = linha.insertCell(1);
    let td_idade = linha.insertCell(2);

    td_nome.innerHTML = nome;
    td_sexo.innerHTML = sexo;
    td_idade.innerHTML = idade;
}