<div align="center">

# 📊 Avalie Web

### Sistema de Avaliação Acadêmica para Instituições de Ensino Superior

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Sobre](#-sobre-o-projeto) •
[Funcionalidades](#-funcionalidades) •
[Tecnologias](#-tecnologias) •
[Instalação](#-instalação) •
[Demo](#-demo-mode) •
[Estrutura](#-estrutura-do-projeto) •
[Contribuir](#-como-contribuir)

</div>

---

## 📋 Sobre o Projeto

**Avalie Web** é uma plataforma desenvolvida como projeto acadêmico para gerenciamento de avaliações de desempenho docente em instituições de ensino superior. O sistema permite que alunos forneçam feedback sobre professores e disciplinas, enquanto gestores e docentes podem visualizar estatísticas, gráficos e relatórios detalhados.

### 🎯 Objetivos

- Facilitar o processo de avaliação docente
- Fornecer insights através de dashboards interativos
- Centralizar feedbacks e comentários dos alunos
- Permitir gestão administrativa de professores e disciplinas
- Demonstrar habilidades em desenvolvimento web moderno

### 🎓 Contexto Acadêmico

Este projeto foi desenvolvido como trabalho de conclusão de curso, aplicando conhecimentos de:
- Desenvolvimento Frontend com React e TypeScript
- Arquitetura de componentes reutilizáveis
- Gerenciamento de estado e rotas
- Integração com APIs RESTful
- Autenticação e autorização por níveis
- Design responsivo e UX/UI

---

## ✨ Funcionalidades

### 👤 Para Professores (Nível 1)
- ✅ Dashboard com estatísticas de desempenho
- ✅ Visualização de feedbacks recebidos
- ✅ Filtros por disciplina, curso e período
- ✅ Gráficos de avaliações (positivas, neutras, negativas)
- ✅ Solicitação de feedbacks aos alunos
- ✅ Gerenciamento de perfil pessoal

### 👥 Para Diretores (Nível 2)
- ✅ Todas as funcionalidades de professor
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

### Credenciais de Acesso

**Professores (Nível 1):**
| Email | Senha | Disciplinas |
|-------|-------|-------------|
| joao.silva@universidade.edu.br | 123456 | Algoritmos, POO |
| maria.santos@universidade.edu.br | 123456 | Banco de Dados, Eng. Software |
| carlos.oliveira@universidade.edu.br | 123456 | Redes, Segurança |
| ana.costa@universidade.edu.br | 123456 | IA, Machine Learning |

**Diretor (Nível 2):**
| Email | Senha |
|-------|-------|
| diretor@universidade.edu.br | 123456 |

### Dados Demo Disponíveis
- 📚 **4 Cursos** (Ciência da Computação, Eng. Software, etc.)
- 📖 **12 Disciplinas** com horários e dias da semana
- 👨‍🏫 **8 Professores** com múltiplas disciplinas
- 💬 **51+ Feedbacks** distribuídos entre disciplinas
- 📊 **Estatísticas** e gráficos totalmente funcionais

> 📝 Para mais detalhes, consulte [MOCK_DATA.md](./MOCK_DATA.md)

---

## 📁 Estrutura do Projeto

```
avalie-web/
├── src/
│   ├── assets/              # Imagens e recursos estáticos
│   ├── components/          # Componentes reutilizáveis
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── page-layout.tsx
│   │   ├── header/          # Header com date picker e modais
│   │   └── menu-bar/        # Menu lateral de navegação
│   ├── hooks/               # Custom React Hooks
│   │   ├── useCourses.ts    # Hook para gerenciar cursos
│   │   ├── useDisciplines.ts # Hook para disciplinas
│   │   ├── useFeedbacks.ts  # Hook para feedbacks
│   │   ├── useProfessors.ts # Hook para professores
│   │   ├── useUserAccessLevel.ts
│   │   ├── useUserData.ts
│   │   └── useUserId.ts
│   ├── pages/               # Páginas da aplicação
│   │   ├── add-professor/   # Cadastro de professores
│   │   ├── dashboard/       # Dashboard com estatísticas
│   │   ├── feedbacks/       # Listagem de feedbacks
│   │   ├── login/           # Tela de autenticação
│   │   ├── not-found/       # Página 404
│   │   ├── professors/      # Gestão de professores
│   │   ├── profile/         # Perfil do usuário
│   │   └── request-feedback/ # Solicitação de avaliações
│   ├── routes/              # Configuração de rotas
│   │   └── private-route.tsx # Proteção de rotas por nível
│   ├── services/            # Camada de serviços
│   │   ├── api.ts           # Client HTTP com mock support
│   │   ├── auth.ts          # Serviços de autenticação
│   │   ├── error.ts         # Tratamento de erros
│   │   ├── mockData.ts      # Dados mockados para demo
│   │   └── types.ts         # TypeScript interfaces
│   ├── utils/               # Funções utilitárias
│   │   ├── feedbackRequestUtils.ts
│   │   ├── feedbackUtils.tsx
│   │   ├── professorUtils.ts
│   │   └── statisticUtils.ts
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

## 🏗 Arquitetura e Padrões

### Componentes
- **Componentização modular**: Cada funcionalidade isolada em seu próprio componente
- **Props typing**: Todas as props fortemente tipadas com TypeScript
- **Composition over inheritance**: Uso de composição de componentes

### Hooks Personalizados
```typescript
// Exemplo: useFeedbacks.ts
export function useProfessorFeedbacks(professorId: string | null) {
  const [professorFeedbacks, setProfessorFeedbacks] = useState<Feedback[]>();
  
  useEffect(() => {
    async function fetchProfessorFeedbacks() {
      if (professorId) {
        const data = await getProfessorFeedbacks(professorId);
        if (data) setProfessorFeedbacks(data);
      }
    }
    fetchProfessorFeedbacks();
  }, [professorId]);
  
  return professorFeedbacks;
}
```

### Rotas Protegidas
```typescript
<PrivateRoute requiredLevel={2}>
  <ProfessorsPage />
</PrivateRoute>
```

### Gerenciamento de Estado
- **LocalStorage** para persistência de autenticação
- **React Hooks** (useState, useEffect) para estado local
- **Custom Hooks** para lógica reutilizável

---

## 🔒 Autenticação e Autorização

### Fluxo de Autenticação
1. Usuário faz login com email/senha
2. Backend retorna JWT access token e refresh token
3. Tokens são armazenados no localStorage
4. Todas as requisições incluem o access token
5. Ao expirar, refresh token é usado automaticamente

### Níveis de Acesso
- **Nível 0**: Não autenticado (apenas login)
- **Nível 1**: Professor (dashboard, feedbacks, perfil)
- **Nível 2**: Diretor (acesso completo + gestão)

### Proteção de Rotas
```typescript
// PrivateRoute component
export function PrivateRoute({ 
  children, 
  requiredLevel = 1 
}: PrivateRouteProps) {
  const accessLevel = useUserAccessLevel();
  const userId = useUserId();

  if (!userId || !accessLevel) {
    return <Navigate to="/login" replace />;
  }

  if (accessLevel < requiredLevel) {
    return <Navigate to="/not-found" replace />;
  }

  return <>{children}</>;
}
```

---

## 📊 Visualização de Dados

### Dashboards Interativos
- **ECharts**: Gráficos de pizza para distribuição de notas
- **Recharts**: Gráficos de barras para comparações
- **Estatísticas em tempo real**: Cálculo dinâmico de médias e totais

### Filtros Avançados
- Filtrar por disciplina
- Filtrar por curso
- Filtrar por intervalo de notas
- Filtrar por período (data)

---

## 🎨 Design System

### Paleta de Cores
```css
:root {
  --primary: #3B82F6;      /* Blue 500 */
  --secondary: #10B981;    /* Green 500 */
  --danger: #EF4444;       /* Red 500 */
  --warning: #F59E0B;      /* Amber 500 */
  --background: #F9FAFB;   /* Gray 50 */
  --text: #111827;         /* Gray 900 */
}
```

### Componentes Principais
- **Button**: Variantes (primary, secondary, danger) com estados
- **Input**: Validação visual e mensagens de erro
- **Modal**: Diálogos e confirmações
- **Toast**: Notificações não-obstrutivas

---

## 🧪 Testes

### Estratégia de Testes
```bash
# Executar testes (quando implementados)
npm run test

# Executar linter
npm run lint
```

### Cobertura Planejada
- [ ] Testes unitários (Jest + Testing Library)
- [ ] Testes de integração
- [ ] Testes E2E (Cypress/Playwright)
- [x] Validação de tipos (TypeScript)
- [x] Linting (ESLint)

---

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

Gera pasta `dist/` otimizada para deploy.

### Plataformas Suportadas
- **Vercel**: Deploy automático com integração Git
- **Netlify**: Configuração simplificada
- **GitHub Pages**: Hospedagem gratuita
- **Nginx**: Servidor web tradicional

### Configuração Nginx (exemplo)
```nginx
server {
  listen 80;
  server_name avalie.example.com;
  
  root /var/www/avalie-web/dist;
  index index.html;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
}
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

**Desenvolvido com 💙 por [Breno Crepaldi](https://github.com/brenocrepaldi)**

</div>
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
