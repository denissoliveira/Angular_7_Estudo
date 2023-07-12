# Finansys

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Instalando Angular

`npm install -g @angular/cli` (npm install -g @angular/cli@latest - para ultima versão)
`npm cache verify`
`ng new app`
`cd app`
`ng serve`

### Instalando a versão 7

`npm install -g @angular/cli@7`
`ng --version` -> verificando a versão

## Criando o Projeto Angular 7

```bash
ng new finansys --routing --skip-tests
```

* routing -> cria um rota básica;
* skip-tests -> criar sem os testes;

### Dependencias

```bash
npm i bootstrap@4.1.3 jquery@3.3.1 --save
npm i angular-imask@4.1.0 --save
npm i currency-formatter@1.5.3 --save
npm i moment@2.22.2 --save
npm i toastr@2.1.4 --save
npm i primeng@6.1.5 --save
npm i primeicons@1.0.0 --save
npm i chart.js@2.7.3 --save
npm i angular-in-memory-web-api@0.7.0
```

* **Pesquise cada um para saber o que faz** *

* Abrir o arquivo angular.json e modificar:

```json
    "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/toastr/build/toastr.min.css",
        "node_modules/primeicons/primeicons.css",
        "node_modules/primeng/resources/themes/nova-light/theme.css",
        "node_modules/primeng/resources/primeng.min.css"
    ],
    "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "node_modules/chart.js/dist/Chart.bundle.js"
    ]
```

* Confirme os caminhos acima para verificar se eles existem;
* Rodar `ng s` ou `ng serve` para tester as dependências.

### Criando Modulos e componentes

```bash
ng g m pages/categories --routing
ng g c pages/categories/category-list
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
