# Hair Day

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14-brightgreen)
![Webpack](https://img.shields.io/badge/Webpack-5-blue)
![Day.js](https://img.shields.io/badge/Day.js-1.11-yellow)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-orange)

Projeto de exemplo "Hair Day" — formulário de agendamento com uma API local mínima (armazenamento em memória) para facilitar testes.

## Tecnologias usadas

- Node.js (servidor API simples)
- Webpack (bundling do frontend)
- Day.js (manipulação de datas)
- JavaScript moderno (módulos ES)

## Rápido: como rodar

1. Inicie a API local (Node.js necessário):

```bash
# abra um terminal na pasta do projeto Hair Day API
cd "Nivel_2_JavaScript/2.3-Avançado-pre-FrameWork/projeto Hair Day/api"
node server.js
```

A API ficará disponível em http://localhost:3333

2. Build / desenvolvimento do frontend

- Para gerar o bundle (produção/preview):

```bash
npm run build
```

- Para rodar em modo desenvolvimento (serve + hot-reload, se configurado):

```bash
npm run dev
```

> Observação: execute os comandos acima a partir da raiz do repositório onde está o `package.json`.

3. Abra a aplicação no navegador (após build ou usando o dev server). Se estiver usando o dev server, ele deve abrir automaticamente.

## Endpoints da API

- `GET /appointments` — lista todos os agendamentos
- `GET /appointments?date=YYYY-MM-DD` — lista agendamentos de uma data
- `POST /appointments` — cria um agendamento (JSON com `client`, `hour`, `date`)

Exemplo de corpo para POST:

```json
{
	"client": "Maria",
	"hour": "09:00",
	"date": "2026-03-20"
}
```

## Testando o formulário

1. Garanta que a API esteja rodando (passo 1).
2. Abra a interface (build ou dev server).
3. Selecione data, clique em um horário disponível, preencha o nome do cliente e envie.

Se o envio for bem-sucedido, o agendamento aparece na lista lateral.

## Observações e limitações

- A API armazena os dados apenas em memória: reiniciar o servidor limpa os agendamentos.
- Para produção, implemente persistência (SQLite, JSON file, MongoDB etc.) e validação de concorrência/confliitos.

## Próximos passos sugeridos

- Bloquear horários já agendados (no backend).
- Persistir em banco de dados.
- Melhorar UX: mensagens inline, loaders, desabilitar botão durante envio.

---

Se precisar, posso implementar a persistência em arquivo JSON ou migrar a API para Express + banco.
