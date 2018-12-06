# SERVIDOR NODEJS COM EXPRESS E SEQUELIZE
    Este é um servidor NodeJS utilizando o framework Express JS, o Sequelize e Migrations para configurar banco de dados relacionais.

## Configurar ambiente
    Abaixo é segue os passos em ordem para configurar o ambiente.

## DEPENDÊNCIAS
### Instalar as dependências do projeto clonado (All)

```
npm install
```
ou
```
npm i
```

### Instalar a dependência do ExpressJS

```
npm install --save express
```

### Instalar a dependência do Sequelize e Sequelize-CLI

```
npm install --save sequelize
npm install -D sequelize-cli
```

### Instalar a dependência do Body-Parser

```
npm install --save body-parser
```

### Instalar o pacote do MySQL, o mysql12 para que o sequelize tenha acesso aos recursos do banco de dados definido

```
npm install --save mysql2
```

### Criar arquivos iniciais de configuração do sequelize

```
node_modules/.bin/sequelize init
```

## BANCO DE DADOS

```
execute o script filmesmix.sql em um banco de dados MySQL para criar o esquema de banco dados
```

## MIGRATIONS

### Criar migration para banco de dados
    -- Scripts para tabelas de banco de dados:
        - filmes
        - users

```
node_modules/.bin/sequelize migration:create --name=create-filmes
node_modules/.bin/sequelize migration:create --name=create-users
```

### Executa as migrations geradas para o banco de dados

```
node_modules/.bin/sequelize db:migrate
```
