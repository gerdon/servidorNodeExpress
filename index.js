const server = require("./config/servidor").app;
const port = require("./config/servidor").port;
const router = require("./app/routes/routers");

/**
 * Criar o servidor para fica ouvindo na porta 3000
 */
server.listen(port, router => {
  console.log(`Servidor rodando localmente na porta ${port}`);
});
