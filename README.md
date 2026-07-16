# 📅 AFP Agendamento

Sistema completo de gerenciamento de agendamentos desenvolvido como projeto Full Stack.

A aplicação permite o gerenciamento de empresas, clientes, serviços e agendamentos, com autenticação de usuários e comunicação entre Front-end e Backend através de uma API REST.

---

# 🖥️ Tecnologias utilizadas

## Front-end

- React
- JavaScript
- Vite
- Axios
- React Hooks
- CSS

## Backend

- Python
- FastAPI
- PostgreSQL
- SQLAlchemy
- Alembic
- JWT Authentication

---

# 🏗️ Arquitetura do projeto
AFP Agendamento

├── afp-agendamento-front
│
│ ├── React
│ ├── Interface do usuário
│ ├── Consumo da API
│ └── Autenticação JWT
│
│
└── afp-agendamento-api
│
├── FastAPI
├── Banco PostgreSQL
├── Modelos SQLAlchemy
├── Migrações Alembic
└── Endpoints REST


---

# 🔐 Autenticação

O sistema utiliza autenticação baseada em JWT.

Fluxo:

1. Usuário informa email e senha no Front-end
2. React envia os dados para a API
3. API valida o usuário no banco
4. Backend retorna um token JWT
5. Front-end armazena o token e utiliza nas próximas requisições

---

# 📌 Funcionalidades

## Implementadas

✅ Cadastro de usuários  
✅ Login com email e senha  
✅ Geração de token JWT  
✅ Integração React + FastAPI  
✅ Banco de dados PostgreSQL  
✅ CRUD inicial da API  

---

## Em desenvolvimento

🚧 Dashboard administrativo  
🚧 Cadastro de empresas  
🚧 Cadastro de clientes  
🚧 Cadastro de serviços  
🚧 Gerenciamento de agendamentos  
🚧 Controle de permissões  

---

# ⚙️ Como executar o projeto

## Backend

Entre na pasta:

```bash
cd afp-agendamento-api

Criar ambiente virtual:

python -m venv .venv

Ativar:

Linux:

source .venv/bin/activate

Instalar dependências:

pip install -r requirements.txt

Executar API:

uvicorn app.main:app --reload

API disponível:

http://127.0.0.1:8000

Documentação:

http://127.0.0.1:8000/docs
Front-end

Entre na pasta:

cd afp-agendamento-front

Instalar dependências:

npm install

Executar:

npm run dev

Aplicação disponível:

http://localhost:5173
📡 Comunicação entre sistemas
React
  |
  | Axios + JWT Token
  |
  ↓
FastAPI
  |
  |
  ↓
PostgreSQL
📂 Endpoints principais
Autenticação
POST /auth/cadastro
POST /auth/login
POST /auth/token
Empresas
GET /empresas
POST /empresas
👩‍💻 Desenvolvido por

Andressa Ferreira Parussulo

Estudante de Ciência da Computação

Projeto desenvolvido para estudos, prática de desenvolvimento Full Stack e portfólio profissional.
