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

// Buscar usuário por id
router.get('/users', async (request, response, next) => {
	await user.findAll({ where: { id: request.body.id } })
	.then(data => {
		response.send(200, data);
	}).catch(err => {
		console.log(err);
		response.send(400, err);
	});
	next();
});

// Listar todos usuários
router.get('/users', async (request, response, next) => {
	await user.findAll()
	.then(data => {
		response.send(200, data);
	}).catch(err => {
		console.log(err);
		response.send(400, err);
	});
	next();
});

// Criar novo usuário
router.post('/users', async (request, response, next) => {
	const userRegister = await user.create(request.body)
		.then(data => {
			response.send(200, 'Usuário inserido com sucesso');
		}).catch(err => {
			console.log(err);
			response.send(400, err);
		});

	  response.json(userRegister);
	  next();
});

// Editar usuário
router.put('/users', async (request, response, next) => {
	await user.update(request.body, { where: { id: request.body.id } })
	.then(data => {
		response.send(200, 'Usuário atualizado com sucesso');
	}).catch(err => {
		console.log(err);
		response.send(400, err);
	});
	next();
});

// Deletar usuário
router.delete('/users', async (request, response, next) => {
	await user.destroy({ where: { id: request.body.id } })
	.then(data => {
		response.send(200, 'Usuário excluído com sucesso');
	}).catch(err => {
		console.log(err);
		response.send(400, err);
	});
	next();
});

module.exports = router;