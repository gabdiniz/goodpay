// Banco de dados fake
const usuarios = [
  {
    nomeUsuario: "batata",
    email: "jose.almir@email.com",
    senha: "12345",
  },
  {
    nomeUsuario: "gabriel-braga",
    email: "gabriel.braga@email.com",
    senha: "12345",
  },
];

// Dados de entrada de login
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");

// Botão de entrar
const btnEntrar = document.getElementById("btn-entrar");

// Ouvinte de evento
btnEntrar.addEventListener("click", () => {
  // 1) Capturar os dados dos campos
  const email = campoEmail.value;
  const senha = campoSenha.value;

  // 2) Checar no array se existe usuário com email digitado
  // find => percorre o array até encontrar o elemento que satisfaz
  // a condição (retorna o elemento encontrado)
  let usuarioValido = usuarios.find((usuario) => usuario.email === email);
  campoEmail.value = '';
  if (usuarioValido !== undefined) {
    if (usuarioValido.senha === senha) {
      // console.log("Pode entrar!");
      window.location.pathname = ("../app.html");
    } else {
      alert("Senha incorreta!");
    }
  } else {
    // o usuário não existe
    alert("O usuário não existe!");
  }
});


