const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const { user } = require('./app/models/index');

const app = express();

// Configuração do body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Criando um usuário assim que iniciar o servidor
// user.create({ name: 'Talison', email: 'talison@email.com', password: '123456' });

// Raiz do servidor
app.get("/", function(req, res) {
  res.send("<h1>Servidor rodando com ExpressJS<h1></h1>");
})

// Listar todos usuários
app.get('/users', async (req, res) => {
	user.findAll().then(result => {
		res.send(result);
	}).catch(err => {
		console.log(err);
	})
});

// Criar novo usuário
app.post('/users', async (req, res) => {
	const userRegister = await user.create(req.body)
		.then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		});

  res.json(userRegister);
});

// Buscar usuário por id
app.get('/users/:id', (req, res) => {});

// Editar usuário
app.put('/users/:id', (req, res) => {});

// Deletar usuário
app.delete('/users/:id', (req, res) => {});

// Criar o servidor para fica ouvindo na porta 3000
http.createServer(app)
	.listen(3000, () => {
		console.log("Servidor rodando localmente na porta 3000");
	});