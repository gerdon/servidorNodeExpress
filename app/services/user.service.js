const model = require("../models/index").user;

function findUsers() {
  return new Promise((resolve, reject) => {
    model
      .findAll()
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(`Erro ao buscar os usuários: ${err}`);
        reject(err);
      });
  });
}

function findByIdUser(data) {
  return new Promise((resolve, reject) => {
    model
      .findAll({ where: { id: data.id } })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(`Erro ao buscar o usuário: ${err}`);
        reject(err);
      });
  });
}

function createUser(data) {
  return new Promise((resolve, reject) => {
    model
      .create(data)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(`Erro ao criar o usuário: ${err}`);
        reject(err);
      });
  });
}

function updateUser(data) {
  return new Promise((resolve, reject) => {
    model
      .update(data, { where: { id: data.id } })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(`Erro ao atualizar o usuário: ${err}`);
        reject(err);
      });
  });
}

function deleteUser(data) {
  return new Promise((resolve, reject) => {
    model
      .destroy({ where: { id: data.id } })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(`Erro ao deletar o usuário: ${err}`);
        reject(err);
      });
  });
}

module.exports = {
  findUsers,
  createUser,
  updateUser,
  deleteUser,
  findByIdUser
};
