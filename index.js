const server = require('./config/servidorTest').app;
const port = require('./config/servidorTest').port;
const router = require('./app/routes/routers');

// Criar o servidor para fica ouvindo na porta 3000
server.listen(port, (router) => {
	console.log(`Servidor rodando localmente na porta ${port}`);
});