let nomeCadastro = document.getElementById("name");
let emailCadastro = document.getElementById("email");
let telefoneCadastro = document.getElementById("phone");
let elementoBotaoSalvar = document.getElementById("botaoSalvar");
let elementoBotaoConcluir = document.getElementById("botaoConcluir");
let elementoFormulario = document.getElementById("box");

let arrayCadastro = [];

function limparCadastro() {
  nomeCadastro.value = "";
  emailCadastro.value = "";
  telefoneCadastro.value = "";
}

function salvarCadastro() {
  let nomeSalvo = nomeCadastro.value;
  let emailSalvo = emailCadastro.value;
  let telefoneSalvo = telefoneCadastro.value;

  let cadastro = {
    nome: nomeSalvo,
    email: emailSalvo,
    telefone: telefoneSalvo,
  };
  if (nomeSalvo != "" && emailSalvo != "" && telefoneSalvo != "") {
    arrayCadastro.push(cadastro);
  } else {
    alert("Preencha todos os campos!");
  }

  limparCadastro();
  console.log(arrayCadastro);
}

function exibirCadastro() {}

elementoBotaoSalvar.addEventListener("click", () => {
  salvarCadastro();
});
elementoBotaoConcluir.addEventListener("click", () => {
  elementoFormulario.innerHTML = "";
  elementoFormulario.innerHTML =
    "<span class='cadastro'>Clientes Cadastrados</span>";
  for (i = 0; i < arrayCadastro.length; i++) {
    let cadastroAtual = arrayCadastro[i];
    elementoFormulario.innerHTML += "<h5>Cliente" + i + "</h5>";
    elementoFormulario.innerHTML +=
      "<h6>Cliente:" + cadastroAtual.nome + "</h6>";
    elementoFormulario.innerHTML +=
      "<h6>Email:" + cadastroAtual.email + "</h6>";
    elementoFormulario.innerHTML +=
      "<h6>Telefone:" + cadastroAtual.telefone + "</h6>";
  }
});
