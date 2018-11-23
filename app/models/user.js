module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    });
  
    user.sync();

    return user;
}