const router = require("../../config/servidor").app;
const service = require("../services/user.service");

/**
 * Listar todos usuários
 */
router.get("/users", async (request, response, next) => {
  await service
    .findUsers()
    .then(data => {
      response.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      response.status(503).send(err);
    });
  next();
});

/**
 * Buscar usuário por id
 */
router.post("/users/id", async (request, response, next) => {
  await service
    .findByIdUser(request.body)
    .then(data => {
      response.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      response.status(503).send(err);
    });
  next();
});

/**
 * Criar novo usuário
 */
router.post("/users", async (request, response, next) => {
  const userRegister = await service
    .createUser(request.body)
    .then(data => {
      response.status(200).send("Usuário inserido com sucesso");
    })
    .catch(err => {
      console.log(err);
      response.status(503).send(err);
    });

  response.json(userRegister);
  next();
});

/**
 * Editar usuário
 */
router.put("/users", async (request, response, next) => {
  await service
    .updateUser(request.body)
    .then(data => {
      response.status(200).send("Usuário atualizado com sucesso");
    })
    .catch(err => {
      console.log(err);
      response.status(503).send(err);
    });
  next();
});

/**
 * Deletar usuário
 */
router.delete("/users", async (request, response, next) => {
  await service
    .deleteUser(request.body)
    .then(data => {
      response.status(200).send("Usuário excluído com sucesso");
    })
    .catch(err => {
      console.log(err);
      response.status(503).send(err);
    });
  next();
});

module.exports = router;
