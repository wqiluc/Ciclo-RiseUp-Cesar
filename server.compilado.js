async function fetchProdutoById(id) {
  try {
    const resposta = await fetch(`http://localhost:3333/produtos/${id}`);
    const data = await resposta.json();
    console.log(data);
  } catch (erro) {
    console.log("Erro ao buscar produto:", erro);
  }
}
async function fetchUsuarioById(id) {
  try {
    const resposta = await fetch(`http://localhost:3333/usuarios/${id}`);
    const data = await resposta.json();
    console.log(data);
  } catch (erro) {
    console.log("Erro ao buscar usuário:", erro);
  }
}
async function carregarDados() {
  await fetchProdutoById(1);
  await fetchUsuarioById(1);
}
carregarDados();
async function criarUsuario(usuario) {
  try {
    const resposta = await fetch("http://localhost:3333/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario)
    });
    const data = await resposta.json();
    console.log(data);
  } catch (erro) {
    console.log("Erro ao criar usuário:", erro);
  }
}
criarUsuario({
  nome: "João",
  email: "joao@email.com"
});
