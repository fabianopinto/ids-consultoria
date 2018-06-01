# Consultoria IDS

| Data       | Atividade |
| ---------- | --------- |
| 03/05/2018 | 1h54 (Skype) |
|            | 1h30 (módulos dinâmicos, child routes) |
| 22/05/2018 | 2h51 (Skype) |
|            | 2h40 (dependências, template/reacive forms, interfaces/classes) |

## Resumo 03/05/2018

- Utilização de versões LATEST
    - Boa cobertura de testes (unitário/integração)
    - Versões "major" do Angular a cada semestre
    - Risco estendido entre dependências (Angular vs. PrimeNG)
- Dependências -- OK, jQuery
- Boas práticas para formulários
    - Template driven
      - Formulários simples
      - Fácil, sintaxe de anotações
    - Reactive forms
      - Formulários complexos
      - FormBuilder, FormControl, FormState
- Interfaces vs. classes
  - Interfaces
    - Semântica (Serializable), contrato, assinatura de métodos
    - Interfaces genéricas
    - Injeção de dependências, mocks TDD
    - Dependências múltiplas
    - Design patterns -- factory methods, strategy
  - Classes
    - Mais simples
    - Indireção de dependência com interfaces
- Teste unitário/integração
  - Unitário para serviços, filtros, pipes, helpers, validadores
  - Integração para componentes (código + templates)
  - Jasmine - simples, tradicional AAA, globais
  - Jest - popular React, orientado UI
- Teste end-to-end
  - Alternativa - teste exploratório, equipe QA
  - Instrumentação do código, versionamento
  - Protractor - selenium server, equipe QA, teste exploratório

## Exemplo TDD

Criação do projeto e execução inicial dos testes:

> `ng new exemplo-tdd`

> `ng test`

    3 specs, 1 failure
    AppComponent
        should create the app
        should have as title 'app'
        should render title in a h1 tag
            ✕ Expected ' Welcome to app! ' to contain 'Welcome to exemplo-tdd!'.

> `ng e2e`

    workspace-project App
        ✓ should display welcome message
    Executed 1 of 1 spec SUCCESS in 2 secs.

Removido código inútil gerado pelo Angular CLI e respectivos testes.

> `git commit -a -m 'removido conteúdo inútil e testes obsoletos'`

    README.md                     | 85 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    e2e/src/app.e2e-spec.ts       |  5 -----
    src/app/app.component.html    | 19 -------------------
    src/app/app.component.spec.ts | 13 ++-----------
    src/app/app.component.ts      |  4 +---
    5 files changed, 88 insertions(+), 38 deletions(-)

Nova execução dos testes:

> `ng test`

    1 spec, 0 failures
    AppComponent
        should create the app

> `ng e2e`

    Executed 0 of 0 specs SUCCESS in 0.003 sec.


---

# ExemploTdd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
