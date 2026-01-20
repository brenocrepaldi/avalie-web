<div align="center">

<img src="./src/assets/logo.png" alt="Avali-e Logo" width="250" />

**Sistema completo de gestão e avaliação acadêmica para instituições de ensino**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📋 Sobre o Projeto

**Avali-e** é uma plataforma desenvolvida como projeto acadêmico para gerenciamento de avaliações de desempenho docente em instituições de ensino superior. O sistema permite que alunos forneçam feedback sobre professores e disciplinas, enquanto gestores e docentes podem visualizar estatísticas, gráficos e relatórios detalhados.

### 🎯 Objetivos

- Facilitar o processo de avaliação docente
- Fornecer insights através de dashboards interativos
- Centralizar feedbacks e comentários dos alunos
- Permitir gestão administrativa de professores e disciplinas
- Demonstrar habilidades em desenvolvimento web moderno

### 🎓 Contexto Acadêmico

Este projeto foi desenvolvido como trabalho de curso, aplicando conhecimentos de:
- Desenvolvimento Frontend com React e TypeScript
- Arquitetura de componentes reutilizáveis
- Gerenciamento de estado e rotas
- Integração com APIs RESTful
- Autenticação e autorização por níveis
- Design responsivo e UX/UI

---

## ✨ Funcionalidades

### 👤 Para Professores
- ✅ Dashboard com estatísticas de desempenho
- ✅ Visualização de feedbacks recebidos
- ✅ Filtros por disciplina, curso e período
- ✅ Gráficos de avaliações (positivas, neutras, negativas)
- ✅ Solicitação de feedbacks aos alunos
- ✅ Gerenciamento de perfil pessoal

### 👥 Para Diretores 
- ✅ Gestão completa de professores
- ✅ Cadastro de novos docentes
- ✅ Visualização de relatórios gerenciais
- ✅ Análise comparativa entre professores

### 🔐 Segurança
- ✅ Autenticação JWT
- ✅ Rotas protegidas por nível de acesso
- ✅ Refresh token automático
- ✅ Validação de dados no frontend

---

## 🛠 Tecnologias

### Frontend Core
- **[React 18.3.1](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5.2.2](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite 7.1.7](https://vitejs.dev/)** - Build tool de alta performance

### Roteamento e Estado
- **[React Router DOM 6.27.0](https://reactrouter.com/)** - Roteamento declarativo
- **LocalStorage** - Gerenciamento de autenticação

### UI/UX
- **[TailwindCSS 3.4.4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Tailwind Variants 0.2.1](https://www.tailwind-variants.org/)** - Variantes de componentes
- **[Lucide React 0.403.0](https://lucide.dev/)** - Biblioteca de ícones
- **[Sonner 1.5.0](https://sonner.emilkowal.ski/)** - Sistema de notificações toast

### Visualização de Dados
- **[Recharts 2.13.0](https://recharts.org/)** - Gráficos responsivos
- **[ECharts 5.5.1](https://echarts.apache.org/)** - Gráficos interativos avançados
- **[ECharts for React 3.0.2](https://github.com/hustcc/echarts-for-react)** - Wrapper React

### Utilitários
- **[Axios 1.7.2](https://axios-http.com/)** - Cliente HTTP
- **[date-fns 3.6.0](https://date-fns.org/)** - Manipulação de datas
- **[React Day Picker 8.10.1](https://react-day-picker.js.org/)** - Seletor de datas

### Qualidade de Código
- **[ESLint 8.57.0](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[@typescript-eslint](https://typescript-eslint.io/)** - Regras ESLint para TypeScript
- **[Autoprefixer 10.4.19](https://github.com/postcss/autoprefixer)** - PostCSS plugin

---

## 🚀 Instalação

### Pré-requisitos

```bash
Node.js >= 18.0.0
npm >= 9.0.0 ou yarn >= 1.22.0
```

### 📦 Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/brenocrepaldi/avalie-web.git
cd avalie-web
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env`:
```env
# URL da API backend (opcional para modo demo)
VITE_API_URL=http://localhost:3000/api

# Modo demo com dados mockados (true/false)
VITE_USE_MOCK_DATA=true
```

4. **Execute em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Build para produção**
```bash
npm run build
# ou
yarn build
```

6. **Preview da build de produção**
```bash
npm run preview
# ou
yarn preview
```

A aplicação estará disponível em `http://localhost:5173`

---

## 🎮 Demo Mode

O projeto inclui um **modo demo completo** com dados mockados, permitindo testar todas as funcionalidades sem necessidade de backend.

### Ativando o Demo Mode

No arquivo `.env`, configure:
```env
VITE_USE_MOCK_DATA=true
```

---

## 📁 Estrutura do Projeto

```
avalie-web/
├── src/
│   ├── assets/              # Imagens e recursos estáticos
│   ├── components/          # Componentes reutilizáveis
│   ├── hooks/               # Custom React Hooks
│   ├── pages/               # Páginas da aplicação
│   ├── routes/              # Configuração de rotas
│   ├── services/            # Camada de serviços
│   ├── utils/               # Funções utilitárias
│   ├── app.tsx              # Componente raiz com rotas
│   ├── main.tsx             # Entry point da aplicação
│   ├── index.css            # Estilos globais
│   └── vite-env.d.ts        # Tipos do Vite
├── public/                  # Arquivos públicos
├── .env.example             # Exemplo de variáveis de ambiente
├── index.html               # HTML base
├── package.json             # Dependências e scripts
├── tailwind.config.js       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
└── README.md                # Este arquivo
```

---

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrões de Commit
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração de código
- `test:` Adição de testes
- `chore:` Tarefas gerais

---

## 📝 Licença

Este projeto foi desenvolvido para fins acadêmicos e está disponível sob a licença MIT.

---

## 👨‍💻 Autor

**Breno Crepaldi**

- GitHub: [@brenocrepaldi](https://github.com/brenocrepaldi)
- LinkedIn: [Breno Crepaldi](https://linkedin.com/in/brenocrepaldi)

---

## 🙏 Agradecimentos

- Professores e coordenadores da universidade
- Comunidade React e TypeScript
- Desenvolvedores das bibliotecas open-source utilizadas

---

<div align="center">

**⭐ Se este projeto foi útil para você, considere dar uma estrela!**

**Desenvolvido por [Breno Crepaldi](https://github.com/brenocrepaldi)**

</div>
