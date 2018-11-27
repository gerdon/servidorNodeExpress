const model = require("../models/index").filme;

function findFilmes() {
  return new Promise((resolve, reject) => {
    model
      .findAll()
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(`Erro ao buscar o catálago filmes: ${err}`);
        reject(err);
      });
  });
}

function findByIdFilme(data) {
  return new Promise((resolve, reject) => {
    model
      .findAll({ where: { id: data.id } })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(`Erro ao buscar o filme: ${err}`);
        reject(err);
      });
  });
}

function createFilme(data) {
  return new Promise((resolve, reject) => {
    model
      .create(data)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(`Erro ao criar o filme: ${err}`);
        reject(err);
      });
  });
}

function updateFilme(data) {
  return new Promise((resolve, reject) => {
    model
      .update(data, { where: { id: data.id } })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(`Erro ao atualizar o filme: ${err}`);
        reject(err);
      });
  });
}

function deleteFilme(data) {
  return new Promise((resolve, reject) => {
    model
      .destroy({ where: { id: data.id } })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(`Erro ao deletar o filme: ${err}`);
        reject(err);
      });
  });
}

module.exports = {
  findFilmes,
  createFilme,
  updateFilme,
  deleteFilme,
  findByIdFilme
};
