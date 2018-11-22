# Servidor NodeJS com Express e Sequelize

## Configurar ambiente

### Iniciar um repositório node

```
npm init 
```

### Instalar a dependência do ExpressJS

```
npm install express --save
```

### Instalar a dependência do Sequelize e Sequelize-CLI

```
npm install sequelize --save
npm install -D sequelize-cli
```

### Instalar a dependência do Body-Parser

```
npm install body-parser --save
```

### Instalar o pacote do MySQL o mysql12 para que o sequelize tenha acesso aos recursos do banco de dados definido

```
npm install mysql2 --save
```

### Criar arquivos iniciais do sequelize

```
node_modules/.bin/sequelize init
```

### Criar migration 

```
node_modules/.bin/sequelize migration:create --name=create-users
```

### Testar se as migration está funcionando corretamente

```
node_modules/.bin/sequelize db:migrate
```