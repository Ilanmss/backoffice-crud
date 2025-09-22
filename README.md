# BackofficeCrud

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run: `ng serve`

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command: `ng test`

## O que é este projeto
Este projeto é um backoffice para CRUD de tabelas de dados de clientes. Ele permite visualizar, cadastrar, solicitar acesso e gerenciar diferentes tabelas de dados, simulando operações comuns de um sistema administrativo.

Principais funcionalidades:
- Listagem de todas as tabelas disponíveis
- Visualização das tabelas do usuário
- Solicitação de acesso a tabelas restritas
- Cadastro de novas tabelas

## Como funciona o mock

O projeto utiliza dados mockados para simular as respostas do backend.  
Esses dados estão localizados em `src/app/shared/services/buscar-tabelas/mock.json` e são utilizados pelos serviços Angular para alimentar os componentes.

Os serviços (`BuscarTabelasService`) possuem métodos que filtram e retornam os dados mockados conforme o tipo de consulta (tabelas do usuário, tabelas disponíveis, solicitações, etc).

Para trocar para uma API real, basta substituir as chamadas `of(MOCKDATA)` por chamadas HTTP usando o `HttpClient`.


## Como eu melhoraria esse projeto

- **Implementar autenticação e autorização:** Adicionar login/logout e controle de acesso por usuário.
- **Persistência real:** Integrar com uma API RESTful para salvar, editar e excluir dados de verdade.
- **Validação avançada de formulários:** Usar validações assíncronas e feedback visual mais detalhado.
- **Feedback de usuário:** Adicionar notificações (snackbars/toasts) para ações de sucesso ou erro.
- **Paginação e busca:** Permitir filtrar e paginar as tabelas exibidas.
- **Responsividade:** Melhorar o layout para funcionar bem em dispositivos móveis.
- **Documentação técnica:** Detalhar melhor os endpoints, interfaces e fluxo de dados.
- **Melhor UX:** Refinar navegação, loading indicators e acessibilidade.
- **Deixar acessível:** Trabalhar toda acessibilidade do site para pessoas com dificuldades de visão, completamente cegas ou surdas.
