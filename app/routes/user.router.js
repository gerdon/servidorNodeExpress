const router = require('../../config/servidorTest').app;
const service = require('../services/user.service');

const { user } = require('../models/index');

// Listar todos usuários
// router.get('/users', (request, response, next) => {
// 	console.log("Inicio")
// 	service.findUsers().then(data => {
// 		response.status(200).send(data);
// 		// response.status(200).json(data);
// 	}).catch(err => {
// 		response.status(503).send(err);
// 	})
// });

// Listar todos usuários
router.get('/users', async (req, res, next) => {
	user.findAll().then(result => {
		res.send(200, result);
		next();
	}).catch(err => {
		console.log(err);
	})
});

// Criar novo usuário
router.post('/users', async (req, res) => {
	const userRegister = await user.create(req.body)
		.then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		});

  res.json(userRegister);
});

// Buscar usuário por id
router.get('/users/:id', (req, res) => {});

// Editar usuário
router.put('/users/:id', (req, res) => {});

// Deletar usuário
router.delete('/users/:id', (req, res) => {});

module.exports = router;