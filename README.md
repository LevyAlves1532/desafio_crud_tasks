# 🚀 Desafio CRUD de Tarefas com Node.js

<p align="center">
  <img src="https://raw.githubusercontent.com/nodejs/node/main/doc/api_assets/logo.svg" width="150" alt="Node.js Logo">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20.0+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Version">
  <img src="https://img.shields.io/badge/JavaScript-ESModules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript ESModules">
  <img src="https://img.shields.io/badge/Database-JSON-blue?style=for-the-badge" alt="JSON Database">
  <img src="https://img.shields.io/badge/Streams-Enabled-lightgrey?style=for-the-badge" alt="Streams Support">
</p>

---

## 📋 Sobre o Projeto

Este projeto é um **Gerenciador de Tarefas (CRUD)** desenvolvido como desafio prático para consolidar conhecimentos fundamentais de Node.js. A aplicação foi construída utilizando apenas módulos nativos do Node.js, sem o uso de frameworks externos como Express, demonstrando o domínio sobre o protocolo HTTP, roteamento manual, middlewares e persistência de dados.

### ✨ Funcionalidades Principais

- **Gestão de Tarefas**: Criação, listagem, atualização e remoção de tasks.
- **Busca Filtrada**: Listagem de tarefas com suporte a busca por título ou descrição via Query Parameters.
- **Validação de Dados**: Middleware de validação para garantir a integridade das informações enviadas no corpo da requisição.
- **Alternância de Estado**: Rota específica para marcar/desmarcar tarefas como concluídas (`completed_at`).
- **Importação via CSV**: Script automatizado que utiliza Streams para importar grandes volumes de tarefas a partir de um arquivo CSV.
- **Persistência Local**: Banco de dados em memória com persistência automática em um arquivo JSON.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: [Node.js](https://nodejs.org) (Nativo)
- **Módulos Nativos**: `http`, `crypto`, `fs/promises`, `url`
- **Importação**: [csv-parser](https://github.com/mafintosh/csv-parser)
- **Padrão de Projeto**: MVC (Model-View-Controller) simplificado
- **Formato de Dados**: JSON para comunicação e persistência

---

## 🚀 Como Iniciar

### 💻 Instalação Local

Certifique-se de ter o **Node.js 20.x** ou superior instalado.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/node-aulas.git
   cd node-aulas/desafio_crud_tarefas
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O servidor estará rodando em: `http://localhost:8888`

---

## 📊 Importação de Dados (CSV)

O projeto conta com scripts para facilitar o povoamento do banco de dados:

1. **Gerar arquivo CSV de exemplo:**
   ```bash
   npm run generate:csv
   ```

2. **Importar tarefas do CSV para o sistema:**
   ```bash
   npm run import:csv
   ```

---

## 🛣️ Rotas da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/tasks` | Lista todas as tarefas (suporta `?search=`) |
| `POST` | `/tasks` | Cria uma nova tarefa |
| `PUT` | `/tasks/:id` | Atualiza uma tarefa existente |
| `DELETE` | `/tasks/:id` | Remove uma tarefa |
| `PATCH` | `/tasks/:id/complete` | Marca/Desmarca tarefa como concluída |

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

<p align="center">Desenvolvido com foco em fundamentos de Node.js</p>
