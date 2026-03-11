// Manipulando Objetos Imutáveis

const livro = {
    titulo: "Objetos Imutáveis",
    categoria: "JavaScript",
    autor: {
        nome: "Rodrigo",
        email: "rodrigo@email.com",
    },
};

// Criando um novo objeto sem alterar o original
const livroAtualizado = {
    ...livro,
    titulo: "Criando um Frontend moderno com HTML, CSS e JS",
    categoria: "Web",
    tipo: "Programação",
};

console.log(`\n📚 Livro original:
Título: ${livro.titulo}
Categoria: ${livro.categoria}
Autor: ${livro.autor.nome}
Email: ${livro.autor.email}
`);

console.log(`🚀 Livro atualizado:
Título: ${livroAtualizado.titulo}
Categoria: ${livroAtualizado.categoria}
Tipo: ${livroAtualizado.tipo}
Autor: ${livroAtualizado.autor.nome}
Email: ${livroAtualizado.autor.email}
`);