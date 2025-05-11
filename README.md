# backend-express-mongodb

VIDEO 0.9: https://drive.google.com/file/d/1RIexiC5IDvRRp0qqRUbCTFD8S3d4wkgB/view?usp=sharing
VIDEO 1.0: https://drive.google.com/file/d/1f5Tg7RQ4nqK2dWwA7HsrlTpihKU_6Zxk/view?usp=sharing


🚀 API de Tasks com MongoDB e JWT
📌 Visão Geral
API CRUD completa para gerenciamento de tarefas pessoais semelhante a JIRA/TRELLO , com autenticação por JWT e isolamento de dados por usuário validado.

🔧 Tecnologias
Node.js + Express

MongoDB (Mongoose)

JWT (Autenticação)

Dotenv (Variáveis de ambiente)

🌟 Funcionalidades
🔐 Rotas Autenticadas
📂 requests/
├── create_task.sh       # POST /tasks - Cria nova tarefa
├── select_task.sh      # GET /tasks/:id - Busca tarefa específica
├── select_all_task.sh  # GET /tasks - Lista todas as tarefas do usuário
├── update_all.sh       # PUT /tasks/:id - Atualiza todos os campos da tarefa
├── update_some.sh      # PATCH /tasks/:id - Atualização parcial da tarefa
└── delete_task.sh      # DELETE /tasks/:id - Remove uma tarefa
🔒 Segurança
Token JWT obrigatório obtido através de login

Dados isolados por usuário

Validação de entrada

🛠️ Como Usar
Configure .env 

bash
npm install
npm run start:database
npm run start:app

crie outro terminal pra rodar o curl sem interromper o run

📋 Modelo da Tarefa
javascript
{
 userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
⚠️ Todas as requisições precisam do header Authorization: Bearer <token> obtido através do login
