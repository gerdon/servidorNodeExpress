const router = require('../../config/servidorTest').app;
const service = require('../services/filme.service');

// Listar todos filmes
router.get('/filmes', async (request, response, next) => {
	await service.findFilmes()
	.then(data => {
		response.status(200).send(data);
	}).catch(err => {
		console.log(err);
		response.status(503).send(err);
	});
	next();
});

// Buscar filme por id
router.post('/filmes/id', async (request, response, next) => {
	await service.findByIdFilme(request.body)
	.then(data => {
		response.status(200).send(data);
	}).catch(err => {
		console.log(err);
		response.status(503).send(err);
	});
	next();
});

// Criar novo filme
router.post('/filmes', async (request, response, next) => {
	const filmeRegister = await service.createFilme(request.body)
	.then(data => {
		response.status(200).send('Filme inserido com sucesso')
	}).catch(err => {
		console.log(err);
		response.status(503).send(err);
	});

	response.json(filmeRegister);
	next();
});

// Editar filme
router.put('/filmes', async (request, response, next) => {
	await service.updateFilme(request.body)
	.then(data => {
		response.status(200).send('Filme atualizado com sucesso');
	}).catch(err => {
		console.log(err);
		response.status(503).send(err);
	});
	next();
});

// Deletar filme
router.delete('/filmes', async (request, response, next) => {
	await service.deleteFilme(request.body)
	.then(data => {
		response.status(200).send('Filme excluído com sucesso');
	}).catch(err => {
		console.log(err);
		response.status(503).send(err);
	});
	next();
});

module.exports = router;