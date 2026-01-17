# Avali-e WEB

Sistema web para avaliação de professores universitários.

## 🚀 Como executar a aplicação

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação e execução

1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd avalie-web
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

4. Execute a aplicação
```bash
npm run dev
```

## 🔧 Configuração

### Usando dados mockados (sem API)

Por padrão, a aplicação está configurada para usar dados mockados, permitindo que você teste todas as funcionalidades sem precisar de um backend.

No arquivo `.env`:
```env
VITE_USE_MOCK_DATA=true
```

### Credenciais de teste (dados mockados)

#### Professores:
- **Email:** joao.silva@universidade.edu.br | **Senha:** 123456
- **Email:** maria.santos@universidade.edu.br | **Senha:** 123456
- **Email:** carlos.oliveira@universidade.edu.br | **Senha:** 123456
- **Email:** ana.costa@universidade.edu.br | **Senha:** 123456

#### Diretor:
- **Email:** diretor@universidade.edu.br | **Senha:** 123456

### Usando API real

Para conectar com uma API real, configure no arquivo `.env`:
```env
VITE_API_URL=http://localhost:3000/api
VITE_USE_MOCK_DATA=false
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── hooks/              # Custom hooks
├── pages/              # Páginas da aplicação
├── routes/             # Configuração de rotas
├── services/           # Serviços (API, auth, mockData)
└── utils/              # Utilitários
```

## 🎯 Funcionalidades

- **Login e autenticação** (Professor/Diretor)
- **Dashboard** com estatísticas
- **Gestão de professores**
- **Visualização de feedbacks**
- **Perfil do usuário**
- **Sistema de avaliações**

## 🧪 Dados de Teste

A aplicação inclui dados mockados com:
- 4 professores
- 1 diretor
- 6 disciplinas
- 4 cursos
- 12 feedbacks de exemplo

Todos os dados estão em `src/services/mockData.ts` e podem ser personalizados conforme necessário.
