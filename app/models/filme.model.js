module.exports = (sequelize, Sequelize) => {
  const filme = sequelize.define("filme", {
    imagem: Sequelize.BLOB,
    nome: Sequelize.STRING,
    categoria: Sequelize.STRING,
    duracao: Sequelize.STRING
  });

  filme.sync();

  return filme;
};
