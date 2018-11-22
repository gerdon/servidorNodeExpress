module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    });
  
    return user;
}