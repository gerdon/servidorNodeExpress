# Servidor NodeJS com Express e Sequelize

## Configurar ambiente

### Iniciar um repositório node

```
npm init 
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

### Instalar o pacote do MySQL o mysql12 para que o sequelize tenha acesso aos recursos do banco de dados definido

```
npm install --save mysql2
```

### Criar arquivos iniciais do sequelize

```
node_modules/.bin/sequelize init
```

## Migrations

### Criar migration para banco de dados

```
node_modules/.bin/sequelize migration:create --name=create-users
node_modules/.bin/sequelize migration:create --name=create-filmes
```

### Testar se as migration está funcionando corretamente

```
node_modules/.bin/sequelize db:migrate
```