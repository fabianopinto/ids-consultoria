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

### Requisitos iniciais

1. Criar o serviço 'CalculoService' para execução de cálculos matemáticos;
2. Implementar o método 'dividir', recebendo dois números, dividendo e divisor, e retornando o quociente;
3. Este método deverá lançar uma exceção 'divisão por zero', caso ocorra.

Criação e implementação do serviço, conforme especificação:

> `ng generate service services/calculo`

> `ng test`

    5 specs, 0 failures
    AppComponent
        should create the app
    CalculoService
        should be created
        deve existir um método "dividir"
        dividir dois números e retornar o quociente
        lançar exceção "divisão por zero"

Commit das implementações conforme requisitos:

> `git commit -a -m 'implementação de requisitos iniciais'`

    README.md                                | 29 +++++++++++++++++++++++++++++
    src/app/services/calculo.service.spec.ts | 29 +++++++++++++++++++++++++++++
    src/app/services/calculo.service.ts      | 16 ++++++++++++++++
    3 files changed, 74 insertions(+)

### Requisitos componente 1

4. Criar um componente 'Calculadora' para efetuar divisões;
5. Incluir duas entradas para números, dividendo e divisor;
6. Incluir um botão "Dividir" para execução do cálculo;
7. Apresentar o resultado após o retorno do cálculo;
8. Utilizar o serviço 'CalculoService' para as operações.

Criação e implementação do componente, conforme especificação:

> `ng generate component calculadora`

> `ng test`

Falha na criação de ambiente para testes:

    Failed: Template parse errors:
    'app-calculadora' is not a known element:
    1. If 'app-calculadora' is an Angular component, then verify that it is part of this module.
    2. If 'app-calculadora' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

Falha com a dependência 'FormsModule':

    Failed: Template parse errors:
    Can't bind to 'ngModel' since it isn't a known property of 'input'.

Concluída implementação do componente Calculadora:

    14 specs, 0 failures
    AppComponent
        should create the app
    CalculadoraComponent
        should create
        deve incluir entradas para dividendo e divisor
        entrada de dividendo reflete no modelo
        entrada divisor reflete no modelo
        deve incluir um botão "Dividir"
        botão "Dividir" deve executar o cálculo
        operação deve ser registrar resultado
        resultado deve ser apresentado
        utilizar o serviço "CalculoService" na operação
    CalculoService
        should be created
        deve existir um método "dividir"
        dividir dois números e retornar o quociente
        lançar exceção "divisão por zero"

Commit das implementações conforme requisitos:

> `git commit -a -m 'implementação do componente "Calculadora"'`

    README.md                                         | 61 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    src/app/app.component.html                        |  2 +-
    src/app/app.component.spec.ts                     |  6 +++---
    src/app/app.module.ts                             | 11 +++++++----
    src/app/calculadora/calculadora.component.css     | 13 +++++++++++++
    src/app/calculadora/calculadora.component.html    |  8 ++++++++
    src/app/calculadora/calculadora.component.spec.ts | 91 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    src/app/calculadora/calculadora.component.ts      | 23 +++++++++++++++++++++++
    8 files changed, 202 insertions(+), 8 deletions(-)

### Erro detectado e requisitos adicionais

Erro na operação quando número divisor é zero:

    ERROR Error: divisão por zero
        at CalculoService.push../src/app/services/calculo.service.ts.CalculoService.dividir (main.js:263)
        at CalculadoraComponent.push../src/app/calculadora/calculadora.component.ts.CalculadoraComponent.calcularDivisao (main.js:220)
        at Object.eval [as handleEvent] (ng:///AppModule/CalculadoraComponent.ngfactory.js:115)
        at handleEvent (vendor.js:40815)
        at callWithDebugContext (vendor.js:41912)
        at Object.debugHandleEvent [as handleEvent] (vendor.js:41615)
        at dispatchEvent (vendor.js:38269)
        at vendor.js:38713
        at HTMLButtonElement.<anonymous> (vendor.js:55493)
        at ZoneDelegate.push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask (polyfills.js:2743)

9. Tratamento de erro "divisão por zero" na execução do cálculo;
10. Bloquear a entrada de números negativos, desabilitando o botão "Dividir";
11. No caso de resultado exponencial, apresentar o texto "resultado inválido".

Concluídos os ajustes e requisitos adicionais:

> `ng test`

    18 specs, 0 failures
    AppComponent
        should create the app
    CalculadoraComponent
        should create
        deve incluir entradas para dividendo e divisor
        entrada de dividendo reflete no modelo
        entrada divisor reflete no modelo
        deve incluir um botão "Dividir"
        botão "Dividir" deve executar o cálculo
        operação deve ser registrar resultado
        resultado da operação deve ser apresentado
        utilizar o serviço "CalculoService" na operação
        tratar erro no caso de divisão por zero
        bloquear botão "Dividir" quando dividendo é negativo
        bloquear botão "Dividir" quando divisor é negativo
        no caso de resultado exponencial apresentar "resultado inválido"
    CalculoService
        should be created
        deve existir um método "dividir"
        dividir dois números e retornar o quociente
        lançar exceção "divisão por zero"

> `git commit -a -m 'ajustes e requisitos adicionais'`

    README.md                                         | 55 +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    src/app/calculadora/calculadora.component.html    |  4 ++--
    src/app/calculadora/calculadora.component.spec.ts | 33 ++++++++++++++++++++++++++++++---
    src/app/calculadora/calculadora.component.ts      | 15 +++++++++++++--
    4 files changed, 100 insertions(+), 7 deletions(-)


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
