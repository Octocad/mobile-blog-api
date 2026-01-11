# Mobile Blog App

Aplicativo mobile desenvolvido em React Native para um sistema de blogging acadêmico, integrado com uma API RESTful.

## 📱 Visão Geral

O Mobile Blog App é uma aplicação React Native que permite:
- **Professores**: Criar, editar, gerenciar posts e administrar usuários
- **Alunos**: Visualizar posts e comentar
- **Autenticação**: Sistema de login com diferentes níveis de acesso

### Funcionalidades Principais
- ✅ Autenticação de usuários (professores e alunos)
- ✅ Listagem de posts com sistema de busca
- ✅ Criação e edição de posts
- ✅ CRUD completo de professores e alunos
- ✅ Interface administrativa
- ✅ Comentários em posts
- ✅ Navegação intuitiva entre telas

## 🚀 Setup Inicial

### Pré-requisitos
- Node.js 16+
- npm ou yarn
- Expo CLI
- Android Studio (para Android) ou Xcode (para iOS - macOS apenas)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/Octocad/mobile-blog-api.git
cd mobile-blog-api

2. Instale as dependências

npm install

3. Instale as dependências do Expo

npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler

4. Execute o projeto

# Inicie o servidor de desenvolvimento
npx expo start
```

Credenciais para Teste
Durante o desenvolvimento, estamos usando autenticação mockada:

Como Professor:

Email: prof@teste.com

Senha: 123456

Acesso: Tela Admin com todas as permissões

Como Aluno:

Email: aluno@teste.com

Senha: 123456

Acesso: Tela Home (apenas visualização)

🏗️ Arquitetura da Aplicação
Estrutura de Pastas
```bash 
mobile-blog-api/
├── src/
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── HomeScreen.js
│   │   ├── PostDetailScreen.js
│   │   ├── CreateEditPostScreen.js
│   │   ├── TeacherListScreen.js
│   │   ├── CreateEditTeacherScreen.js
│   │   ├── StudentListScreen.js
│   │   └── AdminScreen.js
│   ├── services/
│   │   └── api.js
│   └── utils/
│       └── storage.js
├── App.js
├── AppNavigator.js
├── package.json
└── README.md
```
Componentes Principais:

- Navegação (AppNavigator.js)

- Configuração principal da navegação usando React Navigation

- Stack Navigator para transições entre telas

- Roteamento baseado em autenticação

- Serviços (src/services/api.js)

- Mock de API para desenvolvimento

- Funções para autenticação, posts, professores e alunos

- Simulação de chamadas assíncronas

- Telas (src/screens/)

- LoginScreen: Tela de autenticação

- HomeScreen: Listagem de posts com busca

- PostDetailScreen: Visualização completa do post

- CreateEditPostScreen: Criação/edição de posts

- TeacherListScreen: Listagem de professores

- CreateEditTeacherScreen: Criação/edição de professores

- StudentListScreen: Listagem de alunos

- AdminScreen: Dashboard administrativo

- Gerenciamento de Estado

- AsyncStorage para persistência local

- Estado local com React Hooks (useState, useEffect)

- Context API para estado global (se necessário expandir)



📖 Guia de Uso

1. Primeiro Acesso
Execute o aplicativo: npx expo start

Escaneie o QR Code com o app Expo Go no celular

Faça login com as credenciais de teste

2. Como Professor

Login como Professor:

Use: prof@teste.com / 123456

Será redirecionado para a tela Admin


Funcionalidades disponíveis:

Criar Post: Acesse "Criar Nova Postagem" na tela Admin

Gerenciar Posts: Todos os posts aparecem na Home

Gerenciar Professores: Acesse "Gerenciar Professores"

Gerenciar Alunos: Acesse "Gerenciar Alunos"

Editar/Excluir: Toque em posts ou usuários para opções


3. Como Aluno

Login como Aluno:

Use: aluno@teste.com / 123456

Será redirecionado para a tela Home

Funcionalidades disponíveis:

Visualizar Posts: Toque em qualquer post para ler

Buscar Posts: Use a barra de busca na Home

Comentar: (Funcionalidade opcional implementável)

4. Navegação

Botão Voltar: Retorna à tela anterior

Logout: Na tela Admin, botão "Sair"

Menu Admin: Acesso rápido a todas as funcionalidades




## Build para Produção:

- Android:

 Build APK
expo build:android

 Ou gere localmente
cd android
./gradlew assembleRelease


- iOS (apenas macOS):

expo build:ios



📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.


### Desenvolvido com ❤️ para a comunidade acadêmica

