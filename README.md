# Controle de Investimentos - Frontend 📈

## Sobre o Projeto
Uma interface de usuário simples e intuitiva para gerenciar investimentos. Este projeto foi desenvolvido como parte de um teste prático e consome uma API REST para realizar operações de CRUD (Criar, Ler, Atualizar, Deletar) em registros de investimentos.

Este é o **frontend** da aplicação. O repositório do back-end pode ser encontrado aqui: `https://github.com/natan-mluz/controle-investimentos-backend`

***

## Funcionalidades
-   **Cadastro de Investimentos:** Formulário para adicionar novos ativos.
-   **Listagem de Ativos:** Tabela que exibe todos os investimentos cadastrados.
-   **Edição de Investimentos:** Permite atualizar as informações de um ativo diretamente pela lista.
-   **Exclusão de Investimentos:** Permite remover um ativo da carteira com uma janela de confirmação.

***

## Tecnologias Utilizadas
-   **React.js:** Biblioteca principal para a construção da interface de usuário e gerenciamento de estado.
-   **Vite:** Ferramenta de build de última geração que oferece um ambiente de desenvolvimento extremamente rápido.
-   **Axios:** Cliente HTTP para realizar as chamadas à API do back-end de forma simples e eficiente.
-   **CSS:** Estilização customizada para os componentes, sem o uso de frameworks CSS.

***

## ✅ Pré-requisitos
Antes de começar, é necessário ter as seguintes ferramentas instaladas:
-   [Node.js]
-   [Git]

***

## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/natan-mluz/controle-investimentos-frontend.git](https://github.com/natan-mluz/controle-investimentos-frontend.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd controle-investimentos-frontend
    ```

3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

4.  **Inicie a aplicação em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Após iniciar, o servidor de desenvolvimento estará disponível em `http://localhost:5173`. Abra este endereço no seu navegador de preferência.

***

## Conexão com o Back-end
Para que a aplicação funcione completamente, o servidor do **back-end** precisa estar em execução.

-   Por padrão, esta aplicação tentará se conectar à API na URL `http://localhost:3000`.
-   A configuração da URL base da API pode ser encontrada no arquivo `src/api.js`.
-   Certifique-se de que o projeto back-end esteja rodando na porta `3000` ou ajuste a `baseURL` no arquivo `src/api.js` se necessário.