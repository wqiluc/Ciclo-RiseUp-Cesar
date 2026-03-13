<h1 align="center"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="20"> Pacotes em JavaScript (NPM) <br>
<img src="../2.3-Avançado-pre-FrameWork/img/pacote1.jpeg" width="430"></h1>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-Pacotes-F7DF1E?style=flat-square&logo=javascript&logoColor=black" height="22"/>
<img src="https://img.shields.io/badge/NPM-Gerenciador%20de%20Pacotes-red?style=flat-square&logo=npm&logoColor=white" height="22"/>
<img src="https://img.shields.io/badge/Nível-Intermediário-blue?style=flat-square" height="22"/>
</p>

---

<h2 align="center">📖 O que são Pacotes?</h2>

Pacotes em **JavaScript** são **bibliotecas ou módulos reutilizáveis** distribuídos através de um gerenciador de dependências.

Eles permitem reutilizar código pronto para resolver problemas comuns no desenvolvimento.

Exemplos de funcionalidades fornecidas por pacotes:

- manipulação de datas;
- requisições HTTP;
- criação de servidores;
- validação de dados;
- ferramentas de build.

A principal plataforma de distribuição é o **NPM (Node Package Manager)**.

---

<h2 align="center">📦 NPM (Node Package Manager)</h2>

<img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" width="430">

O **NPM** é o gerenciador oficial de pacotes do **Node.js**.

Ele permite:

- instalar bibliotecas;
- atualizar dependências;
- remover pacotes;
- compartilhar código com outros desenvolvedores.

Inicialização de um projeto:

```bash
npm init -y
Esse comando cria o arquivo:
package.json
<h2 align="center">📄 package.json</h2> <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*oQHhQ0siJmq9hw3rrodpBQ.png" width="430">
O package.json descreve as informações do projeto e suas dependências.
Exemplo:
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Projeto exemplo",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "axios": "^1.6.0"
  }
}
Principais campos:
name;
version;
scripts;
dependencies;
devDependencies.
<h2 align="center">📥 Instalando Pacotes</h2>
Existem duas formas principais de instalar pacotes.
Instalação local
O pacote é instalado dentro da pasta do projeto.
npm install axios
Ele será salvo em:
node_modules/
E registrado automaticamente no package.json.
Instalação global
O pacote pode ser utilizado em qualquer projeto do sistema.
npm install -g nodemon
<h2 align="center">📦 Importando Pacotes</h2>
Depois de instalar um pacote, ele pode ser utilizado no código.
Exemplo usando axios:
import axios from "axios";

axios.get("https://api.github.com/users")
.then(res => {
    console.log(res.data);
});
<h2 align="center">🧰 node_modules</h2> <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4RjF2qP4k7c4quYpVqnGPg.png" width="430">
A pasta node_modules contém todos os pacotes instalados no projeto.
Características:
pode conter milhares de arquivos;
é gerada automaticamente;
normalmente é ignorada no Git.
Arquivo .gitignore:
node_modules/
<h2 align="center">⚙️ Scripts NPM</h2>
Scripts permitem automatizar tarefas do projeto.
Exemplo no package.json:
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
Execução:
npm run dev
<h2 align="center">📊 Fluxo de Uso de Pacotes</h2>
Fluxo básico:
npm init
   ↓
package.json criado
   ↓
npm install pacote
   ↓
node_modules
   ↓
import no código
   ↓
execução do projeto
<h2 align="center">🧠 Conclusão</h2>
Pacotes são fundamentais no ecossistema JavaScript.
Eles permitem:
reutilização de código;
desenvolvimento mais rápido;
acesso a milhares de bibliotecas prontas;
padronização de projetos.
O NPM se tornou um dos maiores repositórios de software do mundo e é parte essencial do desenvolvimento moderno em Node.js e aplicações web.