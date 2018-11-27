module.exports = (sequelize, Sequelize) => {
  const filme = sequelize.define("filme", {
    imagem: Sequelize.TEXT('medium'),
    nome: Sequelize.STRING,
    categoria: Sequelize.STRING,
    duracao: Sequelize.STRING
  });

  filme.sync();

  return filme;
};
