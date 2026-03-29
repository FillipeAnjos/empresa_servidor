## About Empresa - BACK-END

Bem-vindo ao Empresas, aplicativo desenhado para functionar Offline First, fácil e inteligente. 
Com a interface intuitiva, você pode criar, editar, visualizar e muito mais, tudo online ou offline.
OBS: O projeto Empresas foi criado como forma de apresentação.

## Tecnologias 

Node Js / TypeScript / JavaScript / TypeOrm / PostgreSQL

## Instalação

1° Clonar o projeto
2° cd empresa_servidor
3° npm install 
4° npm run dev ou yarn dev 
5° OBS: Esse projeto contém apenas o Back-End do sistema
   o Front-end se encontra em outro repositório. 

## Bibliotecas

### Instalação do ORM Typeorm
npm install typeorm

### Instalação o express
npm install express
npm add @types/express - D

### Instalação do ts node dev - bem parecido com o nodmon
npm add ts-node-dev -D

### Instalar o Typescript
npm install typescript

### Usar criptografia
npm install bcryptjs
npm add @types/bcryptjs -D

### Instalação do Metadata
npm install reflect-metadata

### Para evitar erro cors
npm add cors
npm add @types/cors -D

### Referente a formatação de datas
npm install moment --save

### Referente ao entendimento de variaveis ambientes
npm install dotenv

### Referente ao babel para "build" e depois "start"
npm add @babel/cli -D
npm add @babel/core -D
npm add @babel/node -D
npm add @babel/plugin-proposal-class-properties -D
npm add @babel/plugin-proposal-decorators -D
npm add @babel/preset-env -D
npm add babel-plugin-module-resolver -D
npm add babel-plugin-transform-typescript-metadata -D
npm add @babel/preset-typescript -D

### -----------------------------------------------------

### Arquivos importantes

ormconfig.js - Raiz do projeto
tsconfig.json - Raiz do projeto
.env - Raiz do projeto
babel.config.js - Raiz do projeto
package.json - Raiz do projeto

### BACK-END COMANDOS - TYPEORM

//Comando para criar uma migration
npx typeorm migration:create -n Create<nome da migration>

//Comando para rodar as migrations
npm run typeorm migration:run

## Passos para subir o projeto - BACK-END

1° - Crie uma base de dados com o nome que preferir. Eu usei o nome "empresa". Lambrando que o banco é PostgreSQL.

2° - Ponha todas as informações da sua conexão no arquivo ".env" que se encontra na raiz do projeto.

3° - rode o comando " npm run typeorm migration:run " para criar todas as migrations.


