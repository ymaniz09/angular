# Cursos de Typescript @ Alura

Cursos da [formação Angular](https://cursos.alura.com.br/formacao-angular), disponível na plataforma da Alura.

## Typescript: Descobrindo a linguagem:

### TypeScript parte 1: Evoluindo seu Javascript
- [X] Bem começado, metade feito
- [X] Benefícios da tipagem estática
- [X] Elaborando uma solução de view
- [X] Herança, reaproveitamento de código
- [X] TypeScript definitions

### TypeScript parte 2: Mais técnicas e boas práticas
- [X] NameSpace e módulos externos
- [X] Lapidando nosso código
- [X] O poder dos decorators
- [X] API externa e interface
- [X] Mais sobre interfaces

## Running the project:
### Installing dependencies:
- Install all dependencies listed in package.json:
```
$ npm install
```
- This should be run inside api folder as well

### Running the API server:
```
$ npm start
```
- You could check it at http://localhost:8080/dados

### Running the main server:
```
$ npm start
```
- You could check it at http://localhost:3000/
- The script start will run concurrently "npm run watch" "npm run server", thus any change on .ts files will trigger a refresh on browser-sync
